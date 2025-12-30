import React, { useState, useEffect } from 'react';
import './CustomCursor.css';
import cursorDefault from '../assets/Sanrio Hello Kitty White Arrow--cursor--SweezyCursors..cur';
import cursorPointer from '../assets/Sanrio Hello Kitty White Arrow--pointer--SweezyCursors..cur';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.classList.contains('clickable') ||
                target.closest('button') ||
                target.closest('a');

            setIsHovering(isInteractive);
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div
            className={`hello-kitty-cursor ${isHovering ? 'hovering' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <img
                src={isHovering ? cursorPointer : cursorDefault}
                alt="cursor"
                className="cursor-image"
            />
        </div>
    );
};

export default CustomCursor;
