import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import "../assets/styles/Main.scss";
import profImage from "../assets/images/Siddharth_Nair_Photo_Passport.jpg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="profile-section">
          <div
            className="profile-picture-background"
            style={{ backgroundImage: `url(${profImage})` }}
          />
          <a
            href="https://1drv.ms/b/c/4b0563196aec63c9/IQCfHdamiFKKToBxrmXcK1u0AS3HCKvv7ynWd8bj_SM2oRA?e=4z2Usc"
            target="_blank"
            rel="noreferrer"
            className="download-btn"
          >
            <DownloadIcon style={{ marginRight: "8px" }} />
            Get Resume
          </a>
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/sidsuresh/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/siddharth-suresh-nair-a664b521a/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:sidsuresh@hotmail.com"
              target="_blank"
              rel="noreferrer"
              title="Send me an email"
            >
              <EmailIcon />
            </a>
          </div>
          <h1>Siddharth Suresh Nair</h1>

          <p className="title">Data Scientist | Ex - Software Developer</p>

          <p className="description">
            A data science and innovation masters student and an ex-full stack
            software developer looking to join the workforce to gain real-world
            experience with experiences in the field of Software Engineering,
            Machine Learning, AI and Data Science. Dependable and reliable,
            ready to learn and grow with your company
          </p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/sidsuresh/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/siddharth-suresh-nair-a664b521a/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:sidsuresh@hotmail.com"
              target="_blank"
              rel="noreferrer"
              title="Send me an email"
            >
              <EmailIcon />
            </a>
          </div>
          <div className="mobile-btn">
            <a
              href="https://1drv.ms/b/c/4b0563196aec63c9/IQCfHdamiFKKToBxrmXcK1u0AS3HCKvv7ynWd8bj_SM2oRA?e=4z2Usc"
              target="_blank"
              rel="noreferrer"
              className="mobile-download-btn"
            >
              <DownloadIcon style={{ marginRight: "8px" }} />
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
