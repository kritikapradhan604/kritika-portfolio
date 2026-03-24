import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin } from 'react-icons/fi';

const socials = [
  { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/kritikapradhan604', color: '#ffffff' },
  { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kritikapradhann', color: '#0a66c2' },
  { icon: <FiMail />, label: 'Email', href: 'mailto:kritikapradhan198@gmail.com', color: '#ff2d78' },
];

const Contact = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="contact" style={{ padding: '8rem 2rem', background: 'linear-gradient(180deg, #1a1a2e 0%, #0d0d1a 100%)', position: 'relative' }}>
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'radial-gradient(ellipse 60% 60% at 50% 80%, rgba(185,74,255,0.07) 0%, transparent 100%)',
            }} />

            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
                    <h2 className="section-title gradient-text">Get in Touch</h2>
                    <p className="section-subtitle">Let&apos;s build something amazing together</p>
                </motion.div>

                <div style={{ maxWidth: 500, margin: '0 auto' }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="glass neon-border" style={{ padding: '2rem', borderRadius: 16, marginBottom: '1.5rem' }}>
                            <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', color: 'var(--neon-blue)', marginBottom: '1rem', letterSpacing: '0.08em' }}>
                                ▶ CONTACT INFO
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                  { icon: <FiMail />, label: 'kritikapradhan198@gmail.com', sub: 'Email me anytime' },
                  { icon: <FiMapPin />, label: 'Punjab, India', sub: 'Lovely Professional University' },
                  { icon: <FiMapPin />, label: '+91 7061776435', sub: 'Phone Contact' },
                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <div style={{ color: 'var(--neon-blue)', marginTop: '0.2rem', flexShrink: 0 }}>{item.icon}</div>
                                        <div>
                                            <div style={{ color: '#fff', fontSize: '0.9rem' }}>{item.label}</div>
                                            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>{item.sub}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social icons */}
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            {socials.map((s, i) => (
                                <motion.a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        width: 48, height: 48, borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', cursor: 'none',
                                        textDecoration: 'none', transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = s.color;
                                        e.currentTarget.style.color = s.color;
                                        e.currentTarget.style.boxShadow = `0 0 16px ${s.color}50`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Availability badge */}
                        <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <span style={{
                                display: 'inline-block', width: 10, height: 10, borderRadius: '50%',
                                background: '#00ff88', boxShadow: '0 0 8px #00ff88',
                                animation: 'pulseGlow 2s ease-in-out infinite',
                            }} />
                            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                                Available for freelance & full-time roles
                            </span>
                        </div>
                    </motion.div>


                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #contact .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default Contact;
