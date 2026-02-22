
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import CartDrawer from '../components/CartDrawer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--color-background)' }}>
            <Header />
            <main style={{ flex: 1, position: 'relative' }}>
                <Outlet />
            </main>
            <Footer />
            <CartDrawer />
            <ChatWidget />
        </div>
    );
};

export default MainLayout;
