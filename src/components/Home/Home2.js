// File: src/components/Home/Home2.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" aria-label="About section">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.4em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body" style={{ textAlign: "justify" }}>
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              <br />
              <br />
              I am a computer science engineering student at ESI-SBA driven by curiosity and practical learning. My core competencies include <b className="purple">web development (React / Node.js)</b>, but recently I have been focusing on <b className="purple">embedded systems, real-time IoT</b> and data-driven security solutions.
              <br />
              <br />
              Practically, I build end-to-end systems: from microcontroller firmware and sensor simulation (embedded C/C++ concepts, FreeRTOS ideas, MQTT) to backend services and dashboards that ingest and visualize real-time telemetry. I also participate in ML/IoT competitions and datathons where I apply analysis and detection pipelines to real datasets.
              <br />
              <br />
              I enjoy turning ideas into working prototypes — whether a responsive web app, an IoT monitoring platform, or an experimental detection backend — and publishing them on GitHub to share and iterate.
            </p>

            <div style={{ marginTop: 20 }}>
              <Link to="/project" aria-label="View projects">
                <Button variant="outline-primary" size="lg" style={{ marginRight: 12 }}>
                  View Projects
                </Button>
              </Link>

<Link to="/resume" aria-label="View Resume">
  <Button variant="primary" size="lg">
    View Resume
  </Button>
</Link>
            </div>

            <div style={{ marginTop: 18 }}>
              <small style={{ color: "#cfcbe3" }}>
                Currently: Coursera — <em>Real-Time Embedded Systems</em> (financial aid pending) • Kaggle / Datathon experience
              </small>
            </div>
          </Col>

          <Col md={4} className="myAvtar" aria-hidden="false">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={false}>
              <img
                src={myImg}
                className="img-fluid"
                alt="LEBAILI Mohamed Ouail avatar"
                loading="lazy"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links" style={{ listStyle: "none", padding: 0 }}>
              <li className="social-icons" style={{ display: "inline", marginRight: 10 }}>
                <a
                  href="https://github.com/Waelalg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub size={28} />
                </a>
              </li>

              <li className="social-icons" style={{ display: "inline", marginRight: 10 }}>
                <a
                  href="https://www.linkedin.com/in/ouail-lebaili-263b98229"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn size={26} />
                </a>
              </li>

              <li className="social-icons" style={{ display: "inline", marginRight: 10 }}>
                <a
                  href="https://www.instagram.com/wael_lbl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profile"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram size={28} />
                </a>
              </li>

              <li className="social-icons" style={{ display: "inline", marginRight: 10 }}>
                <a
                  href="mailto:lebailimohamedouail@gmail.com"
                  aria-label="Send email"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail size={28} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
