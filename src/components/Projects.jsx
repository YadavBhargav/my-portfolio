// src/components/Projects.js
import React from "react";
import "./css/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project">
        <h3>Project One</h3>
        <p>A web application built using React and Node.js.</p>
      </div>
      <div className="project">
        <h3>Project Two</h3>
        <p>Another amazing project involving MongoDB and Express.js.</p>
      </div>
    </section>
  );
};

export default Projects;
