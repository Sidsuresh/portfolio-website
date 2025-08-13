import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
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
    </footer>
  );
}

export default Footer;
