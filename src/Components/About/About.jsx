import React from "react";
import "./About.css";

import { IoEarth } from "react-icons/io5";
import { SiJavascript, SiReact } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";

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
        "Completed from PANJAB UNIVERSITY. Studied Programming, C, C++, and Fundamentals of Computers.",
      year: "2020 - 2023",
    },
    {
      title: "PGDCA (Post Graduate Diploma in Computer Application)",
      description: "Completed from PANJAB UNIVERSITY.",
      year: "2019 - 2020",
    },
  ];

  const experience = [
    {
      title: "Frontend Developer Intern",
      company: "Elite Web Technologies",
      description:
        "Currently working on React.js projects, building responsive interfaces and integrating APIs.",
      year: "2025 - Present",
    },
    {
      title: "Frontend Developer Intern",
      company: "Uptalent Platform for Global Services",
      description:
        "Worked on HTML, CSS, JavaScript, and Bootstrap projects while building responsive and user-friendly interfaces.",
      year: "2024",
    },
  ];

  return (
    <div className="about-container">
    
      <section className="about-me">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <p>
            Hi, I'm <strong>Neha</strong>, a dedicated frontend developer with a
            strong passion for creating visually appealing, interactive, and
            user-focused web applications. I enjoy transforming ideas into
            functional digital experiences through clean and efficient code.
          </p>
          <p>
            I believe that frontend development is not just about designing
            interfaces, but also about improving usability, performance, and
            accessibility so users can have smooth and enjoyable interactions.
          </p>
          <p>
            I continuously strive to learn new technologies, take on challenges,
            and improve my skills to grow as a developer and deliver better
            solutions.
          </p>
        </div>
      </section>

      <section className="experience">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3>{exp.title}</h3>
              <span className="exp-company">{exp.company}</span>
              <span className="exp-year">{exp.year}</span>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

  
      <section className="passions">
        <h2 className="section-title">What I'm Passionate About</h2>

        <div className="passion-card">
          <h3><IoEarth /> Web Development</h3>
          <p>
            Web development is the foundation of my career and something I truly
            enjoy working on every day. I love creating responsive and modern
            websites that adapt seamlessly across different screen sizes and
            devices. My focus is always on building layouts that are clean,
            intuitive, and visually engaging while maintaining strong
            performance.
          </p>
       
        </div>

        <div className="passion-card">
          <h3><SiJavascript /> <SiReact /> JavaScript & React.js</h3>
          <p>
            JavaScript and React.js are powerful tools that allow me to create
            interactive, dynamic, and data-driven web applications. I enjoy
            breaking complex interfaces into reusable components and managing
            application state efficiently.
          </p>
          
        </div>

        <div className="passion-card">
          <h3><TbApi /> API Integration</h3>
          <p>
            API integration plays a crucial role in modern web applications, and
            I enjoy connecting frontend interfaces with backend services to
            create complete and functional systems. Fetching and handling real
            data makes applications more dynamic and useful.
          </p>
        
        </div>

        <div className="passion-card">
          <h3><GiSkills /> Learning New Technologies</h3>
          <p>
            Technology evolves constantly, and I am passionate about continuous
            learning. I enjoy exploring new frameworks, libraries, and tools
            that help improve development efficiency and application quality.
          </p>
          
        </div>
      </section>

    
      <section className="education">
        <h2 className="section-title">Education</h2>
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
    </div>
  );
}
