import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import AuthLayout from './AuthLayout';
import './Auth.css';

const VerifyOTP = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const email = (location.state as { email?: string })?.email || '';

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);
    const [error, setError] = useState('');
    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
        if (!email) {
            toast.error('No email found. Please sign up again.');
            navigate('/signup');
        }
    }, [email, navigate]);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) return;
        if (value && !/^\d$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setError('');

        // Auto-focus next input
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        if (!/^\d+$/.test(pastedData)) return;

        const newOtp = [...otp];
        pastedData.split('').forEach((char, i) => {
            if (i < 6) newOtp[i] = char;
        });
        setOtp(newOtp);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const otpString = otp.join('');

        if (otpString.length !== 6) {
            setError('Please enter the complete 6-digit OTP');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.post('/api/auth/verify-otp', {
                email,
                otp: otpString
            });

            if (response.data.success) {
                toast.success('Email verified! Welcome to Graphora!');
                // Store token if returned
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                }
                // Store user name for Navbar
                if (response.data.data?.user?.name) {
                    localStorage.setItem('userName', response.data.data.user.name);
                }
                // Dispatch event to update Navbar
                window.dispatchEvent(new Event('authChange'));
                navigate('/dashboard'); // Navigate to dashboard
            }
        } catch (err: unknown) {
            console.error('OTP verification error:', err);
            const axiosError = err as { response?: { data?: { message?: string } } };
            const msg = axiosError.response?.data?.message || 'Invalid OTP. Please try again.';
            setError(msg);
            toast.error(msg);
        } finally {
            setLoading(false);
        }
    };

    const handleResendOTP = async () => {
        if (countdown > 0) return;

        setResending(true);
        try {
            await axios.post('/api/auth/resend-otp', { email });
            toast.success('OTP resent to your email!');
            setCountdown(60); // 60 second cooldown
            setOtp(['', '', '', '', '', '']);
        } catch (err: unknown) {
            console.error('Resend OTP error:', err);
            const axiosError = err as { response?: { data?: { message?: string } } };
            toast.error(axiosError.response?.data?.message || 'Failed to resend OTP');
        } finally {
            setResending(false);
        }
    };

    return (
        <AuthLayout
            title="Verify your email"
            subtitle={`Enter the 6-digit code sent to ${email}`}
        >
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="otp-container">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className="otp-input"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={index === 0 ? handlePaste : undefined}
                            autoFocus={index === 0}
                        />
                    ))}
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type="submit" className="auth-btn" disabled={loading}>
                    {loading ? 'Verifying...' : 'Verify Email'}
                </button>

                <div className="resend-section">
                    <span className="resend-text">Didn't receive the code?</span>
                    <button
                        type="button"
                        className="resend-btn"
                        onClick={handleResendOTP}
                        disabled={resending || countdown > 0}
                    >
                        {countdown > 0 ? `Resend in ${countdown}s` : resending ? 'Sending...' : 'Resend OTP'}
                    </button>
                </div>

                <div className="auth-footer">
                    <Link to="/signup" className="auth-link">← Back to Signup</Link>
                </div>
            </form>
        </AuthLayout>
    );
};

export default VerifyOTP;
