import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import {
    FaArrowLeft,
    FaTrophy,
    FaChartLine,
    FaClock,
    FaCheckCircle,
    FaTimesCircle,
    FaFilter,
    FaChevronDown
} from 'react-icons/fa';
import { MdWork, MdSpeed, MdCategory } from 'react-icons/md';
import './MockHistory.css';

interface MockSession {
    sessionId: string;
    type: 'company' | 'difficulty' | 'pattern' | 'custom';
    config: {
        company?: string;
        difficulty?: string;
        pattern?: string;
        problemCount: number;
    };
    status: 'completed' | 'abandoned' | 'expired';
    score: {
        solved: number;
        total: number;
        totalTime?: number;
        percentile?: number;
    };
    problemCount: number;
    problems: Array<{
        title: string;
        difficulty: string;
        solved: boolean;
        timeSpent: number;
    }>;
    startedAt?: string;
    completedAt?: string;
    createdAt: string;
}

interface MockStats {
    overview: {
        totalCompleted: number;
        totalSolved: number;
        totalProblems: number;
        solveRate: number;
        avgPercentile: number;
        totalTimeSpent: number;
    };
    byType: Record<string, {
        count: number;
        solved: number;
        total: number;
        avgPercentile: number;
    }>;
    recentPerformance: Array<{
        type: string;
        config: { company?: string; difficulty?: string; pattern?: string };
        score: { solved: number; total: number; percentile?: number };
        completedAt: string;
    }>;
}

