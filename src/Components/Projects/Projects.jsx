import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import port from "../../assets/port.jpg";
import revive from "../../assets/revive.jpg";
import job from "../../assets/job.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built using React.js with animations, responsive UI, and smooth transitions.",
      tech: ["Reactjs", "CSS"],
      image: port,
      github: "https://github.com/nehaelitewebtech-netizen/onlinewebsite",
    },

    {
      title: "Retro Revive",
      description:
        "A retro fashion e-commerce platform featuring product listings, filters, and cart functionality.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: revive,
      github: "#",
    },

    {
      title: "Job Portal",
      description:
        "A job portal offering recruitment, job listings, and user authentication features.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: job,
      github: "https://github.com/nehaelitewebtech-netizen/job-portal",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="section-heading">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            
            <div className="project-img">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} className="btn btn-github">
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
