import React from "react";
import mock01 from "../assets/images/mock01.png";

import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://csrworldwise.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://csrworldwise.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>WorldWise</h2>
          </a>
          <p>
            WorldWise is a front-end web application built with React that
            allows users to explore different cities and countries around the
            world. It provides a comprehensive set of features for browsing,
            adding, and managing cities, as well as viewing detailed information
            about each city.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
