import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

interface UserData {
    name: string;
    username: string;
    email: string;
    level: string;
    languages: string[];
    stats: {
        totalSolved: number;
        easySolved: number;
        mediumSolved: number;
        hardSolved: number;
        currentStreak: number;
        maxStreak: number;
    };
    college?: string;
    createdAt: string;
}

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login');
                    return;
                }

                const response = await axios.get('/api/auth/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (response.data.success) {
                    const userData = response.data.data.user;
                    setUser(userData);
                    // Store user name for Navbar avatar
                    if (userData.name) {
                        localStorage.setItem('userName', userData.name);
                    }
                }
            } catch (err) {
                console.error('Failed to fetch profile:', err);
                localStorage.removeItem('token');
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    const quickActions = [
        { icon: '🎯', label: 'Practice Problems', href: '/problems', color: '#2ecc71' },
        { icon: '📝', label: 'Mock Interview', href: '/mock-test', color: '#3498db' },
        { icon: '🗺️', label: 'Roadmaps', href: '/roadmaps', color: '#9b59b6' },
        { icon: '🏢', label: 'Companies', href: '/companies', color: '#e67e22' },
    ];

    if (loading) {
        return (
            <div className="dashboard-page">
                <div className="dashboard-loading">
                    <div className="loading-spinner" />
                    <span>Loading your dashboard...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="dashboard-page">
            <div className="dashboard-grid-bg" />

            <main className="dashboard-main">
                <div className="container">
                    {/* Welcome Section */}
                    <section className="welcome-section">
                        <div className="welcome-content">
                            <span className="welcome-badge">

                            </span>
                            <h1 className="welcome-title">
                                {getGreeting()}, <span className="text-highlight">{user?.name?.split(' ')[0] || 'Developer'}</span>
                            </h1>
                            <p className="welcome-subtitle">
                                Ready to crack some code today? Here's your progress overview.
                            </p>
                        </div>
                        <div className="welcome-meta">
                            <span className="meta-item">
                                <span className="meta-icon">@</span>
                                {user?.username}
                            </span>
                            <span className="meta-item">
                                <span className="meta-icon">📍</span>
                                {user?.level ? user.level.charAt(0).toUpperCase() + user.level.slice(1) : 'Beginner'}
                            </span>
                        </div>
                    </section>

                    {/* Stats Grid */}
                    <section className="stats-section">
                        <div className="stats-grid">
                            <div className="stat-card primary">
                                <div className="stat-icon">🔥</div>
                                <div className="stat-content">
                                    <span className="stat-value">{user?.stats?.currentStreak || 0}</span>
                                    <span className="stat-label">Day Streak</span>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon">✅</div>
                                <div className="stat-content">
                                    <span className="stat-value">{user?.stats?.totalSolved || 0}</span>
                                    <span className="stat-label">Problems Solved</span>
                                </div>
                            </div>

                            <div className="stat-card easy">
                                <div className="stat-content">
                                    <span className="stat-value">{user?.stats?.easySolved || 0}</span>
                                    <span className="stat-label">Easy</span>
                                </div>
                            </div>

                            <div className="stat-card medium">
                                <div className="stat-content">
                                    <span className="stat-value">{user?.stats?.mediumSolved || 0}</span>
                                    <span className="stat-label">Medium</span>
                                </div>
                            </div>

                            <div className="stat-card hard">
                                <div className="stat-content">
                                    <span className="stat-value">{user?.stats?.hardSolved || 0}</span>
                                    <span className="stat-label">Hard</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Quick Actions */}
                    <section className="actions-section">
                        <h2 className="section-title">Quick Actions</h2>
                        <div className="actions-grid">
                            {quickActions.map((action) => (
                                <Link
                                    key={action.label}
                                    to={action.href}
                                    className="action-card"
                                    style={{ '--accent': action.color } as React.CSSProperties}
                                >
                                    <span className="action-icon">{action.icon}</span>
                                    <span className="action-label">{action.label}</span>
                                    <span className="action-arrow">→</span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Languages & Quick Links */}
                    <section className="profile-section">
                        <div className="profile-card">
                            <h3 className="card-title">Your Languages</h3>
                            <div className="languages-list">
                                {user?.languages?.length ? (
                                    user.languages.map((lang) => (
                                        <span key={lang} className="language-tag">{lang}</span>
                                    ))
                                ) : (
                                    <span className="empty-state">No languages selected yet</span>
                                )}
                            </div>
                        </div>

                        <div className="profile-card">
                            <h3 className="card-title">Quick Links</h3>
                            <div className="quick-links">
                                <Link to="/settings" className="quick-link">
                                    <span>⚙️</span> Edit Profile & Settings
                                </Link>
                                <Link to="/settings" className="quick-link">
                                    <span>🔗</span> Manage Social Links
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
