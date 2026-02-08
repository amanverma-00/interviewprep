import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Editor from '@monaco-editor/react';
import { LuCircleArrowOutUpRight } from 'react-icons/lu';
import { AiFillFileText } from 'react-icons/ai';
import { MdCloudUpload } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa';
import { FaRegLightbulb } from 'react-icons/fa6';
import './MockSession.css';

// Types
interface TestCase {
    input: string;
    output: string;
    explanation?: string;
}

interface Problem {
    problemId: string;
    title: string;
    difficulty: 'easy' | 'medium' | 'hard';
    slug?: string;
    order: number;
    solved: boolean;
    description?: string;
    constraints?: string;
    starterCode?: Array<{ language: string; code: string }>;
    visibleTestCases?: TestCase[];
    hiddenTestCases?: TestCase[];
    companyTags?: string[];
    topics?: string[];
    pattern?: string[];
    hints?: string[];
}

interface MockSessionData {
    sessionId: string;
    type: string;
    config: {
        company?: string;
        difficulty?: string;
        pattern?: string;
        problemCount: number;
    };
    status: 'pending' | 'in_progress' | 'completed' | 'abandoned';
    problems: Problem[];
    startedAt?: string;
    expiresAt?: string;
    remainingTime?: number;
    score?: {
        solved: number;
        total: number;
    };
}

interface TestResult {
    passed: boolean;
    input: string;
    expected: string;
    actual: string;
    isHidden?: boolean;
    runtime?: number;
    memory?: number;
}

// Language mapping for Monaco
const LANGUAGE_MAP: Record<string, string> = {
    'javascript': 'javascript',
    'python': 'python',
    'java': 'java',
    'cpp': 'cpp',
    'c++': 'cpp',
};

