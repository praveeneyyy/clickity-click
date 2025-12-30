import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FrameSelector.css';

const FrameSelector = ({ photos, selectedLayout, onFrameSelect }) => {
    const [selectedFrame, setSelectedFrame] = useState('none');

    const frames = [
        {
            id: 'none',
            name: 'No Frame',
            icon: '⬜',
            description: 'Clean and simple',
            border: 'none'
        },
        {
            id: 'classic-white',
            name: 'Classic White',
            icon: '🖼️',
            description: 'Traditional white border',
            border: '8px solid white',
            shadow: true
        },
        {
            id: 'polaroid',
            name: 'Polaroid',
            icon: '📸',
            description: 'Vintage polaroid style',
            border: '12px solid white',
            bottomPadding: '40px',
            shadow: true
        },
        {
            id: 'film-strip',
            name: 'Film Strip',
            icon: '🎞️',
            description: 'Classic film negative',
            border: '4px solid #1a1a1a',
            perforations: true
        },
        {
            id: 'dashed-border',
            name: 'Dashed Fun',
            icon: '✂️',
            description: 'Playful dashed border',
            border: '3px dashed var(--color-coral)',
            padding: '8px'
        },
        {
            id: 'rounded-corners',
            name: 'Rounded',
            icon: '⭕',
            description: 'Soft rounded edges',
            borderRadius: '20px',
            border: '6px solid var(--color-pastel-pink)',
            shadow: true
        },
        {
            id: 'double-border',
            name: 'Double Border',
            icon: '⊞',
            description: 'Elegant double frame',
            border: '4px double var(--color-text-dark)',
            padding: '12px'
        },
        {
            id: 'gradient-glow',
            name: 'Gradient Glow',
            icon: '✨',
            description: 'Colorful gradient border',
            gradient: true,
            shadow: true
        }
    ];

    const handleSelect = (frame) => {
        setSelectedFrame(frame.id);
    };

    const handleContinue = () => {
        const frame = frames.find(f => f.id === selectedFrame);
        onFrameSelect(frame);
    };

    return (
        <div className="frame-selector-container">
            <div className="flower flower-frame-top"></div>
            <div className="flower flower-frame-bottom"></div>

            <motion.div
                className="frame-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="frame-card"
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="frame-title">
                        Add a <span className="highlight">Frame</span>
                    </h2>

                    <p className="frame-subtitle">
                        Choose a decorative frame for your photos
                    </p>

                    <div className="frames-grid">
                        {frames.map((frame, index) => (
                            <motion.div
                                key={frame.id}
                                className={`frame-option ${selectedFrame === frame.id ? 'selected' : ''}`}
                                onClick={() => handleSelect(frame)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="frame-icon">{frame.icon}</div>
                                <h3 className="frame-name">{frame.name}</h3>
                                <p className="frame-description">{frame.description}</p>

                                {/* Visual Preview */}
                                <div className="frame-preview">
                                    <div
                                        className={`preview-frame frame-style-${frame.id}`}
                                        style={{
                                            border: frame.border,
                                            borderRadius: frame.borderRadius,
                                            padding: frame.padding,
                                            boxShadow: frame.shadow ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
                                        }}
                                    >
                                        <div className="preview-image"></div>
                                    </div>
                                </div>

                                {selectedFrame === frame.id && (
                                    <div className="selected-badge-frame">✓</div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        className="btn btn-primary continue-btn-frame"
                        onClick={handleContinue}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Continue with Frame 🖼️
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default FrameSelector;
