import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = ({ darkMode, setDarkMode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
                position: 'fixed', top: 0, left: 0, right: 0,
                zIndex: 1000,
                padding: '0 2rem',
                background: scrolled ? 'rgba(13,13,26,0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : 'none',
                transition: 'all 0.4s ease',
            }}
        >
            <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
                {/* Logo */}
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    style={{
                        fontFamily: 'Orbitron, sans-serif', fontWeight: 700, fontSize: '1.3rem',
                        background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        textDecoration: 'none',
                    }}
                >
                    KP<span style={{ color: 'var(--neon-cyan)', WebkitTextFillColor: 'var(--neon-cyan)' }}>.</span>
                </motion.a>

                {/* Desktop links */}
                <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hidden-mobile">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            whileHover={{ color: 'var(--neon-blue)' }}
                            onClick={() => setActive(link.label)}
                            style={{
                                color: active === link.label ? 'var(--neon-blue)' : 'rgba(255,255,255,0.7)',
                                textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                                letterSpacing: '0.05em', position: 'relative',
                                textShadow: active === link.label ? '0 0 10px var(--neon-blue)' : 'none',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {link.label}
                            {active === link.label && (
                                <motion.span
                                    layoutId="activeLink"
                                    style={{
                                        position: 'absolute', bottom: -4, left: 0, right: 0, height: 2,
                                        background: 'var(--neon-blue)',
                                        boxShadow: '0 0 8px var(--neon-blue)',
                                        borderRadius: 99,
                                    }}
                                />
                            )}
                        </motion.a>
                    ))}
                </div>

                {/* Right side */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>


                    {/* Resume button */}
                    <motion.a
                        href={import.meta.env.BASE_URL + "images/Kritika%20CV%20updated.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary btn-glow"
                        style={{ fontSize: '0.85rem', padding: '8px 20px', cursor: 'none', textDecoration: 'none' }}
                    >
                        Resume
                    </motion.a>

                    {/* Mobile menu toggle */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{
                            background: 'none', border: 'none', color: 'var(--neon-blue)',
                            fontSize: '1.4rem', cursor: 'none', display: 'none',
                        }}
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        background: 'rgba(13,13,26,0.95)', backdropFilter: 'blur(20px)',
                        padding: '1.5rem 2rem',
                        display: 'flex', flexDirection: 'column', gap: '1.2rem',
                        borderTop: '1px solid rgba(0,212,255,0.1)',
                    }}
                >
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>
                            {link.label}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
