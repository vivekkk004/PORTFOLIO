import "./Hero.css";
import React, { useState } from "react";

const styles = {
  terminalBox: {
    backgroundColor: "#1e1e1e",
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
    <div className="hero-container">
      <div style={{ flex: "0 0 8.33%" }}></div>
      
      {/* Text Column */}
      <div className="hero">
        {/* Terminal-style Code Heading */}
        <div style={styles.terminalBox} className="terminal-box">
          <div style={styles.terminalHeader}>
            <span style={styles.dot("#ff5f56")}></span>
            <span style={styles.dot("#ffbd2e")}></span>
            <span style={styles.dot("#27c93f")}></span>
          </div>
          <div className="code-wrapper">
            <div className="code-text" style={styles.code}>{`</> Hi, I'm Vivek.`}</div>
          </div>
        </div>

        {/* Tagline */}
        <div className="card-w">
          MERN Stack Developer | UI/UX Designer
        </div>

        {/* Description */}
        <div className="card-h">
          I'M A PASSIONATE WEB DEVELOPER WITH A STRONG FOUNDATION IN THE MERN
          STACK, UI/UX DESIGN, AND BUILDING SCALABLE FULL-STACK APPLICATIONS. I
          ENJOY TURNING IDEAS INTO FUNCTIONAL, USER-FRIENDLY DIGITAL PRODUCTS.
          ALWAYS EAGER TO LEARN AND EXPLORE NEW TECHNOLOGIES.
        </div>

        {/* Icons (Circular Colored Icons) */}
        <div style={styles.icons} className="icons">
          <div style={styles.icon("#ff5f56")}></div>
          <div style={styles.icon("#ffbd2e")}></div>
          <div style={styles.icon("#27c93f")}></div>
        </div>

        {/* Buttons */}
        <div className="btn-container">
          <NeonButton text="View My Work  →" onClick={() => navigate('/work')} />
      <NeonButton text="Get In Touch  →" onClick={() => navigate('/contact')} />
        </div>
      </div>

      {/* Image Column */}
      <div className="image-column">
        <img
          src="./data/1_OVlS9HX1mVeKJUrJlmXAzA.webp"
          alt="Vivek"
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
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        boxShadow: isHovered 
          ? "0 0 20px #00bcd4, 0 0 30px #00bcd455" 
          : "0 0 10px #00bcd455, 0 0 20px #00bcd455",
        transform: isHovered ? "translateY(-3px) scale(1.05)" : "translateY(0) scale(1)",
      }}
    >
      {text}
    </button>
  );
};

export default HeroSection;
