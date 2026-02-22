
import React from 'react';
import { Download, Eye } from 'lucide-react';

const Orders = () => {
    return (
        <div>
            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ fontFamily: 'var(--font-family-display)', fontSize: '2rem', marginBottom: '8px' }}>Orders</h1>
                <p style={{ color: 'var(--color-text-muted)' }}>Track and manage customer orders.</p>
            </div>

            <div style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: '12px',
                border: '1px solid var(--color-border)',
                overflow: 'hidden'
            }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead style={{ backgroundColor: 'var(--color-background)' }}>
                            <tr>
                                <th style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Order ID</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Date</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Customer</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Items</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Total</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Status</th>
                                <th style={{ padding: '16px 24px', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.9rem', textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1001, 1002, 1003, 1004, 1005].map((id) => (
                                <tr key={id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td style={{ padding: '16px 24px', fontWeight: 500 }}>#{id}</td>
                                    <td style={{ padding: '16px 24px', color: 'var(--color-text-muted)' }}>Oct 24, 2023</td>
                                    <td style={{ padding: '16px 24px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></div>
                                            <span>Alex Johnson</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '16px 24px' }}>3 items</td>
                                    <td style={{ padding: '16px 24px', fontWeight: 500 }}>$150.00</td>
                                    <td style={{ padding: '16px 24px' }}>
                                        <span style={{
                                            padding: '4px 12px',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            backgroundColor: id % 2 === 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                                            color: id % 2 === 0 ? '#10B981' : '#F59E0B',
                                            fontWeight: 500
                                        }}>
                                            {id % 2 === 0 ? 'Delivered' : 'Processing'}
                                        </span>
                                    </td>
                                    <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                                            <button style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}>
                                                <Eye size={18} />
                                            </button>
                                            <button style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}>
                                                <Download size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;
