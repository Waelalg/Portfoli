"use client"

import { useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import myImg from "../../Assets/avatar.svg"
import Tilt from "react-parallax-tilt"
import { Link } from "react-router-dom"
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

function Home2() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <Container fluid className="home-about-section scroll-reveal" id="about" aria-label="About section">
      <Container>
        <Row>
          <Col md={8} className="home-about-description animate-fade-in-left">
            <h1 style={{ fontSize: "2.4em" }} className="animate-fade-in-down">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p
              className="home-about-body"
              style={{
                textAlign: "justify",
                animation: "fadeInUp 0.8s ease-out 0.3s backwards",
              }}
            >
              I fell in love with programming and I have at least learnt something, I think…
              <br />
              <br />I am a computer science engineering student at ESI-SBA driven by curiosity and practical learning.
              My core competencies include <b className="purple">web development (React / Node.js)</b>, but recently I
              have been focusing on <b className="purple">embedded systems, real-time IoT</b> and data-driven security
              solutions.
              <br />
              <br />
              Practically, I build end-to-end systems: from microcontroller firmware and sensor simulation (embedded
              C/C++ concepts, FreeRTOS ideas, MQTT) to backend services and dashboards that ingest and visualize
              real-time telemetry. I also participate in ML/IoT competitions and datathons where I apply analysis and
              detection pipelines to real datasets.
              <br />
              <br />I enjoy turning ideas into working prototypes — whether a responsive web app, an IoT monitoring
              platform, or an experimental detection backend — and publishing them on GitHub to share and iterate.
            </p>

            <div style={{ marginTop: 20, animation: "fadeInUp 0.8s ease-out 0.5s backwards" }}>
              <Link to="/project" aria-label="View projects">
                <Button
                  variant="outline-primary"
                  size="lg"
                  style={{
                    marginRight: 12,
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)"
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(192, 132, 245, 0.3)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  View Projects
                </Button>
              </Link>

              <Link to="/resume" aria-label="View Resume">
                <Button
                  variant="primary"
                  size="lg"
                  style={{
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)"
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(147, 76, 206, 0.4)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  View Resume
                </Button>
              </Link>
            </div>

            <div style={{ marginTop: 18, animation: "fadeInUp 0.8s ease-out 0.6s backwards" }}>
              <small style={{ color: "#cfcbe3" }}>
                Currently: Coursera — <em>Real-Time Embedded Systems</em> (financial aid pending) • Kaggle / Datathon
                experience
              </small>
            </div>
          </Col>

          <Col md={4} className="myAvtar animate-fade-in-right" aria-hidden="false">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={false}>
              <img
                src={myImg || "/placeholder.svg"}
                className="img-fluid animate-float"
                alt="LEBAILI Mohamed Ouail avatar"
                loading="lazy"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social animate-fade-in-up delay-300">
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
                  className="icon-colour home-social-icons transition-all-smooth"
                  style={{
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15) translateY(-5px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)"
                  }}
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
                  className="icon-colour home-social-icons transition-all-smooth"
                  style={{
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15) translateY(-5px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)"
                  }}
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
                  className="icon-colour home-social-icons transition-all-smooth"
                  style={{
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15) translateY(-5px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)"
                  }}
                >
                  <AiFillInstagram size={28} />
                </a>
              </li>

              <li className="social-icons" style={{ display: "inline", marginRight: 10 }}>
                <a
                  href="mailto:lebailimohamedouail@gmail.com"
                  aria-label="Send email"
                  className="icon-colour home-social-icons transition-all-smooth"
                  style={{
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15) translateY(-5px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)"
                  }}
                >
                  <AiOutlineMail size={28} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Home2
