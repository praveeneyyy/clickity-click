import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './LayoutSelection.css';

const LayoutSelection = ({ photos, onLayoutSelect }) => {
    const [selectedLayout, setSelectedLayout] = useState(null);

    const layouts = [
        {
            id: 'classic-vertical',
            name: 'Classic Vertical',
            icon: '📏',
            description: '3 photos stacked vertically',
            columns: 1,
            rows: 3,
            photoSize: 'large'
        },
        {
            id: 'classic-horizontal',
            name: 'Classic Horizontal',
            icon: '↔️',
            description: '3 photos side by side',
            columns: 3,
            rows: 1,
            photoSize: 'medium'
        },
        {
            id: 'grid-2x2',
            name: 'Grid 2×2',
            icon: '⊞',
            description: '4 photos in a square grid',
            columns: 2,
            rows: 2,
            photoSize: 'medium'
        },
        {
            id: 'mini-strip',
            name: 'Mini Strip',
            icon: '📱',
            description: 'Compact vertical strip',
            columns: 1,
            rows: 3,
            photoSize: 'small'
        },
        {
            id: 'wide-panorama',
            name: 'Wide Panorama',
            icon: '🖼️',
            description: 'Extra wide horizontal',
            columns: 3,
            rows: 1,
            photoSize: 'large'
        },
        {
            id: 'collage-mixed',
            name: 'Mixed Collage',
            icon: '🎨',
            description: 'Creative mixed sizes',
            columns: 2,
            rows: 2,
            photoSize: 'mixed'
        },
        {
            id: 'polaroid-style',
            name: 'Polaroid Style',
            icon: '📸',
            description: 'Classic polaroid frames',
            columns: 1,
            rows: 3,
            photoSize: 'polaroid'
        }
    ];

    const handleSelect = (layout) => {
        setSelectedLayout(layout.id);
    };

    const handleContinue = () => {
        if (selectedLayout) {
            const layout = layouts.find(l => l.id === selectedLayout);
            onLayoutSelect(layout);
        }
    };

    return (
        <div className="layout-selection-container">
            {/* Decorative Flowers */}
            <div className="flower flower-top"></div>
            <div className="flower flower-bottom"></div>

            <motion.div
                className="layout-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="layout-card"
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="layout-title">
                        Choose Your <span className="highlight">Layout</span>
                    </h2>

                    <p className="layout-subtitle">
                        Select how you want your photos arranged
                    </p>

                    <div className="layouts-grid">
                        {layouts.map((layout, index) => (
                            <motion.div
                                key={layout.id}
                                className={`layout-option ${selectedLayout === layout.id ? 'selected' : ''}`}
                                onClick={() => handleSelect(layout)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="layout-icon">{layout.icon}</div>
                                <h3 className="layout-name">{layout.name}</h3>
                                <p className="layout-description">{layout.description}</p>

                                {/* Visual Preview */}
                                <div className={`layout-preview layout-preview-${layout.id}`}>
                                    {Array.from({ length: layout.columns * layout.rows }).map((_, i) => (
                                        <div key={i} className="preview-box"></div>
                                    ))}
                                </div>

                                {selectedLayout === layout.id && (
                                    <div className="selected-badge">✓</div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        className={`btn btn-primary continue-btn ${!selectedLayout ? 'disabled' : ''}`}
                        onClick={handleContinue}
                        disabled={!selectedLayout}
                        whileHover={selectedLayout ? { scale: 1.05 } : {}}
                        whileTap={selectedLayout ? { scale: 0.95 } : {}}
                    >
                        Continue with Selected Layout 🎉
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default LayoutSelection;
