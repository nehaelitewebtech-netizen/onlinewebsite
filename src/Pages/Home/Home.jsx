import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from "react-icons/fa";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
    <div className="home-page-wrapper">
      <Header />
      

      <div className="home-section-wrapper">

       
        <section className="home-section">
          <div className="hero-container">

           
            <div className="hero-left">
              <h1 className="hero-title">
                Frontend Developer <span></span>
              </h1>
             
              <p className="hero-description">
                Frontend developer crafting clean, modern interfaces with a focus on user experience, performance, and responsive design.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn-primary">
                  View Projects <FaArrowRight />
                </a>
                <a href="#contact" className="btn-secondary">Contact Me</a>
              </div>

              <div className="social-links">
                <a href="#"><FaGithub /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaTwitter /></a>
              </div>
            </div>

           
            <div className="hero-right">
              <img src="/profile.png" alt="Neha" className="profile-img" />
            </div>

          </div>
        </section>

        
        <section className="about-section">
          <p>
            I am a passionate web developer focused on creating responsive,
            user-friendly, and visually appealing websites. My goal is to build
            meaningful digital products that make an impact.
          </p>
        </section>

        
        <section className="skills-grid">
          <div className="skill-card">
            <h3>React JS</h3>
            <p>Building dynamic and interactive interfaces.</p>
          </div>
          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Modern, responsive, and clean UI layouts.</p>
          </div>
          <div className="skill-card">
            <h3>CSS</h3>
            <p>Well-structured, responsive designs.</p>
          </div>
          <div className="skill-card">
            <h3>HTML</h3>
            <p>The core foundation of the web.</p>
          </div>
          <div className="skill-card">
            <h3>Java</h3>
            <p>Strongly typed code for better scalability.</p>
          </div>
          <div className="skill-card">
            <h3>Bootstrap</h3>
            <p>Version control and collaboration on projects.</p>
          </div>
          <div className="skill-card">
            <h3>Responsive Design</h3>
            <p>Layouts that look great on any device.</p>
          </div>
          <div className="skill-card">
            <h3>API Integration</h3>
            <p>Fetching and handling data from APIs efficiently.</p>
          </div>
        </section>

      </div>
      
    </div>
    <div className="footer">
    <Footer/></div>
    </div>
  );
};

export default Home;
