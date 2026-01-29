import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Sell from './pages/Sell';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--color-background)' }}>
          <Header />
          <main style={{ flex: 1, position: 'relative' }}>
            <AnimatedRoutes />
          </main>
          <Footer />
          <CartDrawer />
          <ChatWidget />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
