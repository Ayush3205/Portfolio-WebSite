import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import ResturantMenu from "../../Assets/Projects/ResturantMenu.png";
import FoodOrdering from "../../Assets/Projects/FoodOrdering.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are some projects of Web development.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ResturantMenu}
              title="Restaurant-menu"
              description="Designed and developed a visually engaging restaurant menu page, focusing on an intuitive and user-friendly UI to enhance the customer experience."
              ghLink="https://github.com/Ayush3205/Restaurant-menu"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink=""
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Private Chat"
              description="A Personal Chat Application to share resources and hangout with friends build with react.js, css, and Firebase. Have features which allows user for realtime messaging, image sharing and search user."
              ghLink="#"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>  
        <p>Here are some projects of App development.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={FoodOrdering}
              title="Food-Ordering"
              description="Developed a mobile e-commerce app using Expo, TypeScript, and Supabase, featuring seamless UI/UX, shopping cart, real-time data updates, and backend integration for user authentication and product management."
              ghLink="https://github.com/Ayush3205/Food-Ordering"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink=""
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Private Chat"
              description="A Personal Chat Application to share resources and hangout with friends build with react.js, css, and Firebase. Have features which allows user for realtime messaging, image sharing and search user."
              ghLink="#"
            />
          </Col>
          </Row>
      </Container>
      <ScrollToTop />
    </Container>
    
  );
}



export default Projects;
