import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const products = [
    { id: 1, name: "Premium Leather Jacket", price: 299, image: "https://images.unsplash.com/photo-1551028919-6a014909a909?auto=format&fit=crop&q=80&w=500" },
    { id: 2, name: "Minimalist Watch", price: 150, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=500" },
    { id: 3, name: "Designer Sunglasses", price: 120, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=500" },
    { id: 4, name: "Classic Denim Jeans", price: 89, image: "https://images.unsplash.com/photo-1542272617-08f083157f5d?auto=format&fit=crop&q=80&w=500" },
    { id: 5, name: "Urban Sneakers", price: 110, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=500" },
    { id: 6, name: "Cotton Blend Hoodie", price: 65, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=500" },
];

const Shop = () => {
    const { addToCart } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ padding: 'var(--spacing-3xl) var(--spacing-xl)' }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{
                    textAlign: 'center',
                    marginBottom: 'var(--spacing-xs)',
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-family-display)',
                    fontWeight: 800
                }}>
                    The Collection
                </h1>
                <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-3xl)', fontSize: '1.2rem' }}>
                    Curated essentials for the modern pioneer.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: 'var(--spacing-xl)',
                }}>
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            whileHover={{ y: -8 }}
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-md)',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}
                        >
                            <Link to={`/product/${product.id}`} style={{ overflow: 'hidden', position: 'relative' }}>
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        objectFit: 'cover'
                                    }}
                                />
                                {product.id < 3 && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '12px',
                                        right: '12px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: '4px 12px',
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        borderRadius: 'var(--radius-full)'
                                    }}>
                                        BESTSELLER
                                    </div>
                                )}
                            </Link>
                            <div style={{ padding: 'var(--spacing-lg)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-main)', fontWeight: 600 }}>{product.name}</h3>
                                </Link>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>
                                    ${product.price}
                                </p>
                                <button
                                    onClick={() => addToCart(product)}
                                    style={{
                                        marginTop: 'auto',
                                        width: '100%',
                                        padding: '12px',
                                        backgroundColor: 'var(--color-text-main)',
                                        color: 'var(--color-background)',
                                        borderRadius: 'var(--radius-md)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 'var(--spacing-sm)',
                                        transition: 'opacity 0.2s',
                                        cursor: 'pointer',
                                        border: 'none',
                                        fontWeight: 600
                                    }}>
                                    <ShoppingBag size={18} />
                                    Add to Cart
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Shop;
