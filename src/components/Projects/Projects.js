// File: src/components/Projects/Projects.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// existing images you already had in Assets (kept)
import chatify from "../../Assets/Projects/chatify.png";
import promptopia from "../../Assets/Projects/promptopia.png";
import magflow from "../../Assets/Projects/magflow.png";
import rotisseur from "../../Assets/Projects/Les_freres_rotisseurs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. (Placeholders shown for projects without images — you can add screenshots later.)
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Real-time Chat App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Realtime Chat App"
              description="Realtime chat web app built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Implements WebSocket-based messaging, user authentication and responsive UI. Highlights my full-stack and real-time engineering skills."
              ghLink="https://github.com/Waelalg/Real_time_chat_application"
              demoLink="https://real-time-chat-application-prod.onrender.com/"
            />
          </Col>

          {/* Promptopia */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={promptopia}
              isBlog={false}
              title="Promptopia"
              description="A Next.js app for sharing and discovering AI-powered prompts. Features Server Actions, Google Authentication, searchable feed and profile editing. Demonstrates modern React patterns and auth integration."
              ghLink="https://github.com/Waelalg/Promptopia"
              demoLink="https://promptopia-waelalgs-projects.vercel.app/"
            />
          </Col>

          {/* MagFlow Backend */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={magflow}
              isBlog={false}
              title="MagFlow (Backend)"
              description="Backend services for MagFlow — inventory & store management system for Higher School of Computer Science. Includes REST APIs, database design, and real-time update logic used by the MagFlow platform."
              ghLink="https://github.com/1CS-Project-ESI/Magflow-backend"
            />
          </Col>

          {/* Les Frères Rôtisseurs */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rotisseur}
              isBlog={false}
              title="Les Frères Rôtisseurs"
              description="Responsive web app for a food business with an interactive weekly planning system and dynamic menu UI. Built with React and focused on UX and responsive design."
              ghLink="https://github.com/Waelalg/les_freres_rotisseurs"
              demoLink="https://les-freres-rotisseurs.vercel.app/"
            />
          </Col>

          {/* Attack Detection Dashboard (no image yet - placeholder) */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Attack Detection Dashboard"
              description="Dashboard + backend for visualizing and detecting network/IoT attacks in real time. Includes data ingestion, visualization panels, and alerting logic. Useful for security analysis and incident response demos."
              ghLink="https://github.com/Waelalg/attack_detection_dashboard"
            />
          </Col>

          {/* Attendance App (no image yet - placeholder) */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Attendance App"
              description="Full-stack attendance management system with role-based access (admin/teacher/student). Designed to support features such as attendance tracking, reports, and integrations. Implemented using React and a Node/Express backend."
              ghLink="https://github.com/Waelalg/attendance-app"
            />
          </Col>

          {/* IoT Fleet Management Tracking (no image yet - placeholder) */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="IoT Fleet Management & Tracking"
              description="End-to-end IoT fleet tracking system (device simulation, backend APIs, frontend dashboard). Focused on real-time location updates, telemetry and fleet status monitoring."
              ghLink="https://github.com/Waelalg/IoT-Fleet-Management-Tracking"
            />
          </Col>

          {/* Industrial IoT Machine Monitoring (no image yet - placeholder) */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Industrial IoT Machine Monitoring"
              description="Industrial IoT project for machine monitoring and basic control. Uses sensors (simulated or real), MQTT/REST communications and a dashboard for operational metrics and alerts."
              ghLink="https://github.com/Waelalg/Industrial-IoT-Machine-Monitoring-Control-System"
            />
          </Col>

          {/* MERN Movie Recommendation (no image yet - placeholder) */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="MERN Movie Recommendation"
              description="A movie recommendation platform built with the MERN stack. Implements recommendation algorithms, user profiles and searchable movie catalogs — a precursor to a full recommender system."
              ghLink="https://github.com/Waelalg/MERN-Movie-Recommendation"
            />
          </Col>

          {/* Botnet Attack Detect Backend (no image yet - placeholder) */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Botnet Attack Detection (Backend)"
              description="Backend for detecting botnet-like behavior and attacks against IoT devices. Contains data collection, preprocessing, and detection logic (rules or ML pipeline) for classifying suspicious activity."
              ghLink="https://github.com/Waelalg/botnet_attack_detect_backend"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
