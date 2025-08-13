import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "ReactJS",
  "Flask",
  "Django",
  "FastAPI",
  "NodeJS",
  "ExpressJS",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "Prisma",
  "AWS",
];

const labelsSecond = [
  "PyTorch",
  "TensorFlow 2.0",
  "Numpy",
  "Pandas",
  "Supervised and Unsupervised Learning",
  "Clustering Algorithms",
  "Natural Language Processing",
  "Computer Vision",
  "Neural Networks",
  "Transfer Learning",
  "Transformers",
  "Vision Transformer",
  "Hugging Face",
  "LangChain",
];

const labelsThird = [
  "GitHub Actions",
  "Docker",
  "AWS",
  "Azure",
  "Netlify",
  "Linux",
  "CI/CD",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have designed, developed, and deployed full-stack applications
              using scalable backends and modern frontends. I've built
              production-grade apps with REST APIs, authentication, dashboards,
              and cloud integration.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>AI & Data Science</h3>
            <p>
              I build and fine-tune deep learning models for tasks like image
              captioning, tumor detection, and sentiment classification. I work
              with PyTorch, Hugging Face, and GenAI frameworks to deliver
              intelligent solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              I streamline development workflows and manage deployments using
              CI/CD tools and cloud platforms. My experience spans Dockerised
              apps, serverless functions, static hosting, and pipeline
              automation.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
