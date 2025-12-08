import React from "react";
import "./About.css";

import { IoEarth } from "react-icons/io5"; 
import { SiJavascript, SiReact } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import Footer from "../../Components/Footer/Footer";

export default function About() {

  const education = [
    {
      title: "Master of Computer Applications (MCA)",
      description:
        "Completed from AMITY UNIVERSITY. Studied Web Development, DBMS, OS, and Software Engineering.",
      year: "2023 - 2025",
    },
    {
      title: "Bachelor of Science in Information Technology (BSC-IT)",
      description:
        "Completed from PUNJAB UNIVERSITY. Studied Programming, C, C++, and Fundamentals of Computers.",
      year: "2020 - 2023",
    },
    {
      title: "PGDCA (Post Graduate Diploma in Computer Application)",
      description: "Completed from Punjab UNIVERSITY.",
      year: "2019 - 2020",
    },
  ];

  return (
    <div className="about-container">

     
      <section className="about-me">
        <h2 className="section-title"> About Me</h2>
        <div className="about-card">
          <p>
            Hi there! I'm <strong>Neha</strong>, a passionate frontend developer
            who believes in the transformative power of technology.
          </p>
          <p>
            What drives me is not just writing code, but solving real-world
            problems through meaningful, creative, and efficient solutions.
          </p>
          <p>
            Beyond coding, I’m an eager learner who enjoys new challenges.
          </p>
        </div>
      </section>

     
      <section className="passions">
        <h2 className="section-title"> What I'm Passionate About</h2>

        <div className="passion-card">
          <h3><IoEarth /> Web Development</h3>
          <p>Building responsive and modern web applications.</p>
        </div>

        <div className="passion-card">
          <h3><SiJavascript /> <SiReact /> JavaScript & React.js</h3>
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
      </section>

     
      <section className="education">
        <h2 className="section-title"> Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3>{edu.title}</h3>
              <span className="edu-year">{edu.year}</span>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}
