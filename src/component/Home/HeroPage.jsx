import "./Hero.css";
import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const styles = {
  terminalBox: {
    backgroundColor: "#1e1e1e", // Dark terminal background
    borderRadius: "10px",
    width: "fit-content",
    margin: "6rem auto 2rem 3rem",
    boxShadow: "0 0 15px #00ff9c44",
    overflow: "hidden",
    fontFamily: "'Fira Code', monospace",
    marginTop: "5rem"
  },
  terminalHeader: {
    backgroundColor: "#2d2d2d",
    height: "30px",
    display: "flex",
    alignItems: "center",
    padding: "0 12px",
    gap: "8px",
  },
  dot: (color) => ({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: color,
  }),
  code: {
    color: "#00ff9c",
    fontSize: "1.5rem",
    padding: "1.5rem 2rem",
    whiteSpace: "pre",
  },
  icons: {
    display: "flex",
    gap: "15px",
    marginTop: "2rem",
  },
  icon: (color) => ({
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    backgroundColor: color,
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
  }),
};

const HeroSection = () => {
  return (
    <div
      className="row"
      style={{
        background: "#ffffff",  // White background
        color: "#000",
        padding: "2rem 1rem",
        borderRadius: "15px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      }}
    >
      <div className="col-1"></div>
      {/* Text Column */}
      <div className="hero col-md-5 col-sm-6 order-2 order-md-1 d-flex flex-column align-items-center">
        {/* Terminal-style Code Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={styles.terminalBox}
          className="terminal-box"
        >
          <div style={styles.terminalHeader}>
            <span style={styles.dot("#ff5f56")}></span>
            <span style={styles.dot("#ffbd2e")}></span>
            <span style={styles.dot("#27c93f")}></span>
          </div>
          <div style={styles.code}>{`</> Hi, I'm Vivek.`}</div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="card-w"
        >
          MERN Stack Developer | UI/UX Designer
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="card-h"
        >
          I'M A PASSIONATE WEB DEVELOPER WITH A STRONG FOUNDATION IN THE MERN
          STACK, UI/UX DESIGN, AND BUILDING SCALABLE FULL-STACK APPLICATIONS. I
          ENJOY TURNING IDEAS INTO FUNCTIONAL, USER-FRIENDLY DIGITAL PRODUCTS.
          ALWAYS EAGER TO LEARN AND EXPLORE NEW TECHNOLOGIES.
        </motion.div>

        {/* Icons (Circular Colored Icons) */}
        <div style={styles.icons}>
          <div style={styles.icon("#ff5f56")}></div>
          <div style={styles.icon("#ffbd2e")}></div>
          <div style={styles.icon("#27c93f")}></div>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="btn-container"
        >
          <Link to="/work">
            <NeonButton text="View My Work  →" />
          </Link>

          <Link to="/contacts">
            <NeonButton text="Get In Touch  →" />
          </Link>
        </motion.div>
      </div>

      {/* Image Column */}
      <div className="col-md-5 order-1 order-md-2 d-flex justify-content-center">
        <motion.img
          src="./data/1_OVlS9HX1mVeKJUrJlmXAzA.webp"
          alt="Vivek"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            borderRadius: "50%",
            width: "33rem",
            height: "33rem",
            objectFit: "cover",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            marginTop: "6rem",
          }}
          className="hero-img"
        />
      </div>
    </div>
  );
};

const NeonButton = ({ text }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px #00bcd4" }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: "#fff",
        border: "2px solid #00bcd4",
        color: "#00bcd4",
        padding: "12px 24px",
        fontSize: "1rem",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        textTransform: "uppercase",
        fontWeight: "bold",
        boxShadow: "0 0 10px #00bcd455, 0 0 20px #00bcd455",
      }}
    >
      {text}
    </motion.button>
  );
};

export default HeroSection;
