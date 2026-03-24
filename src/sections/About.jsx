import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiCpu, FiGlobe, FiLayers } from 'react-icons/fi';

const skills = [
  { name: 'Java / OOPs', level: 90, color: 'var(--neon-blue)' },
  { name: 'Python', level: 85, color: 'var(--neon-purple)' },
  { name: 'React / Tailwind CSS', level: 80, color: 'var(--neon-cyan)' },
  { name: 'MySQL / JDBC', level: 85, color: '#ff2d78' },
  { name: 'Git / Figma / VS Code', level: 90, color: '#ffd700' },
  { name: 'Team Leadership', level: 95, color: '#00ff88' },
];

const traits = [
  { icon: <FiCode />, label: 'Clean Code', desc: 'Writing elegant, maintainable solutions in Java & Python' },
  { icon: <FiCpu />, label: 'AI-First', desc: 'Leveraging intelligence for smarter applications' },
  { icon: <FiGlobe />, label: 'Leadership', desc: 'Co-founder & active student body core member' },
  { icon: <FiLayers />, label: 'Full Stack', desc: 'End-to-end robust web development' },
];

const SkillBar = ({ name, level, color, delay }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <div ref={ref} style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{name}</span>
                <span style={{ color, fontSize: '0.85rem', fontFamily: 'JetBrains Mono, monospace' }}>{level}%</span>
            </div>
            <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 99, overflow: 'hidden' }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1.4, ease: 'easeOut', delay }}
                    style={{
                        height: '100%', borderRadius: 99,
                        background: `linear-gradient(90deg, ${color}, ${color}99)`,
                        boxShadow: `0 0 8px ${color}80`,
                    }}
                />
            </div>
        </div>
    );
};

const About = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="about" style={{ padding: '8rem 2rem', position: 'relative', background: 'linear-gradient(180deg, #0d0d1a 0%, #12121f 100%)' }}>
            {/* Background accent */}
            <div style={{
                position: 'absolute', right: 0, top: '20%',
                width: 400, height: 400,
                background: 'radial-gradient(circle, rgba(185,74,255,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="section-title gradient-text">About Me</h2>
                    <p className="section-subtitle">The mind behind the machine</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                    {/* Left: Bio + Traits */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Avatar card */}
                        <div className="glass glass-hover neon-border" style={{ padding: '2rem', marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
                            <div style={{
                                position: 'absolute', top: -30, right: -30,
                                width: 150, height: 150,
                                background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
                            }} />
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                                {/* Avatar placeholder */}
                                <div style={{
                                    width: 80, height: 80, borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.8rem', fontFamily: 'Orbitron, sans-serif', fontWeight: 700,
                                    flexShrink: 0, boxShadow: '0 0 20px rgba(0,212,255,0.3)',
                                }}>
                                    KP
                                </div>
                                <div>
                                    <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.1rem', color: '#fff', marginBottom: '0.25rem' }}>Kritika Pradhan</h3>
                                    <p style={{ color: 'var(--neon-blue)', fontSize: '0.85rem', fontFamily: 'JetBrains Mono, monospace' }}>Full Stack · AI Engineer · Founder</p>
                                </div>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                A passionate developer pursuing B.Tech in CSE at LPU. As the Co-founder of VRC Grands and
                a core member at Coding Blocks LPU, I blend technical expertise in full-stack AI development
                with strong leadership and event management skills. From building campus management systems
                to organizing large-scale tech events, I love turning complex ideas into impactful realities.
              </p>
                        </div>

                        {/* Traits grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            {traits.map((t, i) => (
                                <motion.div
                                    key={i}
                                    className="glass glass-hover"
                                    whileHover={{ scale: 1.03, y: -3 }}
                                    style={{ padding: '1.2rem', borderRadius: 12, cursor: 'none' }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                >
                                    <div style={{ color: 'var(--neon-blue)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{t.icon}</div>
                                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{t.label}</div>
                                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem' }}>{t.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="glass neon-border" style={{ padding: '2rem', borderRadius: 16 }}>
                            <h3 style={{
                                fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', letterSpacing: '0.1em',
                                color: 'var(--neon-blue)', marginBottom: '1.75rem',
                            }}>
                                ▶ TECHNICAL SKILLS
                            </h3>
                            {skills.map((skill, i) => (
                                <SkillBar key={i} {...skill} delay={0.1 * i} />
                            ))}
                        </div>

                        {/* Stat circles */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
              {[
                { value: '3+', label: 'Tech Projects', color: 'var(--neon-blue)' },
                { value: '2+', label: 'Leadership Roles', color: 'var(--neon-purple)' },
                { value: '3+', label: 'Certifications', color: 'var(--neon-cyan)' },
              ].map((s, i) => (
                                <div key={i} className="glass glass-hover" style={{ padding: '1.25rem', borderRadius: 12, textAlign: 'center', cursor: 'none' }}>
                                    <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.6rem', fontWeight: 700, color: s.color }}>{s.value}</div>
                                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', marginTop: '0.2rem' }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #about > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default About;
