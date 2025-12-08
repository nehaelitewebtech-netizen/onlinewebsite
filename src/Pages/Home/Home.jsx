import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

import Profile from "../../assets/Profile.jpeg";
import resume from "../../assets/neharesume.pdf";

export default function Home() {
  return (
    <div className="home-container">
      <Header />

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

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