const MockHistory: React.FC = () => {
    const navigate = useNavigate();

    // Data state
    const [sessions, setSessions] = useState<MockSession[]>([]);
    const [stats, setStats] = useState<MockStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    // Filter state
    const [filterType, setFilterType] = useState<string>('all');
    const [filterStatus, setFilterStatus] = useState<string>('all');
    const [showFilters, setShowFilters] = useState(false);

    // Pagination
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [total, setTotal] = useState(0);

    const getAuthHeaders = useCallback(() => ({
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }), []);

    // Fetch mock history
    const fetchHistory = useCallback(async (pageNum: number, append: boolean = false) => {
        try {
            if (pageNum === 1) setLoading(true);
            else setLoadingMore(true);

            const params: Record<string, string> = { page: String(pageNum), limit: '10' };
            if (filterType !== 'all') params.type = filterType;
            if (filterStatus !== 'all') params.status = filterStatus;

            const response = await axios.get('/api/mocks/history', {
                ...getAuthHeaders(),
                params
            });

            if (response.data.success) {
                const { sessions: newSessions, pagination } = response.data.data;
                if (append) {
                    setSessions(prev => [...prev, ...newSessions]);
                } else {
                    setSessions(newSessions);
                }
                setTotal(pagination.total);
                setHasMore(pageNum < pagination.pages);
            }
        } catch (error) {
            console.error('Failed to fetch history:', error);
            toast.error('Failed to load mock history');
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    }, [getAuthHeaders, filterType, filterStatus]);

    // Fetch stats
    const fetchStats = useCallback(async () => {
        try {
            const response = await axios.get('/api/mocks/stats', getAuthHeaders());
            if (response.data.success) {
                setStats(response.data.data);
            }
        } catch (error) {
            console.error('Failed to fetch stats:', error);
        }
    }, [getAuthHeaders]);

    // Initial load
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error('Please login to view mock history');
            navigate('/login');
            return;
        }
        fetchStats();
        fetchHistory(1);
    }, [fetchHistory, fetchStats, navigate]);

    // Refetch when filters change
    useEffect(() => {
        setPage(1);
        fetchHistory(1);
    }, [filterType, filterStatus, fetchHistory]);

    // Load more
    const loadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchHistory(nextPage, true);
    };

    // Format time
    const formatTime = (seconds: number): string => {
        if (!seconds) return '0m';
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
    };

    // Format date
    const formatDate = (dateStr: string): string => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Get type icon
    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'company': return <MdWork />;
            case 'difficulty': return <MdSpeed />;
            case 'pattern': return <MdCategory />;
            default: return <FaTrophy />;
        }
    };

    // Get type label
    const getTypeLabel = (session: MockSession): string => {
        switch (session.type) {
            case 'company': return session.config.company || 'Company Mock';
            case 'difficulty': return `${session.config.difficulty?.charAt(0).toUpperCase()}${session.config.difficulty?.slice(1)} Problems`;
            case 'pattern': return session.config.pattern || 'Pattern Mock';
            default: return 'Custom Mock';
        }
    };

    // Get status color
    const getStatusColor = (status: string): string => {
        switch (status) {
            case 'completed': return 'status-completed';
            case 'abandoned': return 'status-abandoned';
            case 'expired': return 'status-expired';
            default: return '';
        }
    };

    // Get difficulty color
    const getDifficultyColor = (difficulty: string): string => {
        switch (difficulty?.toLowerCase()) {
            case 'easy': return 'diff-easy';
            case 'medium': return 'diff-medium';
            case 'hard': return 'diff-hard';
            default: return '';
        }
    };

    if (loading && sessions.length === 0) {
        return (
            <div className="mock-history-page">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading your mock history...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mock-history-page">
            {/* Header */}
            <header className="history-header">
                <Link to="/mock-test" className="back-link">
                    <FaArrowLeft /> Back to Mock Test
                </Link>
                <h1>Mock Test History</h1>
                <p>Track your progress and review past mock sessions</p>
            </header>

            {/* Stats Overview */}
            {stats && (
                <section className="stats-overview">
                    <div className="stats-grid">
                        <div className="stat-card primary">
                            <div className="stat-icon"><FaTrophy /></div>
                            <div className="stat-content">
                                <span className="stat-value">{stats.overview.totalCompleted}</span>
                                <span className="stat-label">Mocks Completed</span>
                            </div>
                        </div>
                        <div className="stat-card success">
                            <div className="stat-icon"><FaCheckCircle /></div>
                            <div className="stat-content">
                                <span className="stat-value">{stats.overview.totalSolved}/{stats.overview.totalProblems}</span>
                                <span className="stat-label">Problems Solved</span>
                            </div>
                        </div>
                        <div className="stat-card info">
                            <div className="stat-icon"><FaChartLine /></div>
                            <div className="stat-content">
                                <span className="stat-value">{stats.overview.solveRate}%</span>
                                <span className="stat-label">Solve Rate</span>
                            </div>
                        </div>
                        <div className="stat-card warning">
                            <div className="stat-icon"><FaClock /></div>
                            <div className="stat-content">
                                <span className="stat-value">{formatTime(stats.overview.totalTimeSpent)}</span>
                                <span className="stat-label">Total Time Spent</span>
                            </div>
                        </div>
                    </div>

                    {/* Stats by Type */}
                    {Object.keys(stats.byType).length > 0 && (
                        <div className="type-stats">
                            <h3>Performance by Type</h3>
                            <div className="type-stats-grid">
                                {Object.entries(stats.byType).map(([type, data]) => (
                                    <div key={type} className="type-stat-card">
                                        <div className="type-icon">{getTypeIcon(type)}</div>
                                        <div className="type-info">
                                            <span className="type-name">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                                            <span className="type-stats-text">
                                                {data.count} mocks • {data.solved}/{data.total} solved
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            )}

            {/* Filters */}
            <section className="filters-section">
                <button
                    className="filter-toggle"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <FaFilter /> Filters
                    <FaChevronDown className={showFilters ? 'rotated' : ''} />
                </button>

                {showFilters && (
                    <div className="filters-panel">
                        <div className="filter-group">
                            <label>Type</label>
                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                            >
                                <option value="all">All Types</option>
                                <option value="company">Company</option>
                                <option value="difficulty">Difficulty</option>
                                <option value="pattern">Pattern</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Status</label>
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                            >
                                <option value="all">All Statuses</option>
                                <option value="completed">Completed</option>
                                <option value="abandoned">Abandoned</option>
                                <option value="expired">Expired</option>
                            </select>
                        </div>
                        <span className="results-count">{total} sessions found</span>
                    </div>
                )}
            </section>

            {/* Sessions List */}
            <section className="sessions-list">
                {sessions.length === 0 ? (
                    <div className="empty-state">
                        <FaTrophy className="empty-icon" />
                        <h3>No mock sessions found</h3>
                        <p>Start a mock test to see your history here!</p>
                        <Link to="/mock-test" className="btn-start">Start Mock Test</Link>
                    </div>
                ) : (
                    <>
                        {sessions.map((session) => (
                            <div key={session.sessionId} className="session-card">
                                <div className="session-header">
                                    <div className="session-type">
                                        {getTypeIcon(session.type)}
                                        <span>{getTypeLabel(session)}</span>
                                    </div>
                                    <span className={`session-status ${getStatusColor(session.status)}`}>
                                        {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                                    </span>
                                </div>

                                <div className="session-score">
                                    <div className="score-main">
                                        <span className="score-number">{session.score.solved}</span>
                                        <span className="score-divider">/</span>
                                        <span className="score-total">{session.score.total}</span>
                                    </div>
                                    <span className="score-label">Problems Solved</span>
                                    {session.score.percentile && (
                                        <span className="percentile">Top {session.score.percentile}%</span>
                                    )}
                                </div>

                                <div className="session-problems">
                                    <h4>Problems</h4>
                                    <div className="problems-list">
                                        {session.problems.map((problem, idx) => (
                                            <div key={idx} className="problem-item">
                                                <span className={`problem-status ${problem.solved ? 'solved' : 'unsolved'}`}>
                                                    {problem.solved ? <FaCheckCircle /> : <FaTimesCircle />}
                                                </span>
                                                <span className="problem-title">{problem.title || `Problem ${idx + 1}`}</span>
                                                <span className={`problem-difficulty ${getDifficultyColor(problem.difficulty)}`}>
                                                    {problem.difficulty}
                                                </span>
                                                <span className="problem-time">{formatTime(problem.timeSpent)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="session-footer">
                                    <div className="session-meta">
                                        <span className="meta-item">
                                            <FaClock />
                                            {session.score.totalTime ? formatTime(session.score.totalTime) : 'N/A'}
                                        </span>
                                        <span className="meta-item">
                                            {formatDate(session.completedAt || session.createdAt)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Load More */}
                        {hasMore && (
                            <button
                                className="btn-load-more"
                                onClick={loadMore}
                                disabled={loadingMore}
                            >
                                {loadingMore ? 'Loading...' : 'Load More'}
                            </button>
                        )}
                    </>
                )}
            </section>
        </div>
    );
};

export default MockHistory;
