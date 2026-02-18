import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Rows4, Grid3x3, Ruler } from 'lucide-react';
import { PiBuildings, PiGraph } from 'react-icons/pi';
import { IoExtensionPuzzleOutline } from 'react-icons/io5';
import { CiViewTable } from 'react-icons/ci';
import { HiArrowsRightLeft, HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import { GrMicrofocus } from 'react-icons/gr';
import { MdManageSearch } from 'react-icons/md';
import { TfiLink } from 'react-icons/tfi';
import { TbBinaryTree, TbArrowBackUp, TbGeometry } from 'react-icons/tb';
import { GoGitBranch } from 'react-icons/go';
import { BiDollar, BiMath } from 'react-icons/bi';
import './MockTest.css';

// Company logos as SVG components
const CompanyLogos: Record<string, React.ReactNode> = {
    google: (
        <svg viewBox="0 0 24 24" className="company-logo">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
    ),
    meta: (
        <svg viewBox="0 0 24 24" className="company-logo">
            <path fill="#0866FF" d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.77-3.92 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
        </svg>
    ),
    amazon: (
        <svg viewBox="0 0 24 24" className="company-logo" preserveAspectRatio="xMidYMid meet">
            <path fill="#FF9900" d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.493.126.112.18.032.36-.238.54-.336.21-.72.422-1.15.634-2.478 1.22-5.15 1.83-8.02 1.83-4.548 0-8.624-1.393-12.23-4.18-.154-.117-.18-.27-.128-.46zm10.196-3.353c-.196-.37-.47-.637-.82-.804-.35-.167-.805-.25-1.36-.25-.12 0-.32.018-.6.055l-.18.028c-.16.02-.32.038-.48.056-.09 0-.18-.014-.27-.042-.1-.027-.18-.07-.25-.126-.12-.09-.18-.206-.18-.346 0-.23.14-.39.42-.48.28-.092.66-.136 1.14-.136.78 0 1.39.134 1.83.4.44.27.77.706.99 1.31l.45 1.23c.18.47.4.85.65 1.13.25.28.55.46.91.54.35.08.78.12 1.28.12.3 0 .62-.03.96-.09l.42-.07c.37-.056.58-.012.63.136v.01c.01.11-.1.23-.34.36-.23.13-.56.24-.99.33-.42.09-.85.136-1.27.136-.66 0-1.24-.077-1.74-.23-.5-.154-.93-.39-1.29-.71-.36-.32-.65-.72-.88-1.2l-.52-1.12z" />
            <path fill="#FF9900" d="M13.574 9.198c0-1.18-.353-2.128-1.058-2.848-.706-.72-1.69-1.08-2.95-1.08-1.26 0-2.26.377-3 1.13-.74.754-1.11 1.762-1.11 3.024 0 1.155.33 2.074.987 2.76.66.686 1.53 1.03 2.61 1.03.52 0 1.01-.077 1.48-.23.46-.153.88-.383 1.25-.69.36-.306.65-.66.87-1.06.22-.4.38-.83.49-1.29l.03-.15c.04-.2.03-.37-.03-.51-.07-.14-.2-.21-.39-.21h-3.96c-.3 0-.45-.15-.45-.44 0-.3.15-.44.45-.44h5c.2 0 .36.05.48.15.12.1.19.24.21.42v.16c-.02.22-.07.5-.15.83z" />
        </svg>
    ),
    microsoft: (
        <svg viewBox="0 0 24 24" className="company-logo">
            <path fill="#F25022" d="M1 1h10v10H1z" />
            <path fill="#7FBA00" d="M13 1h10v10H13z" />
            <path fill="#00A4EF" d="M1 13h10v10H1z" />
            <path fill="#FFB900" d="M13 13h10v10H13z" />
        </svg>
    ),
    apple: (
        <svg viewBox="0 0 24 24" className="company-logo">
            <path fill="#fff" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
    ),
    netflix: (
        <svg viewBox="0 0 24 24" className="company-logo">
            <path fill="#E50914" d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z" />
        </svg>
    ),
    uber: (
        <svg viewBox="0 0 24 24" className="company-logo" preserveAspectRatio="xMidYMid meet">
            <path fill="#fff" d="M0 7.97v4.958c0 1.867 1.302 3.101 3 3.101.826 0 1.562-.316 2.094-.87v.736H6.27V7.97H5.094v4.684c0 1.27-.807 2.119-1.925 2.119-1.088 0-1.891-.822-1.891-2.119V7.97zm17.05 0v4.958c0 1.867 1.302 3.101 2.999 3.101.826 0 1.563-.316 2.095-.87v.736H23.32V7.97h-1.176v4.684c0 1.27-.807 2.119-1.925 2.119-1.088 0-1.892-.822-1.892-2.119V7.97zM6.93 7.97h1.177v.78c.453-.591 1.132-.913 1.96-.913 1.603 0 2.762 1.254 2.762 2.997 0 1.744-1.159 2.998-2.762 2.998-.828 0-1.507-.322-1.96-.913v3.22H6.93zm3.986 2.878c0-1.088-.855-1.894-1.938-1.894-1.084 0-1.938.806-1.938 1.894 0 1.087.854 1.894 1.938 1.894 1.083 0 1.938-.807 1.938-1.894zm3.318-2.878h1.177v.69c.372-.498.939-.823 1.702-.823 1.343 0 2.267.963 2.267 2.454v3.604H18.2v-3.33c0-.975-.554-1.6-1.446-1.6-.932 0-1.519.665-1.519 1.6v3.33h-1.177z" />
        </svg>
    ),
    airbnb: (
        <svg viewBox="0 0 24 24" className="company-logo" preserveAspectRatio="xMidYMid meet">
            <path fill="#FF5A5F" d="M12.001 18.275c-.238-.344-.47-.695-.69-1.052-1.092-1.77-2.088-3.624-2.74-5.61-.192-.607-.334-1.21-.392-1.812-.082-.847.058-1.622.496-2.326.532-.86 1.323-1.376 2.32-1.576.812-.163 1.586-.074 2.298.347.82.484 1.348 1.193 1.544 2.133.138.663.082 1.32-.092 1.968-.328 1.22-.85 2.365-1.444 3.478-.67 1.254-1.424 2.456-2.23 3.627-.236.326-.48.645-.734.96-.108.138-.217.274-.336.413l-.002-.002zm-.003-1.156c.064-.09.127-.18.19-.27l.075-.11c.78-1.12 1.51-2.27 2.15-3.477.54-1.01 1.023-2.047 1.324-3.154.15-.554.21-1.114.12-1.68-.138-.87-.553-1.57-1.27-2.06-.6-.412-1.27-.56-2-.474-.87.103-1.58.48-2.1 1.186-.406.55-.573 1.167-.5 1.835.056.528.186 1.04.36 1.544.59 1.715 1.472 3.313 2.45 4.86.21.34.43.676.66 1.006.18.26.362.522.54.793l.003.003v-.002zm.003-7.792c-.702 0-1.297.576-1.297 1.295 0 .7.577 1.28 1.283 1.294.712.013 1.307-.57 1.31-1.287.003-.707-.587-1.302-1.296-1.302zM12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.628-5.373-12-12-12zm5.753 17.74c-.06.096-.195.207-.42.358-.503.34-1.157.656-1.908.924-1.643.587-3.452.88-5.425.88s-3.783-.293-5.426-.88c-.75-.268-1.404-.585-1.907-.924-.225-.15-.36-.262-.42-.357l-.003-.004c-.03-.046-.045-.097-.045-.158 0-.09.032-.17.08-.238.89-1.2 1.727-2.44 2.48-3.735.703-1.207 1.326-2.47 1.79-3.8.162-.465.292-.943.36-1.43.085-.603.06-1.185-.088-1.748-.264-.998-.82-1.796-1.647-2.385-.87-.62-1.857-.87-2.95-.7-1.15.18-2.07.703-2.73 1.6-.598.81-.86 1.73-.77 2.747.07.73.265 1.43.53 2.11.676 1.73 1.616 3.322 2.613 4.87.467.723.96 1.432 1.477 2.125.122.162.245.323.37.483l.025.03c.15.193.302.385.456.575.37.458.752.907 1.15 1.342.197.214.397.424.6.63.025.024.104.1.142.136l.012.013.004.004c.182.175.42.262.66.262.162 0 .326-.042.477-.127l.005-.002c.1-.06.192-.133.274-.218l.082-.09.08-.087c.396-.426.777-.87 1.145-1.323.153-.19.305-.38.455-.574l.027-.035c.125-.16.248-.32.37-.482.515-.688 1.01-1.394 1.476-2.117.996-1.546 1.937-3.138 2.613-4.868.264-.678.46-1.375.53-2.106.09-1.02-.172-1.94-.77-2.748-.66-.897-1.58-1.42-2.728-1.6-1.094-.17-2.083.08-2.952.7-.828.59-1.385 1.388-1.648 2.386-.148.564-.173 1.146-.088 1.75.068.487.198.964.36 1.43.464 1.33 1.087 2.593 1.79 3.8.753 1.294 1.59 2.535 2.48 3.735.048.07.08.15.08.24 0 .06-.014.11-.045.156l-.003.004-.002.004z" />
        </svg>
    ),
    linkedin: (
        <svg viewBox="0 0 24 24" className="company-logo">
            <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    twitter: (
        <svg viewBox="0 0 24 24" className="company-logo">
            <path fill="#fff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    stripe: (
        <svg viewBox="0 0 24 24" className="company-logo">
            <path fill="#635BFF" d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
        </svg>
    ),
    salesforce: (
        <svg viewBox="0 0 24 24" className="company-logo">
            <path fill="#00A1E0" d="M10.006 5.415a4.195 4.195 0 0 1 3.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.45 0-.87-.06-1.29-.165a3.9 3.9 0 0 1-3.42 2.025c-.45 0-.87-.075-1.26-.225a4.67 4.67 0 0 1-4.14 2.52 4.665 4.665 0 0 1-4.41-3.15 3.74 3.74 0 0 1-.51.045c-2.13 0-3.81-1.71-3.81-3.84 0-1.47.81-2.73 2.01-3.39a4.42 4.42 0 0 1-.45-1.92c0-2.37 1.89-4.26 4.23-4.26 1.23 0 2.34.525 3.12 1.365z" />
        </svg>
    ),
};

// Company data
const COMPANIES = [
    { id: 'google', name: 'Google', color: '#4285F4', problems: 342 },
    { id: 'meta', name: 'Meta', color: '#0866FF', problems: 289 },
    { id: 'amazon', name: 'Amazon', color: '#FF9900', problems: 456 },
    { id: 'microsoft', name: 'Microsoft', color: '#00A4EF', problems: 312 },
    { id: 'apple', name: 'Apple', color: '#A3AAAE', problems: 198 },
    { id: 'netflix', name: 'Netflix', color: '#E50914', problems: 87 },
    { id: 'uber', name: 'Uber', color: '#fff', problems: 156 },
    { id: 'airbnb', name: 'Airbnb', color: '#FF5A5F', problems: 124 },
    { id: 'linkedin', name: 'LinkedIn', color: '#0A66C2', problems: 178 },
    { id: 'twitter', name: 'Twitter/X', color: '#fff', problems: 98 },
    { id: 'stripe', name: 'Stripe', color: '#635BFF', problems: 76 },
    { id: 'salesforce', name: 'Salesforce', color: '#00A1E0', problems: 89 },
];

// DSA Patterns
const PATTERNS = [
    { id: 'arrays', name: 'Arrays & Hashing', icon: <CiViewTable />, color: '#2ecc71', problems: 156 },
    { id: 'two-pointers', name: 'Two Pointers', icon: <HiArrowsRightLeft />, color: '#3498db', problems: 89 },
    { id: 'sliding-window', name: 'Sliding Window', icon: <GrMicrofocus />, color: '#9b59b6', problems: 67 },
    { id: 'stack', name: 'Stack', icon: <HiOutlineSquare3Stack3D />, color: '#e74c3c', problems: 78 },
    { id: 'binary-search', name: 'Binary Search', icon: <MdManageSearch />, color: '#f39c12', problems: 92 },
    { id: 'linked-list', name: 'Linked List', icon: <TfiLink />, color: '#1abc9c', problems: 84 },
    { id: 'trees', name: 'Trees', icon: <TbBinaryTree />, color: '#27ae60', problems: 145 },
    { id: 'tries', name: 'Tries', icon: <GoGitBranch />, color: '#8e44ad', problems: 34 },
    { id: 'heap', name: 'Heap / Priority Queue', icon: <Rows4 />, color: '#e67e22', problems: 56 },
    { id: 'backtracking', name: 'Backtracking', icon: <TbArrowBackUp />, color: '#c0392b', problems: 67 },
    { id: 'graphs', name: 'Graphs', icon: <PiGraph />, color: '#2980b9', problems: 123 },
    { id: 'dp', name: 'Dynamic Programming', icon: <Grid3x3 />, color: '#d35400', problems: 198 },
    { id: 'greedy', name: 'Greedy', icon: <BiDollar />, color: '#16a085', problems: 87 },
    { id: 'intervals', name: 'Intervals', icon: <Ruler />, color: '#7f8c8d', problems: 45 },
    { id: 'math', name: 'Math & Geometry', icon: <BiMath />, color: '#34495e', problems: 76 },
    { id: 'bit', name: 'Bit Manipulation', icon: <TbGeometry />, color: '#95a5a6', problems: 42 },
];

type TabType = 'company' | 'pattern';

interface ActiveSession {
    sessionId: string;  // Backend returns 'sessionId', not '_id'
    type: string;
    config: {
        company?: string;
        pattern?: string;
        problemCount: number;
    };
    status: string;
    timeLimit: number;
    startedAt?: string;
    expiresAt?: string;
    problems: Array<{ solved: boolean }>;
}

const MockTest = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<TabType>('company');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeSession, setActiveSession] = useState<ActiveSession | null>(null);
    const [abandoning, setAbandoning] = useState(false);

    // Check for active session on mount
    useEffect(() => {
        const checkActiveSession = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            try {
                const response = await axios.get('/api/mocks/active', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (response.data.success && response.data.data) {
                    setActiveSession(response.data.data);
                }
            } catch {
                // No active session or error - that's fine
            }
        };

        checkActiveSession();
    }, []);

    // Calculate remaining time for active session
    const getRemainingTime = () => {
        if (!activeSession?.expiresAt) return null;
        const remaining = Math.floor((new Date(activeSession.expiresAt).getTime() - Date.now()) / 1000);
        if (remaining <= 0) return 'Expired';
        const mins = Math.floor(remaining / 60);
        const secs = remaining % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Abandon active session
    const abandonActiveSession = async () => {
        if (!activeSession) return;
        setAbandoning(true);

        try {
            const token = localStorage.getItem('token');
            await axios.post(`/api/mocks/${activeSession.sessionId}/abandon`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success('Session abandoned');
            setActiveSession(null);
        } catch {
            toast.error('Failed to abandon session');
        } finally {
            setAbandoning(false);
        }
    };

    const filteredCompanies = COMPANIES.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredPatterns = PATTERNS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="mocktest-page">
            <div className="mocktest-grid-bg" />

            <main className="mocktest-main">
                <div className="container">
                    {/* Active Session Banner */}
                    {activeSession && (
                        <div className="active-session-banner">
                            <div className="banner-icon">⚡</div>
                            <div className="banner-content">
                                <h3>Active Session in Progress</h3>
                                <p>
                                    {activeSession.config.company || activeSession.config.pattern || 'Mock'} Test
                                    {activeSession.status === 'in_progress' && (
                                        <span className="time-remaining"> • {getRemainingTime()} remaining</span>
                                    )}
                                    {activeSession.status === 'pending' && (
                                        <span className="status-badge pending"> • Not started yet</span>
                                    )}
                                </p>
                                <div className="banner-stats">
                                    <span>Problems: {activeSession.problems.filter(p => p.solved).length}/{activeSession.problems.length}</span>
                                    <span>Time Limit: {activeSession.timeLimit} min</span>
                                </div>
                            </div>
                            <div className="banner-actions">
                                <button
                                    className="btn-resume"
                                    onClick={() => navigate(`/mock-test/session/${activeSession.sessionId}`)}
                                >
                                    {activeSession.status === 'pending' ? 'Start Session' : 'Resume'}
                                </button>
                                <button
                                    className="btn-abandon"
                                    onClick={abandonActiveSession}
                                    disabled={abandoning}
                                >
                                    {abandoning ? 'Abandoning...' : 'Abandon'}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Header */}
                    <header className="mocktest-header">
                        <div className="header-content">
                            <h1 className="mocktest-title">Mock Interviews</h1>
                            <p className="mocktest-subtitle">
                                Practice with real interview questions from top companies or master specific DSA patterns
                            </p>
                        </div>
                        <Link to="/mock-test/history" className="btn-view-history">
                            📊 View History
                        </Link>
                    </header>

                    {/* Tab Switcher */}
                    <div className="tab-container">
                        <div className="tab-switcher">
                            <button
                                className={`tab-btn ${activeTab === 'company' ? 'active' : ''}`}
                                onClick={() => setActiveTab('company')}
                            >
                                <span className="tab-icon"><PiBuildings /></span>
                                Company-wise
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'pattern' ? 'active' : ''}`}
                                onClick={() => setActiveTab('pattern')}
                            >
                                <span className="tab-icon"><IoExtensionPuzzleOutline /></span>
                                Pattern-wise
                            </button>
                            <div
                                className="tab-indicator"
                                style={{ transform: `translateX(${activeTab === 'company' ? '0' : '100%'})` }}
                            />
                        </div>
                    </div>

                    {/* Search */}
                    <div className="search-container">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            className="search-input"
                            placeholder={`Search ${activeTab === 'company' ? 'companies' : 'patterns'}...`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button className="search-clear" onClick={() => setSearchQuery('')}>
                                ✕
                            </button>
                        )}
                    </div>

                    {/* Company Grid */}
                    {activeTab === 'company' && (
                        <section className="cards-section">
                            <div className="section-header">
                                <h2 className="section-title">Top Companies</h2>
                                <span className="section-count">{filteredCompanies.length} companies</span>
                            </div>
                            <div className="cards-grid">
                                {filteredCompanies.map((company) => (
                                    <Link
                                        key={company.id}
                                        to={`/mock-test/session/new?type=company&company=${company.name}`}
                                        className="mock-card company-card"
                                        style={{ '--accent': company.color } as React.CSSProperties}
                                    >
                                        <div className="card-header">
                                            <div className="company-logo-wrapper">
                                                {CompanyLogos[company.id]}
                                            </div>
                                            <span className="card-badge">{company.problems} Q</span>
                                        </div>
                                        <h3 className="card-name">{company.name}</h3>
                                        <p className="card-description">
                                            Practice questions asked in {company.name} interviews
                                        </p>
                                        <div className="card-footer">
                                            <span className="start-btn">Start Practice →</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Pattern Grid */}
                    {activeTab === 'pattern' && (
                        <section className="cards-section">
                            <div className="section-header">
                                <h2 className="section-title">DSA Patterns</h2>
                                <span className="section-count">{filteredPatterns.length} patterns</span>
                            </div>
                            <div className="cards-grid patterns">
                                {filteredPatterns.map((pattern) => (
                                    <Link
                                        key={pattern.id}
                                        to={`/mock-test/session/new?type=pattern&pattern=${pattern.id}`}
                                        className="mock-card pattern"
                                        style={{ '--accent': pattern.color } as React.CSSProperties}
                                    >
                                        <div className="card-header">
                                            <span className="card-icon">{pattern.icon}</span>
                                            <span className="card-badge">{pattern.problems} Q</span>
                                        </div>
                                        <h3 className="card-name">{pattern.name}</h3>
                                        <div className="difficulty-bar">
                                            <span className="diff-segment easy" style={{ width: '40%' }} />
                                            <span className="diff-segment medium" style={{ width: '35%' }} />
                                            <span className="diff-segment hard" style={{ width: '25%' }} />
                                        </div>
                                        <div className="card-footer">
                                            <span className="start-btn">Master Pattern →</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Empty State */}
                    {((activeTab === 'company' && filteredCompanies.length === 0) ||
                        (activeTab === 'pattern' && filteredPatterns.length === 0)) && (
                            <div className="empty-state">
                                <span className="empty-icon">🔍</span>
                                <p>No {activeTab === 'company' ? 'companies' : 'patterns'} found for "{searchQuery}"</p>
                                <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                                    Clear Search
                                </button>
                            </div>
                        )}
                </div>
            </main>
        </div>
    );
};

export default MockTest;
