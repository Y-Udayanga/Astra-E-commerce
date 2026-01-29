import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, User } from 'lucide-react';

const Register = () => {
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
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 20 }}
                style={{
                    width: '100%',
                    maxWidth: '450px',
                    backgroundColor: 'var(--color-surface)',
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
                    <h1 style={{ fontFamily: 'var(--font-family-display)', fontSize: '2rem', marginBottom: 'var(--spacing-xs)' }}>Create Account</h1>
                    <p style={{ color: 'var(--color-text-muted)' }}>Join ASTRA for exclusive access</p>
                </div>

                <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                    <div style={{ position: 'relative' }}>
                        <User size={20} color="var(--color-text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            type="text"
                            placeholder="Full Name"
                            style={{
                                width: '100%',
                                padding: '12px 12px 12px 45px',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)',
                                backgroundColor: 'var(--color-background)',
                                color: 'var(--color-text-main)',
                                outline: 'none',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>
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
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>

                    <button style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: 'var(--color-text-main)',
                        color: 'var(--color-background)',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        border: 'none',
                        fontSize: '1rem',
                        marginTop: 'var(--spacing-sm)'
                    }}>
                        Create Account
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)', color: 'var(--color-text-muted)' }}>
                    Already have an account? <Link to="/login" style={{ color: 'var(--color-accent)', fontWeight: 600, textDecoration: 'none' }}>Sign in</Link>
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Register;
