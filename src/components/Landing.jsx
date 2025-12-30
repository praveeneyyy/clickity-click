import React from 'react';
import { motion } from 'framer-motion';
import './Landing.css';

const Landing = ({ onStart }) => {
  return (
    <div className="landing-container">
      {/* Decorative Flowers */}
      <div className="flower flower-top-left"></div>
      <div className="flower flower-top-right"></div>
      <div className="flower flower-bottom-left"></div>
      <div className="flower flower-bottom-right"></div>

      <motion.div
        className="landing-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="landing-card"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="emoji-decoration">📸</div>

          <h1 className="landing-title">
            Welcome to
            <span className="title-highlight"> Clickity Click</span>
          </h1>

          <p className="landing-subtitle">
            Create amazing photo strips with fun filters!
          </p>

          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <span>Multiple filters</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎨</span>
              <span>Custom layouts</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💾</span>
              <span>Download instantly</span>
            </div>
          </div>

          <motion.button
            className="btn btn-primary landing-btn"
            onClick={onStart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Get Started! 🎉
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;
