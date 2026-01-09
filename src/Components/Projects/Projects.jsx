import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built using React.js with animations, responsive UI, and smooth transitions.",
      tech: ["Reactjs", "CSS"],
      github: "https://github.com/nehaelitewebtech-netizen/onlinewebsite",
    },

    

    {
      title: "Retro Revive",
      description:
        "A retro fashion e-commerce platform featuring product listings, filters, and cart functionality.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "#",
    },

    {
      title: "Job Portal",
      description:
        "A job portal offering recruitment, job listings, and user authentication features.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/nehaelitewebtech-netizen/job-portal",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="section-heading">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  className="btn btn-github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
