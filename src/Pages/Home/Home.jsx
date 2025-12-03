import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <div className="home-container">
       <Header />
      <section className="hero-section">
        <div className="hero-img-wrapper">
          <img src="/profile.jpg" alt="Profile" className="hero-img" />
        </div>
        <h1 className="hero-title">
          I'm <span className="gradient-text">Neha</span>, frontend developer.
        </h1>
        <p className="hero-description">
          A frontend developer who blends clean code with beautiful design.  
I build pixel-perfect interfaces and smooth user experiences using React and modern web technologies.

        </p>
        <div className="hero-buttons">
          <button className="hero-btn gradient-btn">Connect with me</button>
          <button className="hero-btn outline-btn">My resume</button>
        </div>
      </section>
      <div className="footer">
    <Footer/></div>
    </div>
    
  );
}
