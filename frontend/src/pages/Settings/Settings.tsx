import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Navbar from '../../components/Navbar';
import './Settings.css';

interface UserData {
    name: string;
    username: string;
    email: string;
    level: string;
    languages: string[];
    college?: string;
    bio?: string;
    socialLinks?: {
        github?: string;
        linkedin?: string;
        portfolio?: string;
    };
    createdAt: string;
}

const LANGUAGES = ['JavaScript', 'Python', 'Java', 'C++', 'C', 'C#', 'Go', 'Ruby', 'Swift'] as const;
const LEVELS = ['beginner', 'intermediate', 'advanced'] as const;

const Settings = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');

    const [formData, setFormData] = useState({
        name: '',
        bio: '',
        college: '',
        level: 'beginner',
        languages: [] as string[],
        github: '',
        linkedin: '',
        portfolio: ''
    });

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
                    setFormData({
                        name: userData.name || '',
                        bio: userData.bio || '',
                        college: userData.college || '',
                        level: userData.level || 'beginner',
                        languages: userData.languages || [],
                        github: userData.socialLinks?.github || '',
                        linkedin: userData.socialLinks?.linkedin || '',
                        portfolio: userData.socialLinks?.portfolio || ''
                    });
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLanguageToggle = (lang: string) => {
        if (formData.languages.includes(lang)) {
            setFormData({
                ...formData,
                languages: formData.languages.filter(l => l !== lang)
            });
        } else {
            setFormData({
                ...formData,
                languages: [...formData.languages, lang]
            });
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const token = localStorage.getItem('token');
            const payload = {
                name: formData.name,
                bio: formData.bio || undefined,
                college: formData.college || undefined,
                level: formData.level,
                languages: formData.languages.length ? formData.languages : undefined,
                socialLinks: {
                    github: formData.github || undefined,
                    linkedin: formData.linkedin || undefined,
                    portfolio: formData.portfolio || undefined
                }
            };

            await axios.patch('/api/auth/profile', payload, {
                headers: { Authorization: `Bearer ${token}` }
            });

            toast.success('Settings saved successfully!');
            // Update localStorage with new name
            localStorage.setItem('userName', formData.name);
        } catch (err: unknown) {
            console.error('Failed to save:', err);
            const axiosError = err as { response?: { data?: { message?: string } } };
            toast.error(axiosError.response?.data?.message || 'Failed to save settings');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="settings-page">
                <Navbar />
                <div className="settings-loading">
                    <div className="loading-spinner" />
                    <span>Loading settings...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="settings-page">
            <Navbar />
            <div className="settings-grid-bg" />

            <main className="settings-main">
                <div className="container">
                    <header className="settings-header">
                        <h1 className="settings-title">Settings</h1>
                        <p className="settings-subtitle">Manage your account and preferences</p>
                    </header>

                    <div className="settings-layout">
                        {/* Sidebar */}
                        <aside className="settings-sidebar">
                            <nav className="settings-nav">
                                <button
                                    className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('profile')}
                                >
                                    <span className="nav-icon">👤</span>
                                    Profile
                                </button>
                                <button
                                    className={`nav-item ${activeTab === 'account' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('account')}
                                >
                                    <span className="nav-icon">🔐</span>
                                    Account
                                </button>
                                <button
                                    className={`nav-item ${activeTab === 'preferences' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('preferences')}
                                >
                                    <span className="nav-icon">⚙️</span>
                                    Preferences
                                </button>
                            </nav>
                        </aside>

                        {/* Main Content */}
                        <div className="settings-content">
                            {activeTab === 'profile' && (
                                <div className="settings-section">
                                    <h2 className="section-title">Profile Information</h2>

                                    <div className="form-group">
                                        <label className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-input"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Bio</label>
                                        <textarea
                                            name="bio"
                                            className="form-input form-textarea"
                                            placeholder="Tell us about yourself..."
                                            value={formData.bio}
                                            onChange={handleChange}
                                            rows={3}
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label">College</label>
                                            <input
                                                type="text"
                                                name="college"
                                                className="form-input"
                                                placeholder="MIT, Stanford, etc."
                                                value={formData.college}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Level</label>
                                            <select
                                                name="level"
                                                className="form-input"
                                                value={formData.level}
                                                onChange={handleChange}
                                            >
                                                {LEVELS.map(level => (
                                                    <option key={level} value={level}>
                                                        {level.charAt(0).toUpperCase() + level.slice(1)}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Programming Languages</label>
                                        <div className="language-grid">
                                            {LANGUAGES.map(lang => (
                                                <button
                                                    key={lang}
                                                    type="button"
                                                    className={`language-chip ${formData.languages.includes(lang) ? 'selected' : ''}`}
                                                    onClick={() => handleLanguageToggle(lang)}
                                                >
                                                    {lang}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <h2 className="section-title" style={{ marginTop: '2rem' }}>Social Links</h2>

                                    <div className="form-group">
                                        <label className="form-label">GitHub</label>
                                        <input
                                            type="url"
                                            name="github"
                                            className="form-input"
                                            placeholder="https://github.com/username"
                                            value={formData.github}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">LinkedIn</label>
                                        <input
                                            type="url"
                                            name="linkedin"
                                            className="form-input"
                                            placeholder="https://linkedin.com/in/username"
                                            value={formData.linkedin}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Portfolio</label>
                                        <input
                                            type="url"
                                            name="portfolio"
                                            className="form-input"
                                            placeholder="https://yourportfolio.com"
                                            value={formData.portfolio}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button
                                        className="save-btn"
                                        onClick={handleSave}
                                        disabled={saving}
                                    >
                                        {saving ? 'Saving...' : 'Save Changes'}
                                    </button>
                                </div>
                            )}

                            {activeTab === 'account' && (
                                <div className="settings-section">
                                    <h2 className="section-title">Account Information</h2>

                                    <div className="info-card">
                                        <div className="info-row">
                                            <span className="info-label">Username</span>
                                            <span className="info-value">@{user?.username}</span>
                                        </div>
                                        <div className="info-row">
                                            <span className="info-label">Email</span>
                                            <span className="info-value">{user?.email}</span>
                                        </div>
                                        <div className="info-row">
                                            <span className="info-label">Member Since</span>
                                            <span className="info-value">
                                                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                }) : 'N/A'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="danger-zone">
                                        <h3 className="danger-title">Danger Zone</h3>
                                        <p className="danger-text">
                                            Deleting your account is permanent and cannot be undone.
                                        </p>
                                        <button className="danger-btn" disabled>
                                            Delete Account
                                        </button>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'preferences' && (
                                <div className="settings-section">
                                    <h2 className="section-title">Preferences</h2>
                                    <p className="coming-soon">
                                        🚧 Coming Soon - Theme settings, notifications, and more!
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Settings;
