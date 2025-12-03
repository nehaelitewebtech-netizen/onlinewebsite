import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      
      <h2 className="about-title">
        About <span className="gradient-text">Me</span>
      </h2>

      <div className="about-container">
        
        <div className="about-left">
          <img src="/profile.jpg" alt="Profile" className="about-img" />
        </div>

        <div className="about-right">
          <h3 className="about-heading">Frontend Developer</h3>

          <p className="about-description">
            Hi! I'm <span className="highlight">Neha</span>, a passionate
            frontend developer specializing in creating modern, responsive,
            and interactive web experiences. I enjoy transforming ideas
            into functional and visually appealing digital products.
          </p>

          <p className="about-description">
            I work with technologies like <strong>React.js</strong>,
            <strong> JavaScript</strong>, <strong>HTML</strong>,
            <strong> CSS</strong>, to build
            fast and elegant interfaces. My goal is to design
            user-friendly, accessible, and impactful applications.
          </p>

          <button className="about-btn gradient-btn">Download Resume</button>
        </div>
      </div>
    </section>
  );
}
