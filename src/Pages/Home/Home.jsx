import React, { useRef } from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

import Profile from "../../assets/new.jpeg";
import resume from "../../assets/neharesume.pdf";

import About from "../../Components/About/About"; 
import Projects from "../../Components/Projects/Projects"
import Skills from "../../Components/Skills/Skills"
import Certifications from "../../Components/Certifications/Certifications"
import Contact from "../../Components/Contact/Contact"



export default function Home() {
  const aboutRef = useRef(null); 
  const projectsRef = useRef(null);
  const SkillRef = useRef(null);
   const CertificationsRef = useRef(null);
 const contactRef = useRef(null);

  const scrollToabout  = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToproject  = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

   const scrollToSkills  = () => {
    SkillRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCertifications  = () => {
    CertificationsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact  = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="home-container">
        <Header onaboutClick ={scrollToabout}
        onprojectClick={scrollToproject}  onSkillClick={scrollToSkills} onCertificationsClick={scrollToCertifications} onContactClick={scrollToContact} />  
        

    
        <section className="hero-section">
          <div className="hero-img-wrapper">
            <img src={Profile} alt="Profile" className="hero-img" />
          </div>

          <h1 className="hero-title">
            I'm <span className="gradient-text">Neha</span>, frontend developer.
          </h1>

          <p className="hero-description">
            A frontend developer who blends clean code with beautiful design.
            I build pixel-perfect interfaces and smooth user experiences using
            React and modern web technologies.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="hero-btn gradient-btn">
              Connect With Me
            </Link>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn outline-btn"
            >
              My Resume
            </a>
          </div>
        </section>

      
        <section ref={aboutRef}>
          <About />
        </section>


        <section ref={projectsRef}>
  <Projects />
</section>

<section ref={SkillRef}>
  <Skills />
</section>


<section ref={CertificationsRef}>
  <Certifications />
</section>


<section ref={contactRef}>
  <Contact />
</section>




      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
