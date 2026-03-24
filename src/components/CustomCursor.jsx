import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [outerPos, setOuterPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let outerX = 0, outerY = 0;
        let animFrame;

        const onMouseMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        const lerp = (a, b, t) => a + (b - a) * t;

        const animateOuter = () => {
            setOuterPos(prev => {
                const newX = lerp(prev.x || 0, pos.x, 0.12);
                const newY = lerp(prev.y || 0, pos.y, 0.12);
                return { x: newX, y: newY };
            });
            animFrame = requestAnimationFrame(animateOuter);
        };

        animFrame = requestAnimationFrame(animateOuter);
        window.addEventListener('mousemove', onMouseMove);

        const onHoverIn = () => setIsHovering(true);
        const onHoverOut = () => setIsHovering(false);

        const hoverEls = document.querySelectorAll('a, button, [data-cursor]');
        hoverEls.forEach(el => {
            el.addEventListener('mouseenter', onHoverIn);
            el.addEventListener('mouseleave', onHoverOut);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animFrame);
        };
    }, [pos.x, pos.y]);

    return (
        <>
            <div
                className="cursor-outer"
                style={{
                    left: `${outerPos.x}px`,
                    top: `${outerPos.y}px`,
                    width: isHovering ? '48px' : '32px',
                    height: isHovering ? '48px' : '32px',
                    borderColor: isHovering ? 'var(--neon-purple)' : 'var(--neon-blue)',
                    backgroundColor: isHovering ? 'rgba(185, 74, 255, 0.08)' : 'transparent',
                }}
            />
            <div
                className="cursor-inner"
                style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                }}
            />
        </>
    );
};

export default CustomCursor;
