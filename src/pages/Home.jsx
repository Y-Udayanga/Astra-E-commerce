import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <motion.div
            className="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5 }}
        >
            {/* Live Wallpaper Hero Section */}
            <section style={{
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 var(--spacing-xl)',
                position: 'relative',
                overflow: 'hidden',
                color: 'white'
            }}>
                {/* Animated Background */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #6366f1)',
                    backgroundSize: '400% 400%',
                    animation: 'gradientBG 15s ease infinite',
                    zIndex: -1
                }} />

                {/* Overlay for readability */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 0
                }} />

                <div style={{ zIndex: 1, maxWidth: '800px' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            fontSize: 'clamp(3rem, 5vw, 6rem)',
                            marginBottom: 'var(--spacing-md)',
                            fontFamily: 'var(--font-family-display)',
                            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            fontWeight: 800
                        }}
                    >
                        Beyond Gravity.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                            color: 'rgba(255, 255, 255, 0.9)',
                            marginBottom: 'var(--spacing-2xl)',
                            fontWeight: 300
                        }}
                    >
                        Experience the future of fashion with ASTRA.
                    </motion.p>

                    <Link to="/shop">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'white', color: 'black' }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            style={{
                                padding: '16px 48px',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)',
                                color: 'white',
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                borderRadius: 'var(--radius-full)',
                                border: '2px solid white',
                                cursor: 'pointer',
                                letterSpacing: '1px'
                            }}
                        >
                            EXPLORE COLLECTION
                        </motion.button>
                    </Link>
                </div>
            </section>

            {/* Featured Products */}
            <section style={{ padding: 'var(--spacing-3xl) var(--spacing-xl)', backgroundColor: 'var(--color-background)' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 'var(--spacing-2xl)' }}>
                        <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-family-display)', color: 'var(--color-text-main)' }}>New Arrivals</h2>
                        <Link to="/shop" style={{ color: 'var(--color-accent)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            View All <span style={{ fontSize: '1.2em' }}>&rarr;</span>
                        </Link>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: 'var(--spacing-xl)',
                    }}>
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ y: -10 }}
                                style={{
                                    backgroundColor: 'var(--color-surface)',
                                    borderRadius: 'var(--radius-lg)',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-md)',
                                    cursor: 'pointer'
                                }}
                            >
                                <div style={{ height: '400px', position: 'relative', overflow: 'hidden' }}>
                                    <img
                                        src={`https://images.unsplash.com/photo-${item === 1 ? '1551028919-6a014909a909' : item === 2 ? '1524805444758-089113d48a6d' : '1542272617-08f083157f5d'}?auto=format&fit=crop&q=80&w=800`}
                                        alt="Product"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        background: 'white',
                                        color: 'black',
                                        padding: '4px 12px',
                                        borderRadius: 'var(--radius-full)',
                                        fontSize: '0.8rem',
                                        fontWeight: 700
                                    }}>NEW</div>
                                </div>
                                <div style={{ padding: 'var(--spacing-lg)' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-main)' }}>Premium Edition {item}</h3>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>$1{item}9.00</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes gradientBG {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </motion.div>
    );
};

export default Home;