const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const MockSession: React.FC = () => {
    const { sessionId } = useParams<{ sessionId: string }>();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // Session state
    const [session, setSession] = useState<MockSessionData | null>(null);
    const [loading, setLoading] = useState(true);
    const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(0);

    // Editor state
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('javascript');

    // Execution state
    const [isRunning, setIsRunning] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [testResults, setTestResults] = useState<TestResult[] | null>(null);
    const [activeTestCase, setActiveTestCase] = useState(0);
    const [consoleOutput, setConsoleOutput] = useState('');
    const [executionStatus, setExecutionStatus] = useState<'idle' | 'accepted' | 'wrong' | 'error'>('idle');

    // UI state
    const [showTopics, setShowTopics] = useState(false);
    const [expandedHints, setExpandedHints] = useState<number[]>([]);
    const [panelWidth, setPanelWidth] = useState(50); // percentage
    const [bottomPanelHeight, setBottomPanelHeight] = useState(200); // pixels
    const [bottomPanelTab, setBottomPanelTab] = useState<'testcase' | 'result'>('testcase');
    const [showConfirmEnd, setShowConfirmEnd] = useState(false);
    const [showConfirmAbandon, setShowConfirmAbandon] = useState(false);

    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const resizing = useRef(false);
    const bottomResizing = useRef(false);

    // Auth helper
    const getAuthHeaders = useCallback(() => ({
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }), []);

    const getSessionId = useCallback(() => {
        return session?.sessionId || (session as unknown as { _id: string })?._id;
    }, [session]);

    // Current problem
    const currentProblem = session?.problems?.[currentProblemIndex];

    // Generate mock session
    const generateMock = useCallback(async () => {
        setLoading(true);
        try {
            const type = searchParams.get('type') || 'difficulty';
            const company = searchParams.get('company');
            const difficulty = searchParams.get('difficulty') || 'medium';
            const pattern = searchParams.get('pattern');
            const count = parseInt(searchParams.get('count') || '3');

            // Build request body based on type
            const requestBody: {
                type: string;
                problemCount: number;
                company?: string;
                difficulty?: string;
                pattern?: string;
            } = {
                type,
                problemCount: count,
            };

            // Add the required field based on type
            if (type === 'company' && company) {
                requestBody.company = company;
            } else if (type === 'difficulty') {
                requestBody.difficulty = difficulty;
            } else if (type === 'pattern' && pattern) {
                requestBody.pattern = pattern;
            } else if (type === 'company' && !company) {
                // Default to difficulty if company type but no company specified
                requestBody.type = 'difficulty';
                requestBody.difficulty = difficulty;
            } else if (type === 'pattern' && !pattern) {
                // Default to difficulty if pattern type but no pattern specified
                requestBody.type = 'difficulty';
                requestBody.difficulty = difficulty;
            }

            const response = await axios.post('/api/mocks/generate', requestBody, getAuthHeaders());

            if (response.data.success) {
                const sessionData = response.data.data;
                setSession({
                    ...sessionData,
                    sessionId: sessionData.sessionId || sessionData._id
                });
                navigate(`/mock-test/session/${sessionData.sessionId || sessionData._id}`, { replace: true });
            }
        } catch (error: unknown) {
            const axiosError = error as { response?: { data?: { message?: string } } };
            toast.error(axiosError.response?.data?.message || 'Failed to generate mock');
            navigate('/mock-test');
        } finally {
            setLoading(false);
        }
    }, [searchParams, navigate, getAuthHeaders]);

    // Fetch session data
    const fetchSession = useCallback(async (id: string) => {
        if (!id || id === 'undefined') {
            navigate('/mock-test');
            return;
        }

        try {
            const response = await axios.get(`/api/mocks/${id}`, getAuthHeaders());
            if (response.data.success) {
                const data = response.data.data;
                const normalizedSession = {
                    ...data,
                    sessionId: data.sessionId || data._id,
                    problems: data.problems?.map((p: Record<string, unknown>) => ({
                        problemId: (p.problem as Record<string, unknown>)?._id || p.problemId,
                        title: (p.problem as Record<string, unknown>)?.title || p.title,
                        difficulty: (p.problem as Record<string, unknown>)?.difficulty || p.difficulty,
                        description: (p.problem as Record<string, unknown>)?.description || p.description,
                        constraints: (p.problem as Record<string, unknown>)?.constraints || p.constraints,
                        starterCode: (p.problem as Record<string, unknown>)?.starterCode || p.starterCode,
                        visibleTestCases: (p.problem as Record<string, unknown>)?.visibleTestCases || p.visibleTestCases,
                        hiddenTestCases: (p.problem as Record<string, unknown>)?.hiddenTestCases || p.hiddenTestCases,
                        companyTags: (p.problem as Record<string, unknown>)?.companyTags || p.companyTags,
                        topics: (p.problem as Record<string, unknown>)?.topics || p.topics,
                        pattern: (p.problem as Record<string, unknown>)?.pattern || p.pattern,
                        hints: (p.problem as Record<string, unknown>)?.hints || p.hints,
                        order: p.order,
                        solved: p.solved,
                    })) || []
                };

                setSession(normalizedSession);
                if (normalizedSession.remainingTime) {
                    setTimeRemaining(normalizedSession.remainingTime);
                }
            }
        } catch {
            toast.error('Failed to load session');
            navigate('/mock-test');
        } finally {
            setLoading(false);
        }
    }, [navigate, getAuthHeaders]);

    // Start session
    const startSession = async () => {
        if (!session) return;
        const id = getSessionId();
        if (!id) return;

        try {
            const response = await axios.post(`/api/mocks/${id}/start`, {}, getAuthHeaders());
            if (response.data.success) {
                toast.success('Session started! Good luck!');
                setSession(prev => prev ? { ...prev, ...response.data.data, status: 'in_progress' } : null);

                if (response.data.data.endsAt) {
                    const remaining = Math.floor((new Date(response.data.data.endsAt).getTime() - Date.now()) / 1000);
                    setTimeRemaining(remaining);
                }
            }
        } catch (error: unknown) {
            const axiosError = error as { response?: { data?: { message?: string } } };
            toast.error(axiosError.response?.data?.message || 'Failed to start session');
        }
    };

    // Switch problem
    const switchProblem = (index: number) => {
        if (!session?.problems || index < 0 || index >= session.problems.length) return;
        setCurrentProblemIndex(index);
        setTestResults(null);
        setExecutionStatus('idle');
        setActiveTestCase(0);
        setExpandedHints([]); // Reset expanded hints when switching problems
        setShowTopics(false); // Reset topics when switching problems
    };

    // Toggle individual hint
    const toggleHint = (hintIndex: number) => {
        setExpandedHints(prev =>
            prev.includes(hintIndex)
                ? prev.filter(i => i !== hintIndex)
                : [...prev, hintIndex]
        );
    };

    // Run code
    const runTests = async () => {
        if (!session || !currentProblem) return;
        setIsRunning(true);
        setTestResults(null);
        setBottomPanelTab('result');
        setExecutionStatus('idle');

        try {
            const response = await axios.post(
                `/api/submit/run/${currentProblem.problemId}`,
                { code, language },
                getAuthHeaders()
            );

            if (response.data.success) {
                const { data } = response.data;
                setConsoleOutput(data.output || data.errorMessage || '');

                const result: TestResult = {
                    passed: data.status === 'Accepted',
                    input: data.input || '',
                    expected: currentProblem.visibleTestCases?.[0]?.output || '',
                    actual: data.output || '',
                    runtime: data.runtime,
                    memory: data.memory
                };
                setTestResults([result]);
                setExecutionStatus(data.status === 'Accepted' ? 'accepted' : 'wrong');
            } else {
                toast.error(response.data.message || 'Run failed');
                setExecutionStatus('error');
            }
        } catch (error: unknown) {
            const axiosError = error as { response?: { data?: { message?: string } } };
            toast.error(axiosError.response?.data?.message || 'Run failed');
            setExecutionStatus('error');
        } finally {
            setIsRunning(false);
        }
    };

    // Submit code
    const submitCode = async () => {
        if (!session || !currentProblem) return;
        setIsSubmitting(true);
        setTestResults(null);
        setBottomPanelTab('result');
        setExecutionStatus('idle');

        try {
            const sessionId = getSessionId();
            const response = await axios.post(
                `/api/submit/submit/${currentProblem.problemId}`,
                { code, language, mockSessionId: sessionId },
                getAuthHeaders()
            );

            if (response.data.success) {
                const { data } = response.data;

                const results: TestResult[] = data.testCasesResults?.map((tc: {
                    status: string;
                    input?: string;
                    expectedOutput?: string;
                    actualOutput?: string;
                    runtime?: number;
                    memory?: number;
                }) => ({
                    passed: tc.status === 'passed',
                    input: tc.input || 'Hidden',
                    expected: tc.expectedOutput || 'Hidden',
                    actual: tc.actualOutput || (tc.status === 'passed' ? tc.expectedOutput : 'Wrong Answer'),
                    isHidden: !tc.input,
                    runtime: tc.runtime,
                    memory: tc.memory
                })) || [];

                // Add hidden test case indicators
                const visibleCount = results.length;
                for (let i = visibleCount; i < (data.testCasesTotal || 0); i++) {
                    results.push({
                        passed: i < data.testCasesPassed,
                        input: 'Hidden',
                        expected: 'Hidden',
                        actual: 'Hidden',
                        isHidden: true
                    });
                }

                setTestResults(results);
                setExecutionStatus(data.status === 'Accepted' ? 'accepted' : 'wrong');

                if (data.status === 'Accepted') {
                    toast.success('🎉 Accepted! All test cases passed!');
                    setSession(prev => {
                        if (!prev) return null;
                        const updated = [...prev.problems];
                        updated[currentProblemIndex] = { ...updated[currentProblemIndex], solved: true };
                        return { ...prev, problems: updated };
                    });
                } else {
                    toast.error(`${data.testCasesPassed}/${data.testCasesTotal} test cases passed`);
                }
            }
        } catch (error: unknown) {
            const axiosError = error as { response?: { data?: { message?: string } } };
            toast.error(axiosError.response?.data?.message || 'Submission failed');
            setExecutionStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Complete session
    const completeSession = useCallback(async () => {
        if (!session) return;
        const id = getSessionId();
        if (!id) return;

        try {
            const response = await axios.post(`/api/mocks/${id}/complete`, {}, getAuthHeaders());
            if (response.data.success) {
                toast.success('Session completed!');
                setSession(prev => prev ? { ...prev, status: 'completed', score: response.data.data.score } : null);
                setShowConfirmEnd(false);
            }
        } catch (error: unknown) {
            const axiosError = error as { response?: { data?: { message?: string } } };
            toast.error(axiosError.response?.data?.message || 'Failed to complete');
        }
    }, [session, getSessionId, getAuthHeaders]);

    // Abandon session
    const abandonSession = async () => {
        if (!session) return;
        const id = getSessionId();
        if (!id) return;

        try {
            await axios.post(`/api/mocks/${id}/abandon`, {}, getAuthHeaders());
            toast.success('Session abandoned');
            navigate('/mock-test');
        } catch {
            toast.error('Failed to abandon session');
        }
    };

    // Handle panel resize
    const handleMouseDown = () => {
        resizing.current = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!resizing.current) return;
        const container = document.querySelector('.leetcode-layout');
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const newWidth = ((e.clientX - rect.left) / rect.width) * 100;
        setPanelWidth(Math.min(70, Math.max(30, newWidth)));
    };

    const handleMouseUp = () => {
        resizing.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    // Handle bottom panel resize (vertical)
    const handleBottomMouseDown = () => {
        bottomResizing.current = true;
        document.addEventListener('mousemove', handleBottomMouseMove);
        document.addEventListener('mouseup', handleBottomMouseUp);
    };

    const handleBottomMouseMove = (e: MouseEvent) => {
        if (!bottomResizing.current) return;
        const editorPanel = document.querySelector('.editor-panel');
        if (!editorPanel) return;
        const rect = editorPanel.getBoundingClientRect();
        const newHeight = rect.bottom - e.clientY;
        setBottomPanelHeight(Math.min(400, Math.max(100, newHeight)));
    };

    const handleBottomMouseUp = () => {
        bottomResizing.current = false;
        document.removeEventListener('mousemove', handleBottomMouseMove);
        document.removeEventListener('mouseup', handleBottomMouseUp);
    };

    // Load starter code when language/problem changes
    useEffect(() => {
        if (!currentProblem?.starterCode) return;

        const starter = currentProblem.starterCode.find(
            s => s.language.toLowerCase() === language.toLowerCase()
        );

        if (starter) {
            setCode(starter.code);
        } else if (currentProblem.starterCode.length > 0) {
            setCode(currentProblem.starterCode[0].code);
        }
    }, [language, currentProblem]);

    // Timer effect
    useEffect(() => {
        if (session?.status === 'in_progress' && timeRemaining > 0) {
            timerRef.current = setInterval(() => {
                setTimeRemaining(prev => {
                    if (prev <= 1) {
                        completeSession();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [session?.status, timeRemaining, completeSession]);

    // Initial load
    const lastSessionIdRef = useRef<string | null>(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error('Please login');
            navigate('/login');
            return;
        }

        const isNew = !sessionId || sessionId === 'new';
        const currentId = isNew ? 'new' : sessionId;

        if (lastSessionIdRef.current === currentId) return;
        lastSessionIdRef.current = currentId;

        if (isNew) {
            generateMock();
        } else {
            fetchSession(sessionId);
        }
    }, [sessionId, fetchSession, generateMock, navigate]);

    // Loading state
    if (loading) {
        return (
            <div className="mock-session-page">
                <div className="session-loading">
                    <div className="loading-spinner" />
                    <p>Loading session...</p>
                </div>
            </div>
        );
    }

    // Not found
    if (!session) {
        return (
            <div className="mock-session-page">
                <div className="session-error">
                    <p>Session not found</p>
                    <button onClick={() => navigate('/mock-test')}>Back to Mock Test</button>
                </div>
            </div>
        );
    }

    // Pending state - show start screen
    if (session.status === 'pending') {
        return (
            <div className="mock-session-page">
                <div className="session-grid-bg" />
                <main className="start-main">
                    <div className="start-card">
                        <div className="start-header">
                            <span className="start-icon">🎯</span>
                            <h1>Ready to Start?</h1>
                            <span className="start-type">{session.type} Mock</span>
                        </div>
                        <div className="start-info">
                            <div className="info-item">
                                <span className="info-icon">📝</span>
                                <div>
                                    <span className="info-label">Problems</span>
                                    <span className="info-value">{session.problems.length}</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">⏱️</span>
                                <div>
                                    <span className="info-label">Time Limit</span>
                                    <span className="info-value">{session.config.problemCount * 20} minutes</span>
                                </div>
                            </div>
                        </div>
                        <div className="start-actions">
                            <button className="btn-start" onClick={startSession}>
                                <span>▶</span> Start Session
                            </button>
                            <button className="btn-cancel" onClick={() => navigate('/mock-test')}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    // Completed state
    if (session.status === 'completed') {
        return (
            <div className="mock-session-page">
                <div className="session-grid-bg" />
                <main className="results-main">
                    <div className="results-card">
                        <div className="results-header">
                            <span className="results-icon">🏆</span>
                            <h1>Session Complete!</h1>
                        </div>
                        <div className="results-score">
                            <div className="score-circle">
                                <span className="score-value">{session.score?.solved || 0}</span>
                                <span className="score-total">/{session.score?.total || session.problems.length}</span>
                            </div>
                            <span className="score-label">Problems Solved</span>
                        </div>
                        <div className="results-actions">
                            <button className="btn-primary" onClick={() => navigate('/mock-test')}>
                                Back to Mock Tests
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    // In Progress - LeetCode style layout
    return (
        <div className="mock-session-page in-progress">
            {/* Header */}
            <header className="session-header">
                <div className="header-left">
                    <button className="btn-back" onClick={() => setShowConfirmAbandon(true)}>
                        ← Back
                    </button>
                    <div className="problem-nav">
                        {session.problems.map((p, i) => (
                            <button
                                key={i}
                                className={`problem-nav-btn ${i === currentProblemIndex ? 'active' : ''} ${p.solved ? 'solved' : ''}`}
                                onClick={() => switchProblem(i)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="header-center">
                    <div className={`timer ${timeRemaining < 300 ? 'danger' : timeRemaining < 600 ? 'warning' : ''}`}>
                        ⏱️ {formatTime(timeRemaining)}
                    </div>
                </div>
                <div className="header-right">
                    <button className="btn-finish" onClick={() => setShowConfirmEnd(true)}>
                        Finish
                    </button>
                </div>
            </header>

            {/* Main LeetCode Layout */}
            <div className="leetcode-layout">
                {/* Left Panel - Problem Description */}
                <div className="description-panel" style={{ width: `${panelWidth}%` }}>
                    <div className="panel-header">
                        <h2>{currentProblem?.title || 'Problem'}</h2>
                        <span className={`difficulty-badge ${currentProblem?.difficulty}`}>
                            {currentProblem?.difficulty}
                        </span>
                        {currentProblem?.solved && <span className="solved-badge">✓ Solved</span>}
                    </div>

                    <div className="panel-content">
                        {/* Description */}
                        <div className="problem-description">
                            <p>{currentProblem?.description || 'No description available'}</p>
                        </div>

                        {/* Examples */}
                        {currentProblem?.visibleTestCases?.map((tc, i) => (
                            <div key={i} className="example-block">
                                <h4>Example {i + 1}:</h4>
                                <div className="example-content">
                                    <div><strong>Input:</strong> <code>{tc.input}</code></div>
                                    <div><strong>Output:</strong> <code>{tc.output}</code></div>
                                    {tc.explanation && <div><strong>Explanation:</strong> {tc.explanation}</div>}
                                </div>
                            </div>
                        ))}

                        {/* Constraints */}
                        {currentProblem?.constraints && (
                            <div className="constraints-block">
                                <h4>Constraints:</h4>
                                <pre>{currentProblem.constraints}</pre>
                            </div>
                        )}

                        {/* Topics - Collapsible */}
                        {((currentProblem?.topics && currentProblem.topics.length > 0) ||
                            (currentProblem?.companyTags && currentProblem.companyTags.length > 0) ||
                            (currentProblem?.pattern && currentProblem.pattern.length > 0)) && (
                                <div className="topics-block">
                                    <button
                                        className={`topics-toggle ${showTopics ? 'expanded' : ''}`}
                                        onClick={() => setShowTopics(!showTopics)}
                                    >
                                        <span>Topics</span>
                                        <FaChevronDown className={`chevron-icon ${showTopics ? 'rotated' : ''}`} />
                                    </button>
                                    {showTopics && (
                                        <div className="topics-content">
                                            {currentProblem?.topics?.map((t, i) => (
                                                <span key={`topic-${i}`} className="tag topic">{t}</span>
                                            ))}
                                            {currentProblem?.pattern?.map((p, i) => (
                                                <span key={`pattern-${i}`} className="tag pattern">{p}</span>
                                            ))}
                                            {currentProblem?.companyTags?.map((c, i) => (
                                                <span key={`company-${i}`} className="tag company">{c}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                        {/* Hints - Individual Collapsible */}
                        {currentProblem?.hints && currentProblem.hints.length > 0 && (
                            <div className="hints-block">
                                {currentProblem.hints.map((hint, i) => (
                                    <div key={i} className="hint-item">
                                        <button
                                            className={`hint-toggle ${expandedHints.includes(i) ? 'expanded' : ''}`}
                                            onClick={() => toggleHint(i)}
                                        >
                                            <span className="hint-label">
                                                <FaRegLightbulb className="hint-icon" />
                                                Hint {i + 1}
                                            </span>
                                            <FaChevronDown className={`chevron-icon ${expandedHints.includes(i) ? 'rotated' : ''}`} />
                                        </button>
                                        {expandedHints.includes(i) && (
                                            <div className="hint-content">
                                                {hint}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Resizer */}
                <div className="panel-resizer" onMouseDown={handleMouseDown} />

                {/* Right Panel - Code Editor */}
                <div className="editor-panel" style={{ width: `${100 - panelWidth}%` }}>
                    {/* Editor Header */}
                    <div className="editor-header">
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="language-select"
                        >
                            <option value="javascript">JavaScript</option>
                            <option value="python">Python</option>
                            <option value="java">Java</option>
                            <option value="cpp">C++</option>
                        </select>
                        <div className="editor-actions">
                            <button
                                className="btn-run"
                                onClick={runTests}
                                disabled={isRunning || isSubmitting}
                            >
                                {isRunning ? '⏳ Running...' : '▶ Run'}
                            </button>
                            <button
                                className="btn-submit"
                                onClick={submitCode}
                                disabled={isRunning || isSubmitting}
                            >
                                {isSubmitting ? '⏳ Submitting...' : <><MdCloudUpload /> Submit</>}
                            </button>
                        </div>
                    </div>

                    {/* Monaco Editor */}
                    <div className="monaco-container">
                        <Editor
                            height="100%"
                            language={LANGUAGE_MAP[language] || 'javascript'}
                            value={code}
                            onChange={(value) => setCode(value || '')}
                            theme="vs-dark"
                            options={{
                                fontSize: 14,
                                minimap: { enabled: false },
                                scrollBeyondLastLine: false,
                                automaticLayout: true,
                                tabSize: 2,
                                wordWrap: 'on',
                                lineNumbers: 'on',
                                glyphMargin: false,
                                folding: true,
                                lineDecorationsWidth: 10,
                                lineNumbersMinChars: 3,
                            }}
                        />
                    </div>

                    {/* Bottom Panel Resizer */}
                    <div className="bottom-resizer" onMouseDown={handleBottomMouseDown} />

                    {/* Bottom Panel - Test Cases */}
                    <div className="bottom-panel" style={{ height: `${bottomPanelHeight}px` }}>
                        <div className="bottom-tabs">
                            <button
                                className={`tab ${bottomPanelTab === 'testcase' ? 'active' : ''}`}
                                onClick={() => setBottomPanelTab('testcase')}
                            >
                                <LuCircleArrowOutUpRight /> Testcase
                            </button>
                            <button
                                className={`tab ${bottomPanelTab === 'result' ? 'active' : ''}`}
                                onClick={() => setBottomPanelTab('result')}
                            >
                                <AiFillFileText /> Test Result
                            </button>
                        </div>

                        <div className="bottom-content">
                            {bottomPanelTab === 'testcase' && (
                                <div className="testcase-panel">
                                    {/* Case tabs */}
                                    <div className="case-tabs">
                                        {currentProblem?.visibleTestCases?.map((_, i) => (
                                            <button
                                                key={i}
                                                className={`case-tab ${activeTestCase === i ? 'active' : ''}`}
                                                onClick={() => setActiveTestCase(i)}
                                            >
                                                Case {i + 1}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Case content */}
                                    {currentProblem?.visibleTestCases?.[activeTestCase] && (
                                        <div className="case-content">
                                            <div className="case-field">
                                                <label>Input</label>
                                                <div className="case-value">
                                                    {currentProblem.visibleTestCases[activeTestCase].input}
                                                </div>
                                            </div>
                                            <div className="case-field">
                                                <label>Expected Output</label>
                                                <div className="case-value">
                                                    {currentProblem.visibleTestCases[activeTestCase].output}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {bottomPanelTab === 'result' && (
                                <div className="result-panel">
                                    {!testResults && !isRunning && !isSubmitting && (
                                        <div className="result-empty">
                                            Run or submit your code to see results
                                        </div>
                                    )}

                                    {(isRunning || isSubmitting) && (
                                        <div className="result-loading">
                                            <div className="loading-spinner small" />
                                            {isRunning ? 'Running tests...' : 'Submitting...'}
                                        </div>
                                    )}

                                    {testResults && (
                                        <>
                                            {/* Status header */}
                                            <div className={`result-status ${executionStatus}`}>
                                                {executionStatus === 'accepted' && '✅ Accepted'}
                                                {executionStatus === 'wrong' && '❌ Wrong Answer'}
                                                {executionStatus === 'error' && '⚠️ Error'}
                                                {testResults[0]?.runtime && (
                                                    <span className="runtime">
                                                        Runtime: {testResults[0].runtime}ms
                                                    </span>
                                                )}
                                            </div>

                                            {/* Case tabs for results */}
                                            <div className="case-tabs">
                                                {testResults.map((r, i) => (
                                                    <button
                                                        key={i}
                                                        className={`case-tab ${activeTestCase === i ? 'active' : ''} ${r.passed ? 'passed' : 'failed'}`}
                                                        onClick={() => setActiveTestCase(i)}
                                                    >
                                                        {r.passed ? '✓' : '✗'} Case {i + 1}
                                                        {r.isHidden && ' 🔒'}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Result content */}
                                            {testResults[activeTestCase] && (
                                                <div className="case-content">
                                                    {!testResults[activeTestCase].isHidden ? (
                                                        <>
                                                            <div className="case-field">
                                                                <label>Input</label>
                                                                <div className="case-value">
                                                                    {testResults[activeTestCase].input}
                                                                </div>
                                                            </div>
                                                            <div className="case-field">
                                                                <label>Expected</label>
                                                                <div className="case-value">
                                                                    {testResults[activeTestCase].expected}
                                                                </div>
                                                            </div>
                                                            <div className="case-field">
                                                                <label>Your Output</label>
                                                                <div className={`case-value ${testResults[activeTestCase].passed ? 'correct' : 'wrong'}`}>
                                                                    {testResults[activeTestCase].actual}
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="hidden-case">
                                                            🔒 Hidden Test Case
                                                            <p>Status: {testResults[activeTestCase].passed ? '✅ Passed' : '❌ Failed'}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {showConfirmEnd && (
                <div className="modal-overlay" onClick={() => setShowConfirmEnd(false)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <h3>Finish Session?</h3>
                        <p>Are you sure? Any unsolved problems will be marked as incomplete.</p>
                        <div className="modal-actions">
                            <button className="btn-secondary" onClick={() => setShowConfirmEnd(false)}>
                                Cancel
                            </button>
                            <button className="btn-confirm" onClick={completeSession}>
                                Finish
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showConfirmAbandon && (
                <div className="modal-overlay" onClick={() => setShowConfirmAbandon(false)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <h3>Abandon Session?</h3>
                        <p>This will end your session and your progress will be lost.</p>
                        <div className="modal-actions">
                            <button className="btn-secondary" onClick={() => setShowConfirmAbandon(false)}>
                                Cancel
                            </button>
                            <button className="btn-danger" onClick={abandonSession}>
                                Abandon
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MockSession;
