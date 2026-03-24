import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const milestones = [
  {
    year: '2021',
    icon: '🏫',
    title: 'Strong Foundations',
    subtitle: 'St Joseph’s Convent High School',
    desc: 'Completed Class 10th (ICSE) in Patna, developing a strong academic foundation and discovering early interests in technology and problem solving.',
    color: 'var(--neon-blue)',
  },
  {
    year: '2023',
    icon: '🎓',
    title: 'Engineering Journey Begins',
    subtitle: 'Joined LPU for B.Tech CSE',
    desc: 'Completed Class 12th (CBSE) from Satyam International School and began my B.Tech in Computer Science & Engineering at Lovely Professional University, Punjab.',
    color: 'var(--neon-purple)',
  },
  {
    year: '2023',
    icon: '🤝',
    title: 'Student Leadership',
    subtitle: 'Core Member @ Coding Blocks LPU',
    desc: 'Began actively contributing to the organization of technical events, hackathons, and coding competitions, strengthening my soft skills.',
    color: '#ffd700',
  },
  {
    year: '2024',
    icon: '🚀',
    title: 'Entrepreneurial Leap',
    subtitle: 'Co-founded VRC Grands',
    desc: 'Co-founded an Event & Artist Management Company. Led end-to-end planning of large-scale college fests and corporate events.',
    color: 'var(--neon-cyan)',
  },
  {
    year: '2025',
    icon: '🧠',
    title: 'AI Integration',
    subtitle: 'Campus Complaint Management System',
    desc: 'Developed a full-stack platform with an NLP-based AI to automatically detect priority and classify anonymous complaints.',
    color: '#00ff88',
  },
  {
    year: '2026',
    icon: '💻',
    title: 'Advancing Technical Depth',
    subtitle: 'Smart Attendance & Java Certifications',
    desc: 'Earned the Java OOPs certification from Cipher Schools and developed a hybrid Java-Python Smart Attendance Tracker with performance analytics.',
    color: '#ff2d78',
  },
];

const MilestoneCard = ({ m, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            style={{
                minWidth: 300, maxWidth: 320, flexShrink: 0,
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${m.color}30`,
                borderRadius: 16, padding: '2rem',
                position: 'relative', overflow: 'hidden',
                cursor: 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
            }}
            whileHover={{
                borderColor: `${m.color}70`,
                boxShadow: `0 20px 50px ${m.color}15`,
                y: -6,
            }}
        >
            {/* Top accent */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${m.color}, transparent)` }} />

            {/* Year badge */}
            <div style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem',
                background: `${m.color}15`, border: `1px solid ${m.color}40`,
                color: m.color, fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', fontWeight: 700,
                padding: '3px 10px', borderRadius: 99,
            }}>{m.year}</div>

            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{m.icon}</div>
            <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', color: '#fff', fontWeight: 700, marginBottom: '0.25rem' }}>{m.title}</h3>
            <div style={{ color: m.color, fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem' }}>{m.subtitle}</div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.75 }}>{m.desc}</p>
        </motion.div>
    );
};

const FounderJourney = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const containerRef = useRef(null);
    const { scrollXProgress } = useScroll({ container: containerRef });

    return (
        <section id="journey" style={{ padding: '8rem 0', background: 'linear-gradient(180deg, #12121f 0%, #0d0d1a 100%)', overflow: 'hidden' }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
                <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
                    <h2 className="section-title gradient-text">Founder Journey</h2>
                    <p className="section-subtitle">From curious student to tech entrepreneur</p>
                </motion.div>
            </div>

            {/* Connecting line */}
            <div style={{ paddingLeft: '2rem', paddingRight: '2rem', maxWidth: 1280, margin: '0 auto', marginBottom: '1rem' }}>
                <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, var(--neon-blue), var(--neon-purple), var(--neon-cyan), transparent)', borderRadius: 99, opacity: 0.3 }} />
            </div>

            {/* Horizontal scroll cards */}
            <div
                ref={containerRef}
                className="no-scrollbar"
                style={{
                    display: 'flex', gap: '1.5rem',
                    overflowX: 'auto', paddingLeft: '2rem', paddingRight: '2rem',
                    paddingBottom: '1rem', paddingTop: '1rem',
                    scrollSnapType: 'x mandatory',
                }}
            >
                {milestones.map((m, i) => (
                    <div key={i} style={{ scrollSnapAlign: 'start' }}>
                        <MilestoneCard m={m} index={i} />
                    </div>
                ))}
            </div>

            {/* Scroll hint */}
            <motion.div
                animate={{ x: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ textAlign: 'center', marginTop: '1.5rem', color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem', letterSpacing: '0.1em' }}
            >
                ← SCROLL TO EXPLORE →
            </motion.div>
        </section>
    );
};

export default FounderJourney;
