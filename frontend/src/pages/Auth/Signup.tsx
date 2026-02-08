import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import type { RegisterInput } from '@interviewprep/common';
import AuthLayout from './AuthLayout';
import './Auth.css';

const LANGUAGES = ['JavaScript', 'Python', 'Java', 'C++', 'C', 'C#', 'Go', 'Ruby', 'Swift'] as const;
const LEVELS = ['beginner', 'intermediate', 'advanced'] as const;

const Signup = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // Step 1: Basic info, Step 2: Profile details
    const [formData, setFormData] = useState<RegisterInput>({
        name: '',
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        age: undefined,
        college: '',
        level: 'beginner',
        languages: [],
        github: '',
        linkedin: '',
        portfolio: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'number' ? (value ? parseInt(value) : undefined) : value
        });
        setError('');
    };

    const handleLanguageToggle = (lang: string) => {
        const current = formData.languages || [];
        if (current.includes(lang as typeof LANGUAGES[number])) {
            setFormData({
                ...formData,
                languages: current.filter(l => l !== lang) as typeof LANGUAGES[number][]
            });
        } else {
            setFormData({
                ...formData,
                languages: [...current, lang] as typeof LANGUAGES[number][]
            });
        }
    };

    const validateStep1 = () => {
        if (!formData.name || formData.name.length < 2) {
            setError('Name must be at least 2 characters');
            return false;
        }
        if (!formData.username || formData.username.length < 3) {
            setError('Username must be at least 3 characters');
            return false;
        }
        if (!formData.email) {
            setError('Email is required');
            return false;
        }
        if (!formData.password || formData.password.length < 8) {
            setError('Password must be at least 8 characters');
            return false;
        }
        if (formData.password !== formData.passwordConfirm) {
            setError("Passwords don't match");
            return false;
        }
        return true;
    };

    const handleNext = () => {
        if (validateStep1()) {
            setStep(2);
            setError('');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Clean up empty optional fields
        const payload = {
            ...formData,
            age: formData.age || undefined,
            college: formData.college || undefined,
            github: formData.github || undefined,
            linkedin: formData.linkedin || undefined,
            portfolio: formData.portfolio || undefined,
            languages: formData.languages?.length ? formData.languages : undefined
        };

        try {
            const response = await axios.post('/api/auth/register', payload);

            if (response.data.success) {
                toast.success('Account created! Please verify your email.');
                // Navigate to OTP verification with email
                navigate('/verify-otp', { state: { email: formData.email } });
            }
        } catch (err: unknown) {
            console.error('Signup error:', err);
            const axiosError = err as { response?: { data?: { message?: string } } };
            const msg = axiosError.response?.data?.message || 'Something went wrong';
            setError(msg);
            toast.error(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title={step === 1 ? "Create account" : "Complete your profile"}
            subtitle={step === 1 ? "Join thousands of developers mastering DSA" : "Tell us more about yourself (optional)"}
        >
            <form className="auth-form" onSubmit={handleSubmit}>
                {step === 1 && (
                    <>
                        <div className="form-group">
                            <label className="form-label">Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                className="form-input"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Username *</label>
                            <input
                                type="text"
                                name="username"
                                className="form-input"
                                placeholder="johndoe"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email *</label>
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Password *</label>
                            <input
                                type="password"
                                name="password"
                                className="form-input"
                                placeholder="Min 8 chars, 1 uppercase, 1 number, 1 special"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Confirm Password *</label>
                            <input
                                type="password"
                                name="passwordConfirm"
                                className="form-input"
                                placeholder="Confirm password"
                                value={formData.passwordConfirm}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <button type="button" className="auth-btn" onClick={handleNext}>
                            Continue <span>→</span>
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    className="form-input"
                                    placeholder="21"
                                    min="13"
                                    max="100"
                                    value={formData.age || ''}
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
                            <label className="form-label">College / University</label>
                            <input
                                type="text"
                                name="college"
                                className="form-input"
                                placeholder="MIT, Stanford, etc."
                                value={formData.college || ''}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Programming Languages</label>
                            <div className="language-grid">
                                {LANGUAGES.map(lang => (
                                    <button
                                        key={lang}
                                        type="button"
                                        className={`language-chip ${formData.languages?.includes(lang) ? 'selected' : ''}`}
                                        onClick={() => handleLanguageToggle(lang)}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">GitHub URL</label>
                            <input
                                type="url"
                                name="github"
                                className="form-input"
                                placeholder="https://github.com/username"
                                value={formData.github || ''}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">LinkedIn URL</label>
                            <input
                                type="url"
                                name="linkedin"
                                className="form-input"
                                placeholder="https://linkedin.com/in/username"
                                value={formData.linkedin || ''}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Portfolio URL</label>
                            <input
                                type="url"
                                name="portfolio"
                                className="form-input"
                                placeholder="https://yourportfolio.com"
                                value={formData.portfolio || ''}
                                onChange={handleChange}
                            />
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <div className="button-row">
                            <button type="button" className="auth-btn secondary" onClick={() => setStep(1)}>
                                ← Back
                            </button>
                            <button type="submit" className="auth-btn" disabled={loading}>
                                {loading ? 'Creating...' : 'Create Account'}
                            </button>
                        </div>
                    </>
                )}

                <div className="auth-footer">
                    Already have an account?
                    <Link to="/login" className="auth-link">Sign in</Link>
                </div>
            </form>
        </AuthLayout>
    );
};

export default Signup;
