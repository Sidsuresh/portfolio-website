import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="12/2022 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Casual Technical Writer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Deloitte Sydney
            </h4>
            <p>
              <i>
                <u>
                  Global Investment and Innovation Incentives (Gi3) || Tax &
                  Legal
                </u>
              </i>
              <ul>
                <li>
                  Analyse intricate project data and technical outputs to derive
                  key insights, identify patterns, and translate complex
                  analytical findings into clear, concise, actionable reports
                  tailored to diverse business client requirements.
                </li>
                <li>
                  Create structured analysis deliverables that effectively
                  support clients' innovation initiatives, strategic investment
                  decisions, and project execution goals by providing
                  data-backed recommendations and interpretations.
                </li>
                <li>
                  Streamline the documentation process for technical projects
                  within tight deadlines, ensuring compliance with internal
                  standards and quality guidelines while managing multiple
                  deliverables.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="11/2023 - 7/2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Software Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              sliQue Robotics, India
            </h4>

            <p>
              <i>
                <u>
                  Fleet Management System - ReactJS / Flask / PostGreSQL / AWS /
                  PowerBI
                </u>
              </i>
              <ul>
                <li>
                  Built and developed the sub-user sign-up and robot modules,
                  making it easier for owners and administrators to create
                  accounts and assign access to specific robots for their
                  subordinates.
                </li>
                <li>
                  Established information access based on user access-levels
                  throughout the platform, prioritizing and ensuring security
                  and confidentiality of information.
                </li>
                <li>
                  Designed and developed the back-end architecture for the
                  application using Flask.
                </li>
                <li>
                  Point Person managing conversion from NoSQL to SQL Databases -
                  responsible for Database Structure Design, Minimizing
                  redundancies as well as overseeing the migration of the
                  Database.
                </li>
                <li>
                  Regular Deployments and Maintenance of the application and
                  database to the EC2 instance.
                </li>
                <li>
                  Developed and maintained interactive Power BI dashboards to
                  provide actionable insights and summaries of each robot.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="5/2022 – 7/2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Development Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">IO21, Dubai</h4>
            <p>
              <i>
                <u>E-Commerce Platform - Django / SQLLite</u>
              </i>
              <ul>
                <li>
                  Designed and built the About Us and Contact Pages, creating
                  visually appealing and informative sections for the website.
                </li>
                <li>
                  Redesigned and developed the Products and Log-In Pages,
                  incorporating user-centric features that improved the overall
                  user experience.
                </li>
                <li>
                  Ensured successful routing as well as cross-platform
                  compatibility, making the website accessible and user-friendly
                  across various devices.
                </li>
              </ul>
            </p>
            <p>
              <i>
                <u>E-Commerce Platform – NodeJS / ExpressJS / MongoDB</u>
              </i>
              <ul>
                <li>
                  Designed the Header, Footer, Landing, and Product Search
                  Pages, prioritizing an engaging user interface and cohesive
                  website aesthetics.
                </li>
                <li>
                  Developed essential modules including Mini Cart, Checkout, and
                  List Items functionalities, integrating them with the database
                  for streamlined data management.
                </li>
                <li>
                  Ensured optimal user experience by implementing accurate
                  webpage routing, contributing significantly to improved site
                  performance.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
