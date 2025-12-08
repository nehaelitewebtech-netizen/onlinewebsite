import React from "react";
import "./About.css";

import { IoEarth } from "react-icons/io5"; 
import { SiJavascript, SiReact } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";

export default function About() {
  return (
    <div className="about-container">

      
      <div className="about-left">
        <h2 className="section-title"> About Me</h2>

        <div className="about-card">
          <p>
            Hi there! I'm <strong>Neha</strong>, a passionate frontend developer
            who believes in the transformative power of technology.
          </p>

          <p>
            What drives me is not just writing code, but solving real-world
            problems through meaningful, creative, and efficient solutions.
            I love how a few lines of code can automate processes, connect people,
            or create experiences that delight users.
          </p>

          <p>
            Beyond coding, I’m an eager learner who enjoys new challenges.  
            Whether debugging at midnight or exploring new tools on weekends,
            I see every obstacle as a chance to grow and improve.
          </p>
        </div>
      </div>

   
      <div className="about-right">
        <h2 className="section-title"> What I'm Passionate About</h2>

        <div className="passion-card">
          <h3><IoEarth /> Web Development</h3>
          <p>Building responsive and modern web applications.</p>
        </div>

        <div className="passion-card">
          <h3>
            <SiJavascript /> <SiReact /> JavaScript & React.js
          </h3>
          <p>Building scalable, component-based applications.</p>
        </div>

        <div className="passion-card">
          <h3><TbApi /> API Integration</h3>
          <p>Connecting applications with powerful backend services.</p>
        </div>

        <div className="passion-card">
          <h3><GiSkills /> Learning New Technologies</h3>
          <p>Always exploring new tech trends and improving my skills.</p>
        </div>

      </div>
    </div>
  );
}
