import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Lock } from 'lucide-react';

const Login = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--spacing-xl)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background blobs */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '300px',
                height: '300px',
                backgroundColor: 'var(--color-accent)',
                filter: 'blur(100px)',
                opacity: 0.2,
                borderRadius: '50%'
            }} />

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 20 }}
                style={{
                    width: '100%',
                    maxWidth: '450px',
                    backgroundColor: 'var(--color-surface)', // Using surface color which adapts to dark mode
                    padding: 'var(--spacing-2xl)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-premium)',
                    position: 'relative',
                    border: '1px solid var(--color-border)'
                }}
            >
                <div style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-lg)', textDecoration: 'none' }}>
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                    <h1 style={{ fontFamily: 'var(--font-family-display)', fontSize: '2rem', marginBottom: 'var(--spacing-xs)' }}>Welcome Back</h1>
                    <p style={{ color: 'var(--color-text-muted)' }}>Sign in to continue to ASTRA</p>
                </div>

                <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                    <div style={{ position: 'relative' }}>
                        <Mail size={20} color="var(--color-text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            type="email"
                            placeholder="Email Address"
                            style={{
                                width: '100%',
                                padding: '12px 12px 12px 45px',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)',
                                backgroundColor: 'var(--color-background)',
                                color: 'var(--color-text-main)',
                                outline: 'none',
                                transition: 'border-color 0.2s',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Lock size={20} color="var(--color-text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            type="password"
                            placeholder="Password"
                            style={{
                                width: '100%',
                                padding: '12px 12px 12px 45px',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)',
                                backgroundColor: 'var(--color-background)',
                                color: 'var(--color-text-main)',
                                outline: 'none',
                                transition: 'border-color 0.2s',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <a href="#" style={{ fontSize: '0.9rem', color: 'var(--color-accent)', textDecoration: 'none' }}>Forgot Password?</a>
                    </div>

                    <button style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: 'var(--color-text-main)', // High contrast button
                        color: 'var(--color-background)',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        border: 'none',
                        fontSize: '1rem',
                        marginTop: 'var(--spacing-sm)'
                    }}>
                        Sign In
                    </button>
                </form>

                <div style={{ margin: 'var(--spacing-xl) 0', textAlign: 'center', position: 'relative' }}>
                    <div style={{ borderTop: '1px solid var(--color-border)', position: 'absolute', top: '50%', width: '100%', zIndex: 0 }} />
                    <span style={{ backgroundColor: 'var(--color-surface)', padding: '0 10px', color: 'var(--color-text-muted)', position: 'relative', zIndex: 1, fontSize: '0.9rem' }}>Or continue with</span>
                </div>

                <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                    <button style={{
                        flex: 1,
                        padding: '10px',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-background)',
                        color: 'var(--color-text-main)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        fontWeight: 500
                    }}>
                        {/* Placeholder Google Icon */}
                        <div style={{ width: '20px', height: '20px', backgroundColor: '#DB4437', borderRadius: '50%' }}></div>
                        Google
                    </button>
                    <button style={{
                        flex: 1,
                        padding: '10px',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-background)',
                        color: 'var(--color-text-main)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        fontWeight: 500
                    }}>
                        {/* Placeholder LinkedIn Icon */}
                        <div style={{ width: '20px', height: '20px', backgroundColor: '#0077B5', borderRadius: '4px' }}></div>
                        LinkedIn
                    </button>
                </div>

                <p style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)', color: 'var(--color-text-muted)' }}>
                    Don't have an account? <Link to="/register" style={{ color: 'var(--color-accent)', fontWeight: 600, textDecoration: 'none' }}>Sign up</Link>
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Login;
