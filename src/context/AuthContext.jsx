
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    // Initial state: checking if user is logged in
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for persisted user
        const storedUser = localStorage.getItem('astra_user');
        if (storedUser) {
            try {
                setCurrentUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse stored user", e);
                localStorage.removeItem('astra_user');
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Mock authentication
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'admin@astra.com') {
                    const user = {
                        email,
                        role: 'admin',
                        name: 'Admin User',
                        avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff'
                    };
                    setCurrentUser(user);
                    localStorage.setItem('astra_user', JSON.stringify(user));
                    resolve(user);
                } else {
                    const user = {
                        email,
                        role: 'user',
                        name: 'Demo User',
                        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=random`
                    };
                    setCurrentUser(user);
                    localStorage.setItem('astra_user', JSON.stringify(user));
                    resolve(user);
                }
            }, 800); // Simulate network delay
        });
    };

    const register = async (name, email, password) => {
        // Mock registration
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = {
                    email,
                    name,
                    role: 'user',
                    avatar: `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=random`
                };
                setCurrentUser(user);
                localStorage.setItem('astra_user', JSON.stringify(user));
                resolve(user);
            }, 800);
        });
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('astra_user');
    };

    const value = {
        currentUser,
        login,
        register,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
