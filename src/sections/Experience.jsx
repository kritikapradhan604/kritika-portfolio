import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCode, FiAward } from 'react-icons/fi';

const experiences = [
  {
    title: 'Co-founder',
    company: 'VRC Grands',
    period: 'Jun 2024 – Present',
    type: 'work',
    icon: <FiBriefcase />,
    color: 'var(--neon-blue)',
    desc: 'Led a team in planning and executing concerts, college fests, and corporate events. Managed artist relations, budgeting, logistics, and cross-functional teams for successful project delivery.',
    tags: ['Leadership', 'Event Management', 'Budgeting', 'Negotiations'],
  },
  {
    title: 'Core Member (Student Body)',
    company: 'Coding Blocks LPU',
    period: 'Sept 2023 – Present',
    type: 'work',
    icon: <FiCode />,
    color: '#ffd700',
    desc: 'Organized technical events, hackathons, workshops, and coding competitions. Collaborated with faculty mentors and student teams for promotions, logistics, and execution.',
    tags: ['Teamwork', 'Communication', 'Event Planning'],
  },
  {
    title: 'B.Tech – Computer Science & Engineering',
    company: 'Lovely Professional University (LPU), Punjab',
    period: '2023 – Present',
    type: 'education',
    icon: <FiAward />,
    color: 'var(--neon-purple)',
    desc: 'Currently pursuing Bachelor of Technology in Computer Science & Engineering. Building strong foundations in Data Structures, Algorithms, Java, and Python.',
    tags: ['Java', 'Python', 'Web Dev', 'CS Fundamentals'],
  },
  {
    title: 'Class 12th – CBSE',
    company: 'Satyam International School, Patna',
    period: 'Completed – 2023',
    type: 'education',
    icon: <FiAward />,
    color: 'var(--neon-cyan)',
    desc: 'Successfully completed higher secondary education with a science background, laying the technical foundation for an engineering career.',
    tags: ['Science', 'Mathematics', 'CBSE'],
  },
  {
    title: 'Class 10th – ICSE',
    company: 'St Joseph’s Convent High School, Patna',
    period: 'Completed – 2021',
    type: 'education',
    icon: <FiAward />,
    color: '#00ff88',
    desc: 'Completed secondary education with strong academic performance in core subjects.',
    tags: ['ICSE', 'Academics'],
  },
];

const TimelineItem = ({ exp, index, side }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            style={{
                display: 'flex',
                flexDirection: side === 'left' ? 'row' : 'row-reverse',
                gap: '2rem', alignItems: 'flex-start', marginBottom: '3rem',
            }}
        >
            {/* Content card */}
            <div style={{ flex: 1 }}>
                <div
                    className="glass glass-hover"
                    style={{
                        padding: '1.5rem', borderRadius: 14,
                        borderLeft: side === 'left' ? `3px solid ${exp.color}` : 'none',
                        borderRight: side === 'right' ? `3px solid ${exp.color}` : 'none',
                        cursor: 'none',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.95rem', color: '#fff', fontWeight: 700 }}>{exp.title}</h3>
                        <span style={{ color: exp.color, fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', flexShrink: 0, marginLeft: '1rem' }}>{exp.period}</span>
                    </div>
                    <div style={{ color: exp.color, fontSize: '0.8rem', marginBottom: '0.75rem', fontWeight: 600 }}>{exp.company}</div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>{exp.desc}</p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {exp.tags.map((tag, i) => (
                            <span key={i} style={{
                                background: `${exp.color}12`, border: `1px solid ${exp.color}30`,
                                color: exp.color, padding: '2px 10px', borderRadius: 99,
                                fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace',
                            }}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Node */}
            <div style={{ position: 'relative', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.div
                    animate={{ boxShadow: [`0 0 0 0 ${exp.color}60`, `0 0 0 12px transparent`] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                        width: 48, height: 48, borderRadius: '50%',
                        background: `radial-gradient(circle, ${exp.color}30, transparent)`,
                        border: `2px solid ${exp.color}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: exp.color, fontSize: '1rem',
                    }}
                >
                    {exp.icon}
                </motion.div>
            </div>

            {/* Spacer for alternating */}
            <div style={{ flex: 1 }} />
        </motion.div>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <section id="experience" style={{ padding: '8rem 2rem', background: 'linear-gradient(180deg, #12121f 0%, #0d0d1a 100%)', position: 'relative' }}>
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(185,74,255,0.04) 0%, transparent 100%)',
            }} />

            <div style={{ maxWidth: 960, margin: '0 auto' }}>
                <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
                    <h2 className="section-title gradient-text">Experience</h2>
                    <p className="section-subtitle">The journey that shaped me</p>
                </motion.div>

                {/* Central line */}
                <div style={{ position: 'relative' }}>
                    <div style={{
                        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                        top: 0, bottom: 0, width: 2,
                        background: 'linear-gradient(180deg, var(--neon-blue), var(--neon-purple), var(--neon-cyan))',
                        opacity: 0.3,
                    }} />

                    {experiences.map((exp, i) => (
                        <TimelineItem key={i} exp={exp} index={i} side={i % 2 === 0 ? 'left' : 'right'} />
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 640px) {
          #experience .timeline-row { flex-direction: column !important; }
        }
      `}</style>
        </section>
    );
};

export default Experience;
