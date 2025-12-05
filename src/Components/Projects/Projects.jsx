import React from "react";
import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built using React.js showcasing skills, projects, and contact.",
      tech: ["React", "CSS"],
      live: "https://your-portfolio-link.com",
      github: "#",
    },

    {
      title: "Retro Revive",
      description:
        "E-commerce website specializing in retro clothes and accessories for women.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      live: "#",
      github: "#",
    },

    {
      title: "Job Portal",
      description:
        "A job portal providing job listings for employees and candidates.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      live: "#",
      github: "#",
    },
  ];

  
  const education = [
    {
      title: "Master of Computer Applications (MCA)",
      description:
        "Completed from AMITY UNIVERSITY. Studied Web Development, DBMS, OS, and Software Engineering.",
      tech: ["2023 - 2025"],
    },

    {
      title: "Bachelor of Science in Information Technology (BSC-IT)",
      description:
        "Completed from PUNJAB UNIVERSITY. Studied Programming language, c, c++, and Fundamental of computers.",
      tech: ["2020 - 2023"],
    },

    {
      title: "PGDCA (Post Graduate Diploma in Computer Application)",
      description:
        "Completed from Punjab UNIVERSITY.",
      tech: ["2019 - 2020"],
    },
  ];

  return (
    <div className="projects-container">

    
      <h2 className="section-heading">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live Demo <FaExternalLinkAlt className="icon" />
              </a>

              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub <FaGithub className="icon" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-heading" style={{ marginTop: "60px" }}>
        My Education
      </h2>

      <div className="projects-grid">
        {education.map((edu, index) => (
          <div className="project-card" key={index}>
            <h3>{edu.title}</h3>
            <p>{edu.description}</p>

            <div className="tech-stack">
              {edu.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              <span className="no-links">Education</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
