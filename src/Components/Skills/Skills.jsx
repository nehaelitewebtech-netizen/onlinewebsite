import React from "react";
import "./Skills.css";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiReact,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiC,
  SiGithub,
 

  
  SiPostman,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { icon: <SiHtml5 />, name: "HTML5" },
        { icon: <SiCss3 />, name: "CSS3" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiPython />, name: "Python" },
        { icon: <SiC />, name: "C" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { icon: <SiReact />, name: "React" },
        { icon: <SiBootstrap />, name: "Bootstrap" },
      ],
    },

    {
      title: "Databases",
      skills: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
      ],
    },

    {
      title: "Tools",
      skills: [
        { icon: <SiGithub />, name: "GitHub" },
       
       
        { icon: <SiPostman />, name: "Postman" },
    
      ],
    },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>

      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category.title}</h3>

          <div className="skills-grid">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
