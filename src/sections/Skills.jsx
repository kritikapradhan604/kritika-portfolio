import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import {
  FaReact, FaPython, FaJava, FaGitAlt, FaFigma, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMysql, SiVite, SiVercel
} from 'react-icons/si';

const techStack = [
  { Icon: FaJava, label: 'Java', color: '#f89820', angle: 0 },
  { Icon: FaPython, label: 'Python', color: '#3776ab', angle: 45 },
  { Icon: FaHtml5, label: 'HTML5', color: '#e34f26', angle: 90 },
  { Icon: FaCss3Alt, label: 'CSS3', color: '#1572b6', angle: 135 },
  { Icon: FaReact, label: 'React', color: '#61dafb', angle: 180 },
  { Icon: SiTailwindcss, label: 'Tailwind', color: '#38bdf8', angle: 225 },
  { Icon: SiMysql, label: 'MySQL', color: '#4479a1', angle: 270 },
  { Icon: FaGitAlt, label: 'Git', color: '#f05032', angle: 315 },
];

const techStack2 = [
  { Icon: FaFigma, label: 'Figma', color: '#f24e1e', angle: 0 },
  { Icon: SiVite, label: 'Vite', color: '#646cff', angle: 60 },
  { Icon: SiVercel, label: 'Vercel', color: '#ffffff', angle: 120 },
  { Icon: FaJava, label: 'JDBC', color: '#007396', angle: 180 },
  { Icon: FaPython, label: 'NLP', color: '#ffcc33', angle: 240 },
  { Icon: FaReact, label: 'Frontend', color: '#61dafb', angle: 300 },
];

// 3D central core sphere
const CoreSphere = () => {
    const ref = useRef();
    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.y = clock.getElapsedTime() * 0.4;
            ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
        }
    });
    return (
        <Sphere ref={ref} args={[0.8, 32, 32]}>
            <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.4} metalness={1} roughness={0.1} transparent opacity={0.9} />
        </Sphere>
    );
};

// Orbiting icon node
const OrbitNode = ({ angle, radius, speed, color, label, Icon }) => {
    const ref = useRef();
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed + (angle * Math.PI) / 180;
        if (ref.current) {
            ref.current.position.x = Math.cos(t) * radius;
            ref.current.position.z = Math.sin(t) * radius;
            ref.current.position.y = Math.sin(t * 0.5) * 0.3;
        }
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
            <Html distanceFactor={6} style={{ pointerEvents: 'none' }}>
                <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px',
                    color, transform: 'translate(-50%, -50%)',
                }}>
                    <Icon style={{ fontSize: '1.1rem', filter: "drop-shadow(0 0 6px " + color + ")" }} />
                    <span style={{ fontSize: '0.55rem', whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.7)' }}>{label}</span>
                </div>
            </Html>
        </mesh>
    );
};

// Orbital ring
const OrbitalRing = ({ radius, rotX = 0, rotZ = 0, color }) => {
    return (
        <mesh rotation={[rotX, 0, rotZ]}>
            <torusGeometry args={[radius, 0.01, 8, 80]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={0.3} />
        </mesh>
    );
};

const Skills = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" style={{ padding: '8rem 2rem', background: 'linear-gradient(180deg, #1a1a2e 0%, #12121f 100%)', position: 'relative' }}>
            <div style={{
                position: 'absolute', right: '10%', bottom: '10%',
                width: 400, height: 400,
                background: 'radial-gradient(circle, rgba(0,255,240,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
                    <h2 className="section-title gradient-text">Tech Universe</h2>
                    <p className="section-subtitle">Technologies orbiting my expertise</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    {/* 3D Orbital Canvas */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ height: 480 }}
                    >
                        <Canvas camera={{ position: [0, 1.5, 6], fov: 50 }}>
                            <ambientLight intensity={0.1} />
                            <pointLight position={[5, 5, 5]} intensity={1.5} color="#00d4ff" />
                            <pointLight position={[-5, -5, -5]} intensity={1} color="#b94aff" />
                            <CoreSphere />
                            <OrbitalRing radius={2} rotX={Math.PI / 2} color="#00d4ff" />
                            <OrbitalRing radius={2.8} rotX={Math.PI / 4} rotZ={Math.PI / 6} color="#b94aff" />
                            {techStack.map((t, i) => (
                                <OrbitNode key={i} radius={2} speed={0.3} color={t.color} label={t.label} Icon={t.Icon} angle={t.angle} />
                            ))}
                            {techStack2.map((t, i) => (
                                <OrbitNode key={i} radius={2.8} speed={-0.2} color={t.color} label={t.label} Icon={t.Icon} angle={t.angle} />
                            ))}
                            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
                        </Canvas>
                    </motion.div>

                    {/* Skill bubbles list */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                    >
                        <h3 style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--neon-blue)', fontSize: '0.9rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                            ▶ SKILL DOMAINS
                        </h3>
                        {[
              { label: 'Core Languages', items: ['Java (OOPs)', 'Python'], color: 'var(--neon-blue)' },
              { label: 'Frontend & UI', items: ['HTML', 'CSS', 'React', 'Tailwind CSS'], color: 'var(--neon-purple)' },
              { label: 'Backend & Data', items: ['JDBC', 'MySQL', 'Python (Flask)', 'NLP Concepts'], color: '#ffd700' },
              { label: 'Tools / Platforms', items: ['VS Code', 'Git / GitHub', 'Figma', 'Vercel'], color: 'var(--neon-cyan)' },
              { label: 'Soft Skills', items: ['Team Leadership', 'Stakeholder Mgt.', 'Communication'], color: '#00ff88' },
            ].map((domain, i) => (
                            <motion.div
                                key={i}
                                className="glass glass-hover"
                                initial={{ opacity: 0, x: 30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                                style={{ padding: '1rem 1.25rem', borderRadius: 12, borderLeft: '3px solid ' + domain.color, cursor: 'none' }}
                            >
                                <div style={{ color: domain.color, fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>{domain.label}</div>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {domain.items.map((item, j) => (
                                        <span key={j} style={{
                                            background: domain.color + '15', border: '1px solid ' + domain.color + '30',
                                            color: 'rgba(255,255,255,0.7)', padding: '2px 10px', borderRadius: 99,
                                            fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace',
                                        }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #skills > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default Skills;
