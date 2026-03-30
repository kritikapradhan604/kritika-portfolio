import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certifications = [
  {
    title: 'ChatGPT-4',
    desc: 'Comprehensive training on prompt engineering, utilizing generative AI models, and optimizing workflows with ChatGPT-4.',
    tags: ['Generative AI', 'Prompt Engineering'],
    color: 'var(--neon-cyan)',
    link: import.meta.env.BASE_URL + 'images/ChatGPT-4.pdf'
  },
  {
    title: 'Java OOPs - Cipher Schools',
    desc: 'In-depth certification covering core Java Object-Oriented Programming principles, advanced data structures, and algorithms.',
    tags: ['Java', 'OOPs', 'Problem Solving'],
    color: 'var(--neon-purple)',
    link: import.meta.env.BASE_URL + 'images/Cipher%20School.pdf'
  },
  {
    title: 'Computational Theory',
    desc: 'Detailed exploration of automata, formal languages, Turing machines, and the theoretical foundations of computer science.',
    tags: ['Theoretical CS', 'Automata', 'Turing Machines'],
    color: 'var(--neon-blue)',
    link: import.meta.env.BASE_URL + 'images/Computational-theory.pdf'
  }
];

const CertCard = ({ cert, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${hovered ? cert.color + '50' : 'rgba(255,255,255,0.05)'}`,
                borderRadius: 16, padding: '2rem',
                cursor: 'none', position: 'relative', overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: hovered ? `0 10px 30px ${cert.color}15` : 'none',
            }}
        >
            {/* Top accent line */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)`,
                opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease',
            }} />

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{
                    color: cert.color, fontSize: '2rem',
                    background: `${cert.color}15`, padding: '0.8rem', borderRadius: 12,
                }}>
                    <FiAward />
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.2rem', color: '#fff', fontWeight: 700, marginBottom: '0.5rem' }}>
                        {cert.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {cert.tags.map((tag, i) => (
                            <span key={i} style={{
                                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                                color: 'rgba(255,255,255,0.6)', padding: '2px 8px', borderRadius: 99,
                                fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace',
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.75rem', minHeight: '80px' }}>
                {cert.desc}
            </p>

            <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary btn-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem',
                    width: '100%', cursor: 'none', textDecoration: 'none',
                    border: `1px solid ${cert.color}40`,
                    color: '#fff'
                }}
            >
                View Certificate <FiExternalLink />
            </motion.a>
        </motion.div>
    );
};

const Certifications = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <section id="certifications" style={{ padding: '8rem 2rem', background: 'linear-gradient(180deg, #1a1a2e 0%, #12121f 100%)', position: 'relative' }}>
            <div style={{
                position: 'absolute', right: '5%', bottom: '10%',
                width: 400, height: 400,
                background: 'radial-gradient(circle, rgba(0,255,240,0.03) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
                    <h2 className="section-title gradient-text">Certifications</h2>
                    <p className="section-subtitle">Continuous learning and skill validation</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                    {certifications.map((cert, i) => (
                        <CertCard key={i} cert={cert} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
