import React, { useEffect, useState } from 'react';
import './Sparkles.css';

const Sparkles = () => {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const createSparkle = () => {
            const sparkle = {
                id: Date.now() + Math.random(),
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 4 + 2,
                duration: Math.random() * 2 + 1
            };

            setSparkles(prev => [...prev, sparkle]);

            setTimeout(() => {
                setSparkles(prev => prev.filter(s => s.id !== sparkle.id));
            }, sparkle.duration * 1000);
        };

        const interval = setInterval(createSparkle, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="sparkles-container">
            {sparkles.map(sparkle => (
                <div
                    key={sparkle.id}
                    className="sparkle"
                    style={{
                        left: `${sparkle.x}px`,
                        top: `${sparkle.y}px`,
                        width: `${sparkle.size}px`,
                        height: `${sparkle.size}px`,
                        animationDuration: `${sparkle.duration}s`
                    }}
                />
            ))}
        </div>
    );
};

export default Sparkles;
