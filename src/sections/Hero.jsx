import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import * as THREE from 'three';

// 3D animated orb
const HeroOrb = () => {
    const meshRef = useRef();
    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });
    return (
        <Sphere ref={meshRef} args={[1.6, 64, 64]}>
            <MeshDistortMaterial
                color="#00d4ff"
                attach="material"
                distort={0.45}
                speed={2.5}
                roughness={0}
                metalness={0.9}
                transparent
                opacity={0.85}
            />
        </Sphere>
    );
};

// Ring
const HeroRing = () => {
    const ref = useRef();
    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.x = Math.PI / 2 + clock.getElapsedTime() * 0.15;
            ref.current.rotation.z = clock.getElapsedTime() * 0.1;
        }
    });
    return (
        <mesh ref={ref}>
            <torusGeometry args={[2.5, 0.04, 16, 100]} />
            <meshStandardMaterial color="#b94aff" emissive="#b94aff" emissiveIntensity={2} />
        </mesh>
    );
};

const HeroRing2 = () => {
    const ref = useRef();
    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.x = clock.getElapsedTime() * 0.2;
            ref.current.rotation.y = Math.PI / 3 + clock.getElapsedTime() * 0.15;
        }
    });
    return (
        <mesh ref={ref}>
            <torusGeometry args={[3.2, 0.025, 16, 100]} />
            <meshStandardMaterial color="#00fff0" emissive="#00fff0" emissiveIntensity={1.5} />
        </mesh>
    );
};

const Hero = () => {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            style={{
                position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
                overflow: 'hidden', background: 'linear-gradient(135deg, #0d0d1a 0%, #12121f 50%, #1a1a2e 100%)',
            }}
        >
            {/* Background grid */}
            <div className="bg-grid" style={{ position: 'absolute', inset: 0 }} />

            {/* Radial glow */}
            <div style={{
                position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
                width: 600, height: 600,
                background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', width: '100%', paddingTop: 80, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                {/* Left - Text */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <span style={{
                            fontFamily: 'JetBrains Mono, monospace', color: 'var(--neon-cyan)',
                            fontSize: '0.9rem', letterSpacing: '0.15em',
                        }}>
                            &lt;Hello I'm /&gt;
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        style={{
                            fontFamily: 'Orbitron, sans-serif',
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: 900, lineHeight: 1.1,
                            marginTop: '0.75rem', marginBottom: '0.5rem',
                        }}
                    >
                        <span className="gradient-text">Kritika</span>
                        <br />
                        <span style={{ color: '#ffffff' }}>Pradhan</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)' }}
                    >
                        <span style={{ color: 'var(--neon-blue)' }}>{'> '}</span>
                        <TypeAnimation
                            sequence={[
                                'Java / Python Developer', 1800,
                                'Frontend Developer', 1800,
                                'Co-founder @ VRC Grands', 1800,
                                'Tech Community Leader', 1800,
                                'Problem Solver', 1800,
                            ]}
                            repeat={Infinity}
                            style={{ fontFamily: 'JetBrains Mono, monospace' }}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 500, marginBottom: '2.5rem' }}
                    >
                        B.Tech CSE student at LPU deeply passionate about building scalable web solutions, AI-driven applications, and managing impactful tech & non-tech events.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1 }}
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
                    >
                        <motion.a
                            href="#projects"
                            className="btn-primary btn-glow"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            style={{ cursor: 'none', textDecoration: 'none' }}
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn-secondary btn-glow"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            style={{ cursor: 'none', textDecoration: 'none' }}
                        >
                            Contact Me
                        </motion.a>

                        <div style={{ display: 'flex', gap: '0.75rem', marginLeft: '0.5rem' }}>
                            {[
                                { icon: <FiGithub />, href: 'https://github.com/kritikapradhan604' },
                                { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/kritikapradhann' },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.2, color: 'var(--neon-blue)' }}
                                    style={{
                                        color: 'rgba(255,255,255,0.5)', fontSize: '1.3rem', cursor: 'none',
                                        transition: 'color 0.3s ease',
                                    }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right - 3D Canvas */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ height: 450, position: 'relative' }}
                >
                    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                        <ambientLight intensity={0.2} />
                        <pointLight position={[5, 5, 5]} intensity={1.5} color="#00d4ff" />
                        <pointLight position={[-5, -5, -5]} intensity={1} color="#b94aff" />
                        <pointLight position={[0, 5, -5]} intensity={0.8} color="#00fff0" />
                        <HeroOrb />
                        <HeroRing />
                        <HeroRing2 />
                        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                    </Canvas>

                    {/* Floating labels */}
                    {[
                        { label: 'React', top: '15%', left: '10%', color: 'var(--neon-blue)' },
                        { label: 'Python', top: '70%', left: '5%', color: 'var(--neon-purple)' },
                        { label: 'Three.js', top: '20%', right: '5%', color: 'var(--neon-cyan)' },
                        { label: 'AI/ML', top: '75%', right: '10%', color: '#ffd700' },
                    ].map((tag, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                            style={{
                                position: 'absolute', top: tag.top,
                                left: tag.left, right: tag.right,
                                background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
                                border: `1px solid ${tag.color}40`,
                                color: tag.color, padding: '4px 12px', borderRadius: 99,
                                fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace',
                                boxShadow: `0 0 10px ${tag.color}30`,
                            }}
                        >
                            {tag.label}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={scrollToAbout}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                    position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
                    background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)',
                    fontSize: '1.5rem', cursor: 'none', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: '0.25rem',
                }}
            >
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--neon-blue)' }}>SCROLL</span>
                <FiArrowDown />
            </motion.button>

            <style>{`
        @media (max-width: 768px) {
          #home > div > div:first-child { display: none !important; }
          #home > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
