import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
];

const Footer = () => {
    return (
        <footer style={{
            background: '#080810',
            borderTop: '1px solid rgba(0,212,255,0.08)',
            padding: '3rem 2rem 2rem',
            position: 'relative', overflow: 'hidden',
        }}>
            {/* Top neon gradient line */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, var(--neon-blue), var(--neon-purple), var(--neon-cyan), transparent)',
            }} />

            {/* Background glow */}
            <div style={{
                position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
                width: 600, height: 200,
                background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
                    {/* Logo & tagline */}
                    <div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            style={{
                                fontFamily: 'Orbitron, sans-serif', fontWeight: 900, fontSize: '1.5rem',
                                background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                marginBottom: '0.5rem', cursor: 'none',
                            }}
                        >
                            KP<span style={{ color: 'var(--neon-cyan)', WebkitTextFillColor: 'var(--neon-cyan)' }}>.</span>
                        </motion.div>
                        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', maxWidth: 240, lineHeight: 1.6 }}>
                            Building the future, one commit at a time.
                        </p>
                    </div>

                    {/* Nav links */}
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        {navLinks.map(link => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                whileHover={{ color: 'var(--neon-blue)' }}
                                style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s ease', cursor: 'none' }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </div>

                    {/* Social */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[
              { icon: <FiGithub />, href: 'https://github.com/kritikapradhan604' },
              { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/kritikapradhann' },
              { icon: <FiMail />, href: 'mailto:kritikapradhan198@gmail.com' },
            ].map((s, i) => (
                            <motion.a
                                key={i} href={s.href} target="_blank" rel="noreferrer"
                                whileHover={{ scale: 1.2, color: 'var(--neon-blue)' }}
                                style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1.1rem', cursor: 'none', transition: 'color 0.3s ease' }}
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="divider" />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Kritika Pradhan. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Crafted with <FiHeart style={{ color: '#ff2d78' }} /> using React + Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
