import React from "react";
import ml_certificate from "../assets/images/ml_certificate.png";
import ba_certificate from "../assets/images/ba_certificate.png";
import "../assets/styles/Project.scss";

function Certificates() {
  return (
    <div className="projects-container" id="certificates">
      <h1>Certifications</h1>
      <div className="projects-grid">
        <div className="project">
          <img
            src={ba_certificate}
            className="zoom"
            alt="thumbnail"
            width="100%"
          />

          <h2>British Airways - Data Science Virtual Internship</h2>

          <p>
            <ul>
              <li>
                Performed web scraping, data cleaning and sentiment analysis
                using BERT Transformer.
              </li>
              <li>
                Creating a Random Forest Classification model with
                hyperparameter tuning for booking predictions.
              </li>
            </ul>
          </p>
        </div>
        <div className="project">
          <img
            src={ml_certificate}
            className="zoom"
            alt="thumbnail"
            width="100%"
          />
          <h2>Coursera - Stanford University: Machine Learning</h2>

          <p>
            <ul>
              <li>
                Gained theoretical as well as practical knowledge regarding
                various supervised, unsupervised learning methods and neural
                networks.
              </li>
              <li>Grade: 97.64%</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
