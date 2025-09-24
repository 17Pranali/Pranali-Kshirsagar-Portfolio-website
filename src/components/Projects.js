import React from "react";
import projectsData from "../data/projectsData";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>

            {/* 👉 GitHub button here */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
