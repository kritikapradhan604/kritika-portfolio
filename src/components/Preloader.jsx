import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) { clearInterval(interval); return 100; }
                return prev + Math.random() * 8 + 2;
            });
        }, 80);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            {/* Outer spinning ring */}
            <div style={{ position: 'relative', width: 120, height: 120 }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    border: '2px solid rgba(0,212,255,0.1)',
                    borderRadius: '50%',
                }} />
                <div style={{
                    position: 'absolute', inset: 0,
                    border: '2px solid transparent',
                    borderTopColor: 'var(--neon-blue)',
                    borderRightColor: 'var(--neon-purple)',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                }} />
                <div style={{
                    position: 'absolute', inset: 10,
                    border: '2px solid transparent',
                    borderBottomColor: 'var(--neon-cyan)',
                    borderRadius: '50%',
                    animation: 'spin 1.5s linear infinite reverse',
                }} />
                {/* Center logo */}
                <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>KP</div>
            </div>

            {/* Title */}
            <motion.p
                style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--neon-blue)', letterSpacing: '0.2em', fontSize: '0.85rem' }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                INITIALIZING PORTFOLIO
            </motion.p>

            {/* Progress bar */}
            <div style={{ width: 240, height: 2, background: 'rgba(255,255,255,0.08)', borderRadius: 99 }}>
                <motion.div
                    style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--neon-blue), var(--neon-purple))',
                        borderRadius: 99,
                        boxShadow: '0 0 10px var(--neon-blue)',
                        width: `${Math.min(progress, 100)}%`,
                    }}
                    transition={{ duration: 0.1 }}
                />
            </div>

            <p style={{ color: 'var(--neon-blue)', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>
                {Math.min(Math.round(progress), 100)}%
            </p>
        </motion.div>
    );
};

export default Preloader;
