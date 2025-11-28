import React from "react";
import "./Home.css";

function Home() {
    console.log("home page");
    
  return (
    <div className="home">
      <div className="home-box">

        <div className="home-text">
          <h1>Hello, I'm <span>Neha</span></h1>
          <h2>Frontend Developer</h2>

          <p>
            I am a passionate web developer who enjoys building clean and
            simple websites using React JS.
          </p>

          <div className="buttons">
            <a href="/YourCV.pdf" className="btn">Download CV</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
            
          </div>
        </div>

        <div className="home-image">
          
        </div>

      </div>
    </div>
  );
}

export default Home;
