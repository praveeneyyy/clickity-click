import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ThemeSelector.css';

const ThemeSelector = ({ onThemeSelect }) => {
    const [selectedTheme, setSelectedTheme] = useState('pastel');

    const themes = [
        {
            id: 'pastel',
            name: 'Pastel Dreams',
            icon: '🌸',
            colors: {
                primary: '#FFB6C1',
                secondary: '#FFF4A3',
                background: '#A8D8EA',
                accent: '#FF8B94'
            }
        },
        {
            id: 'sunset',
            name: 'Sunset Vibes',
            icon: '🌅',
            colors: {
                primary: '#FF6B6B',
                secondary: '#FFD93D',
                background: '#FFA07A',
                accent: '#FF8C42'
            }
        },
        {
            id: 'ocean',
            name: 'Ocean Breeze',
            icon: '🌊',
            colors: {
                primary: '#4ECDC4',
                secondary: '#95E1D3',
                background: '#38A3A5',
                accent: '#22577A'
            }
        },
        {
            id: 'lavender',
            name: 'Lavender Fields',
            icon: '💜',
            colors: {
                primary: '#B19CD9',
                secondary: '#E8B4F1',
                background: '#DCD6F7',
                accent: '#9D84B7'
            }
        },
        {
            id: 'mint',
            name: 'Mint Fresh',
            icon: '🍃',
            colors: {
                primary: '#98D8C8',
                secondary: '#C1F7DC',
                background: '#B5EAD7',
                accent: '#6BCF7F'
            }
        },
        {
            id: 'peach',
            name: 'Peachy Keen',
            icon: '🍑',
            colors: {
                primary: '#FFCBA4',
                secondary: '#FFE5B4',
                background: '#FFD4A3',
                accent: '#FF9A76'
            }
        }
    ];

    const handleSelect = (theme) => {
        setSelectedTheme(theme.id);
        // Apply theme colors to CSS variables
        document.documentElement.style.setProperty('--color-pastel-pink', theme.colors.primary);
        document.documentElement.style.setProperty('--color-pastel-yellow', theme.colors.secondary);
        document.documentElement.style.setProperty('--color-sky-blue', theme.colors.background);
        document.documentElement.style.setProperty('--color-coral', theme.colors.accent);
    };

    const handleContinue = () => {
        const theme = themes.find(t => t.id === selectedTheme);
        onThemeSelect(theme);
    };

    return (
        <div className="theme-selector-container">
            <div className="flower flower-left-theme"></div>
            <div className="flower flower-right-theme"></div>

            <motion.div
                className="theme-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="theme-card"
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="theme-title">
                        Pick Your <span className="highlight">Theme</span>
                    </h2>

                    <p className="theme-subtitle">
                        Choose a color theme for your photo strip
                    </p>

                    <div className="themes-grid">
                        {themes.map((theme, index) => (
                            <motion.div
                                key={theme.id}
                                className={`theme-option ${selectedTheme === theme.id ? 'selected' : ''}`}
                                onClick={() => handleSelect(theme)}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="theme-icon">{theme.icon}</div>
                                <h3 className="theme-name">{theme.name}</h3>

                                <div className="color-palette">
                                    <div
                                        className="color-swatch"
                                        style={{ background: theme.colors.primary }}
                                    ></div>
                                    <div
                                        className="color-swatch"
                                        style={{ background: theme.colors.secondary }}
                                    ></div>
                                    <div
                                        className="color-swatch"
                                        style={{ background: theme.colors.background }}
                                    ></div>
                                    <div
                                        className="color-swatch"
                                        style={{ background: theme.colors.accent }}
                                    ></div>
                                </div>

                                {selectedTheme === theme.id && (
                                    <div className="selected-badge-theme">✓</div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        className="btn btn-primary continue-btn-theme"
                        onClick={handleContinue}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Continue with Theme 🎨
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ThemeSelector;
