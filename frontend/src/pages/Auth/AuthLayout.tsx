import type { ReactNode } from 'react';
import './Auth.css';

interface AuthLayoutProps {
    children: ReactNode;
    title: string;
    subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
    return (
        <div className="auth-page">
            <div className="auth-grid-bg" />

            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-logo">
                        <span className="logo-symbol">/</span>
                        Graphora
                    </div>
                    <h1 className="auth-title">{title}</h1>
                    <p className="auth-subtitle">{subtitle}</p>
                </div>

                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
