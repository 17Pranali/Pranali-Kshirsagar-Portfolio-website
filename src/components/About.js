import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-summary">
          Fresh talent alert! I’m <span className="highlight">Pranali Kshirsagar</span>, a Computer Science graduate and Full Stack Developer trained at Capgemini. I turn creative ideas into functional software solutions with expertise in Java, Spring Boot, React, Flutter, and .NET. Passionate, innovative, and ready to bring fresh perspectives to the tech world.
        </p>

        <div className="about-stats">
  <div className="stat-card">
    <span className="stat-number">20+</span>
    <span className="stat-text">Projects Completed</span>
  </div>
  <div className="stat-card">
    <span className="stat-number">10+</span>
    <span className="stat-text">Happy Clients</span>
  </div>
  <div className="stat-card">
    <span className="stat-number">5+</span>
    <span className="stat-text">Hackathon / Ideation Participation</span>
  </div>
  <div className="stat-card">
    <span className="stat-number">8+</span>
    <span className="stat-text">Events Organized</span>
  </div>
</div>


        <a href="#contact" className="btn-primary about-btn">Contact Me</a>
      </div>
    </section>
  );
}

export default About;
