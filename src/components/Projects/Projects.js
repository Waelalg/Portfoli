import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import promptopia from "../../Assets/Projects/promptopia.png";
import magflow from "../../Assets/Projects/magflow.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Realtime Chat-app"
              description="This real-time chat web app, built with the MERN stack (MongoDB, Express.js, React.js, Node.js), offers users a responsive and engaging messaging experience. Featuring instant messaging and user authentication, the app allows secure, seamless communication through WebSocket connections. MongoDB is used for efficient data storage and retrieval, managing messages and user information. The React.js front-end ensures a user-friendly interface, adaptable for both desktop and mobile devices, while the Express.js and Node.js backend enables smooth real-time updates. This project highlights my proficiency in full-stack development, focusing on real-time functionalities and scalable database management within the MERN ecosystem."
              ghLink="https://github.com/Waelalg/Real_time_chat_application"
              demoLink="https://real-time-chat-application-prod.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={promptopia}
              isBlog={false}
              title="Promptopia"
              description="This project is a dynamic, user-friendly web app designed to facilitate the sharing of AI-powered prompts. Built with Next.js and utilizing Server Actions for enhanced interactivity, it provides users with a smooth experience in discovering, sharing, and engaging with prompts. The platform integrates Google Authentication to streamline user access and ensure secure sign-in, making it easier for users to create personalized profiles, share their unique prompts, and explore a feed of posts filtered by tags or usernames."
              ghLink="https://github.com/Waelalg/Promptopia"
              demoLink="https://promptopia-waelalgs-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={magflow}
              isBlog={false}
              title="Mag_Flow"
              description="MagFlow is a robust, all-in-one web and mobile platform developed to streamline store management processes for the Higher School of Computer Science Sidi Bel Abbes. Designed to enhance operational efficiency, MagFlow enables seamless inventory tracking, order management, and sales monitoring. With a user-friendly interface and responsive design, the system is accessible across devices, allowing for real-time updates and easy accessibility for store personnel and managers. Developed as part of the multidisciplinary project Arcana, MagFlow focuses on improving organizational workflow and supporting the institution's need for an efficient, tech-driven solution in store management.

"
              ghLink="https://github.com/1CS-Project-ESI/Magflow-backend"            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
