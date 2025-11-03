"use client"

import { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { AiFillGithub, AiFillInstagram } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  useEffect(() => {
    const footer = document.querySelector(".footer")
    if (footer) {
      footer.classList.add("animate-fade-in-up")
    }
  }, [])

  return (
    <Container
      fluid
      className="footer animate-fade-in-up"
      style={{
        background: "linear-gradient(to right, rgba(27, 26, 46, 0.8), rgba(40, 30, 60, 0.8))",
        borderTop: "1px solid rgba(192, 132, 245, 0.3)",
        transition: "all 0.5s ease",
      }}
    >
      <Row>
        <Col md="4" className="footer-copywright">
          <h3
            style={{
              animation: "fadeInLeft 0.8s ease-out 0.2s backwards",
              color: "white",
            }}
          >
            Designed and Developed by <span className="gradient-text">LEBAILI Mohamed Ouail</span>
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3
            style={{
              animation: "fadeInUp 0.8s ease-out 0.3s backwards",
              color: "white",
            }}
          >
            Copyright © {year} <span className="purple">LBL</span>
          </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons" style={{ animation: "fadeInRight 0.8s ease-out 0.4s backwards" }}>
            <li className="social-icons">
              <a
                href="https://github.com/Waelalg"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all-smooth"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2) rotate(10deg)"
                  e.currentTarget.style.color = "#c084f5"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0deg)"
                  e.currentTarget.style.color = "white"
                }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/wael-lebaili-263b98229/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all-smooth"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2) rotate(10deg)"
                  e.currentTarget.style.color = "#c084f5"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0deg)"
                  e.currentTarget.style.color = "white"
                }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/wael_lbl/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all-smooth"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2) rotate(10deg)"
                  e.currentTarget.style.color = "#c084f5"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0deg)"
                  e.currentTarget.style.color = "white"
                }}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
