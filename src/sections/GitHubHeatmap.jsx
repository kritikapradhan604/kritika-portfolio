import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Generate mock contribution data (52 weeks × 7 days)
const generateHeatmapData = () => {
    const data = [];
    const now = new Date();
    for (let week = 51; week >= 0; week--) {
        for (let day = 0; day < 7; day++) {
            const date = new Date(now);
            date.setDate(date.getDate() - (week * 7 + (6 - day)));
            const count = Math.random() < 0.35 ? 0 : Math.floor(Math.random() * 12);
            data.push({ date: date.toISOString().split('T')[0], count, week: 51 - week, day });
        }
    }
    return data;
};

const heatmapData = generateHeatmapData();

const getColor = (count) => {
    if (count === 0) return 'rgba(255,255,255,0.04)';
    if (count < 3) return 'rgba(0,212,255,0.2)';
    if (count < 6) return 'rgba(0,212,255,0.45)';
    if (count < 9) return 'rgba(0,255,240,0.65)';
    return 'rgba(0,255,240,0.9)';
};

const DAYS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const GitHubHeatmap = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [tooltip, setTooltip] = useState(null);

    const totalContributions = heatmapData.reduce((s, d) => s + d.count, 0);

    // Group by month for month labels
    const monthLabels = [];
    for (let i = 0; i < 52; i++) {
        const weekData = heatmapData.filter(d => d.week === i);
        if (weekData.length > 0) {
            const d = new Date(weekData[0].date);
            if (d.getDate() <= 7) monthLabels.push({ week: i, month: MONTHS[d.getMonth()] });
        }
    }

    return (
        <section id="contributions" style={{ padding: '8rem 2rem', background: 'linear-gradient(180deg, #12121f 0%, #1a1a2e 100%)', position: 'relative' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
                    <h2 className="section-title gradient-text">Contribution Graph</h2>
                    <p className="section-subtitle">
                        <span style={{ color: 'var(--neon-blue)', fontFamily: 'JetBrains Mono, monospace', fontSize: '1.1rem', fontWeight: 700 }}>
                            {totalContributions.toLocaleString()}
                        </span>{' '}
                        contributions in the last year
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="glass neon-border"
                    style={{ padding: '2rem', borderRadius: 16, overflowX: 'auto' }}
                >
                    <div style={{ minWidth: 700 }}>
                        {/* Month labels */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(52, 14px)', gap: 3, marginLeft: 30, marginBottom: 6 }}>
                            {Array.from({ length: 52 }, (_, i) => {
                                const ml = monthLabels.find(m => m.week === i);
                                return (
                                    <div key={i} style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', gridColumn: i + 1 }}>
                                        {ml ? ml.month : ''}
                                    </div>
                                );
                            })}
                        </div>

                        <div style={{ display: 'flex', gap: 8 }}>
                            {/* Day labels */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'flex-end' }}>
                                {DAYS.map((d, i) => (
                                    <div key={i} style={{ height: 14, fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', lineHeight: '14px' }}>{d}</div>
                                ))}
                            </div>

                            {/* Heatmap grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(52, 14px)', gridTemplateRows: 'repeat(7, 14px)', gap: 3, perspective: '300px' }}>
                                {heatmapData.map((cell, i) => (
                                    <motion.div
                                        key={i}
                                        className="heatmap-cell"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.3, delay: (cell.week * 0.015) + (cell.day * 0.008) }}
                                        onMouseEnter={(e) => setTooltip({ x: e.clientX, y: e.clientY, date: cell.date, count: cell.count })}
                                        onMouseLeave={() => setTooltip(null)}
                                        style={{
                                            gridColumn: cell.week + 1,
                                            gridRow: cell.day + 1,
                                            backgroundColor: getColor(cell.count),
                                            boxShadow: cell.count > 6 ? `0 0 6px rgba(0,255,240,${cell.count * 0.07})` : 'none',
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Legend */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', justifyContent: 'flex-end', marginRight: '1rem' }}>
                            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>Less</span>
                            {[0, 2, 4, 7, 11].map((v, i) => (
                                <div key={i} style={{ width: 12, height: 12, borderRadius: 2, backgroundColor: getColor(v) }} />
                            ))}
                            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>More</span>
                        </div>
                    </div>
                </motion.div>

                {/* Tooltip */}
                {tooltip && (
                    <div style={{
                        position: 'fixed', left: tooltip.x + 12, top: tooltip.y - 40, zIndex: 9000,
                        background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(0,212,255,0.3)', borderRadius: 8,
                        padding: '6px 12px', fontSize: '0.75rem', color: '#fff', pointerEvents: 'none',
                        fontFamily: 'JetBrains Mono, monospace',
                    }}>
                        <span style={{ color: 'var(--neon-blue)' }}>{tooltip.count} contributions</span>
                        {' on '}{tooltip.date}
                    </div>
                )}
            </div>
        </section>
    );
};

export default GitHubHeatmap;
