import React from 'react';
import { motion } from 'framer-motion';
import './Instructions.css';

const Instructions = ({ onContinue }) => {
    const steps = [
        {
            icon: '🎨',
            title: 'Choose Your Filter',
            description: 'Select from amazing filters like 90s, Noir, Rainbow & more!'
        },
        {
            icon: '📸',
            title: 'Strike a Pose',
            description: 'Get ready! The camera will take 3 photos automatically'
        },
        {
            icon: '🖼️',
            title: 'Pick Your Layout',
            description: 'Choose how you want your photos arranged'
        },
        {
            icon: '💾',
            title: 'Download & Share',
            description: 'Save your photo strip and share with friends!'
        }
    ];

    return (
        <div className="instructions-container">
            {/* Decorative Flowers */}
            <div className="flower flower-left"></div>
            <div className="flower flower-right"></div>

            <motion.div
                className="instructions-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="instructions-card"
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="instructions-title">
                        How to use <span className="highlight">Clickity Click</span>
                    </h2>

                    <p className="instructions-subtitle">
                        Follow these simple steps to create your perfect photo strip!
                    </p>

                    <div className="steps-grid">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="step-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="step-number">{index + 1}</div>
                                <div className="step-icon">{step.icon}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        className="btn btn-primary continue-btn"
                        onClick={onContinue}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        I'm Ready! Let's Go! 🚀
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Instructions;
