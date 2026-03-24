import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 3, suffix: '+', label: 'Tech Projects', color: 'var(--neon-blue)', icon: '◈' },
  { value: 2, suffix: '+', label: 'Leadership Roles', color: 'var(--neon-purple)', icon: '◉' },
  { value: 3, suffix: '+', label: 'Certifications', color: 'var(--neon-cyan)', icon: '⟨⟩' },
  { value: 200, suffix: '+', label: 'Event Attendees Managed', color: '#ffd700', icon: '✦' },
  { value: 100, suffix: '%', label: 'Delivery Commitment', color: '#00ff88', icon: '◆' },
  { value: 5, suffix: '+', label: 'Tech Stack Skills', color: '#ff2d78', icon: '⬡' },
];

const CountUp = ({ target, suffix, color, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1500;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color }}>
            {count}{suffix}
        </span>
    );
};

// Simulated activity bars (mini chart)
const ActivityBars = ({ color }) => {
    const heights = [20, 45, 30, 60, 42, 75, 55, 80, 65, 88, 72, 95];
    return (
        <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: 50 }}>
            {heights.map((h, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: 'easeOut' }}
                    style={{
                        flex: 1, background: `linear-gradient(180deg, ${color}, ${color}40)`,
                        borderRadius: '2px 2px 0 0',
                        boxShadow: `0 0 4px ${color}80`,
                    }}
                />
            ))}
        </div>
    );
};

const Analytics = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="analytics" style={{ padding: '8rem 2rem', background: 'linear-gradient(180deg, #0d0d1a 0%, #12121f 100%)', position: 'relative' }}>
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: 'linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }} />

            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
                    <h2 className="section-title gradient-text">Dashboard</h2>
                    <p className="section-subtitle">Real-time developer analytics</p>
                </motion.div>

                {/* Stats grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="stat-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -6 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <span style={{ fontSize: '1.5rem', color: stat.color }}>{stat.icon}</span>
                                <ActivityBars color={stat.color} />
                            </div>
                            <CountUp target={stat.value} suffix={stat.suffix} color={stat.color} inView={inView} />
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Wide progress bar section */}
                <motion.div
                    className="glass neon-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    style={{ padding: '2rem', borderRadius: 16 }}
                >
                    <h3 style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--neon-blue)', fontSize: '0.9rem', marginBottom: '1.5rem', letterSpacing: '0.08em' }}>
                        ▶ PROJECT CATEGORY BREAKDOWN
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        {[
              { label: 'Java/Python Backend', pct: 40, color: '#ffd700' },
              { label: 'Frontend Web Dev', pct: 30, color: 'var(--neon-blue)' },
              { label: 'Event Management', pct: 20, color: 'var(--neon-cyan)' },
              { label: 'AI Integration', pct: 10, color: 'var(--neon-purple)' },
            ].map((item, i) => (
                            <div key={i}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>{item.label}</span>
                                    <span style={{ color: item.color, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem' }}>{item.pct}%</span>
                                </div>
                                <div style={{ height: 8, background: 'rgba(255,255,255,0.05)', borderRadius: 99 }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: `${item.pct}%` } : {}}
                                        transition={{ duration: 1.2, delay: 0.7 + i * 0.15, ease: 'easeOut' }}
                                        style={{
                                            height: '100%', borderRadius: 99,
                                            background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                                            boxShadow: `0 0 10px ${item.color}60`,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Analytics;
