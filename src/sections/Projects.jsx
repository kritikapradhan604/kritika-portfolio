import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'AI Adaptive Path Finding Engine',
    desc: 'Intelligent pathfinding system that adapts routes in real-time based on dynamic obstacles and changing terrain using advanced heuristic search algorithms.',
    tags: ['Python', 'AI', 'Search Algorithms'],
    isAI: true,
    color: 'var(--neon-blue)',
    demo: '#',
    github: '#',
    stats: 'Real-time Path Adaptation',
  },
  {
    title: 'Campus Complaint Management System',
    desc: 'Secure full-stack web application enabling anonymous complaint submission. Features NLP-based AI for automatic priority detection and department-wise classification.',
    tags: ['React', 'Python (Flask)', 'MySQL', 'NLP'],
    isAI: true,
    color: '#ffd700',
    demo: '#',
    github: '#',
    stats: 'Smart NLP Routing',
  },
  {
    title: '3D Developer Portfolio',
    desc: 'Immersive, sci-fi themed developer portfolio featuring 3D elements, parallax tilt cards, interactive animations, and a customized WebGL experience.',
    tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    isAI: false,
    color: 'var(--neon-purple)',
    demo: '#',
    github: '#',
    stats: 'Vite / Fast Build',
  },
];

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    const [hovered, setHovered] = useState(false);
    const [tiltStyle, setTiltStyle] = useState({});

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -8;
        const rotateY = ((x - cx) / cx) * 8;
        setTiltStyle({
            transform: "perspective(800px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(1.02)",
        });
    };

    const handleMouseLeave = () => {
        setTiltStyle({ transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)', transition: 'transform 0.5s ease' });
        setHovered(false);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid ' + (hovered ? project.color + '50' : 'rgba(255,255,255,0.07)'),
                borderRadius: 16, padding: '1.75rem',
                cursor: 'none', position: 'relative', overflow: 'hidden',
                boxShadow: hovered ? '0 20px 60px ' + project.color + '15, 0 0 30px ' + project.color + '10' : 'none',
                ...tiltStyle,
                transition: tiltStyle.transition || 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
        >
            {/* Top accent line */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: 'linear-gradient(90deg, transparent, ' + project.color + ', transparent)',
                opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease',
            }} />

            {/* Glow background */}
            {hovered && (
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(circle at 50% 0%, ' + project.color + '08 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                {/* Title */}
                <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', color: '#fff', fontWeight: 700, flex: 1 }}>
                    {project.title}
                </h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                    {project.isAI && <span className="ai-badge">✦ AI</span>}
                </div>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                {project.desc}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {project.tags.map((tag, i) => (
                    <span key={i} style={{
                        background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.6)', padding: '3px 10px', borderRadius: 99,
                        fontSize: '0.72rem', fontFamily: 'JetBrains Mono, monospace',
                    }}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* Stats + buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: project.color, fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>
                    ◉ {project.stats}
                </span>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.15, color: project.color }}
                        style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem', cursor: 'none' }}
                    >
                        <FiGithub />
                    </motion.a>
                    <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.15, color: project.color }}
                        style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem', cursor: 'none' }}
                    >
                        <FiExternalLink />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <section id="projects" style={{ padding: '8rem 2rem', background: 'linear-gradient(180deg, #12121f 0%, #1a1a2e 100%)', position: 'relative' }}>
            <div style={{
                position: 'absolute', left: '5%', top: '10%',
                width: 500, height: 500,
                background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
                    <h2 className="section-title gradient-text">Featured Projects</h2>
                    <p className="section-subtitle">Building solutions that matter</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    style={{ textAlign: 'center', marginTop: '3rem' }}
                >
                    <motion.a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary btn-glow"
                        whileHover={{ scale: 1.05, y: -2 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'none', textDecoration: 'none' }}
                    >
                        <FiGithub /> View All on GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
