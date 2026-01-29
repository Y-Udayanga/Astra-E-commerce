import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, User, Sun, Moon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { cartCount, openCart } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'var(--color-background)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)',
      padding: 'var(--spacing-md) var(--spacing-xl)',
      transition: 'background-color 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: 'var(--font-family-display)',
          fontSize: '1.8rem',
          fontWeight: 800,
          color: 'var(--color-text-main)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-xs)',
          letterSpacing: '-1px',
          textDecoration: 'none'
        }}>
          ASTRA
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'none', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/sell" className="nav-link">Sell</Link>
          <Link to="/product/1" className="nav-link">Product</Link>
        </div>

        {/* Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            style={{ color: 'var(--color-text-main)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <motion.button whileHover={{ scale: 1.1 }} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <Search size={22} color="var(--color-text-main)" />
          </motion.button>

          <Link to="/login">
            <motion.button whileHover={{ scale: 1.1 }} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <User size={22} color="var(--color-text-main)" />
            </motion.button>
          </Link>

          <motion.div
            onClick={openCart}
            style={{ position: 'relative', cursor: 'pointer' }}
            whileHover={{ scale: 1.1 }}
          >
            <ShoppingCart size={22} color="var(--color-text-main)" />
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: 'var(--color-accent)',
              color: 'white',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              height: '18px',
              width: '18px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>{cartCount}</span>
          </motion.div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            style={{ display: 'none', color: 'var(--color-text-main)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'var(--color-background)',
              zIndex: 100,
              padding: 'var(--spacing-xl)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 'var(--spacing-2xl)' }}>
              <button onClick={() => setIsMobileMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-main)' }}>
                <X size={32} />
              </button>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)', fontSize: '1.5rem', fontWeight: 600 }}>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>Home</Link>
              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>Shop</Link>
              <Link to="/sell" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>Sell</Link>
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>Login</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link {
          font-weight: 500;
          color: var(--color-text-muted);
          text-decoration: none;
          transition: var(--transition-normal);
        }
        .nav-link:hover {
          color: var(--color-accent);
        }
        @media (min-width: 769px) {
            .desktop-nav { display: flex !important; }
            .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
