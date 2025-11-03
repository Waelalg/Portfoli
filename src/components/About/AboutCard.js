"use client"
import Card from "react-bootstrap/Card"
import { ImPointRight } from "react-icons/im"

function AboutCard() {
  return (
    <Card
      className="quote-card-view animate-fade-in-up"
      style={{
        background: "linear-gradient(135deg, rgba(30, 20, 50, 0.3), rgba(50, 30, 80, 0.3))",
        border: "1px solid rgba(192, 132, 245, 0.3)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        transition: "all 0.4s ease",
      }}
    >
      <Card.Body style={{ padding: "2rem" }}>
        <blockquote className="blockquote mb-0">
          <p
            style={{
              textAlign: "justify",
              color: "#d0d0d0",
              lineHeight: "1.8",
              fontSize: "1.05em",
            }}
            className="animate-fade-in-up delay-200"
          >
            Hi Everyone, I am <span className="purple gradient-text">LEBAILI Mohamed Ouail</span> from{" "}
            <span className="purple gradient-text">ALGERIA, Algiers</span>.
            <br />
            <br />I am currently a computer science engineering student at <strong>ESI‑SBA</strong> (Higher School of
            Computer Science, Sidi Bel Abbes).
            <br />
            <br />
            My interests span <b className="gradient-text">full‑stack web development, networking,</b> and increasingly{" "}
            <b className="gradient-text">embedded systems & real‑time IoT</b>. I enjoy designing systems where low‑level
            hardware meets scalable software — from microcontroller firmware and RTOS concepts to cloud‑connected
            services and data pipelines.
            <br />
            <br />
            Recently I have been expanding my skills in{" "}
            <b className="gradient-text">embedded C/C++, FreeRTOS concepts, STM32/Arduino simulation, MQTT,</b> and
            real‑time data processing. I have also worked on projects and competitions like Kaggle challenges and a
            datathon where my team achieved a podium finish.
            <br />
            <br />I am actively pursuing formal training and I apply what I learn to hands‑on projects documented in my
            portfolio.
          </p>

          <ul style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
            <li
              className="about-activity animate-fade-in-left delay-300"
              style={{
                color: "#d0d0d0",
                marginBottom: "0.8rem",
                fontSize: "1.05em",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#c084f5"
                e.currentTarget.style.transform = "translateX(10px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#d0d0d0"
                e.currentTarget.style.transform = "translateX(0)"
              }}
            >
              <ImPointRight style={{ marginRight: "10px", color: "#c084f5" }} /> Building Real‑Time & IoT prototypes
            </li>
            <li
              className="about-activity animate-fade-in-left delay-400"
              style={{
                color: "#d0d0d0",
                marginBottom: "0.8rem",
                fontSize: "1.05em",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#c084f5"
                e.currentTarget.style.transform = "translateX(10px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#d0d0d0"
                e.currentTarget.style.transform = "translateX(0)"
              }}
            >
              <ImPointRight style={{ marginRight: "10px", color: "#c084f5" }} /> Contributing to Open‑Source & Web Apps
            </li>
            <li
              className="about-activity animate-fade-in-left delay-500"
              style={{
                color: "#d0d0d0",
                marginBottom: "0.8rem",
                fontSize: "1.05em",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#c084f5"
                e.currentTarget.style.transform = "translateX(10px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#d0d0d0"
                e.currentTarget.style.transform = "translateX(0)"
              }}
            >
              <ImPointRight style={{ marginRight: "10px", color: "#c084f5" }} /> Participating in Datathons & ML
              Challenges
            </li>
          </ul>

          <p
            style={{
              color: "rgb(155 126 172)",
              fontSize: "1.1em",
              fontStyle: "italic",
              marginTop: "1.5rem",
              animation: "fadeInUp 0.7s ease-out 0.6s backwards",
            }}
          >
            "Strive to build things that make a difference!"
          </p>
          <footer
            className="blockquote-footer"
            style={{
              color: "rgba(192, 132, 245, 0.7)",
              fontSize: "1em",
              marginTop: "1rem",
              animation: "fadeInUp 0.7s ease-out 0.7s backwards",
            }}
          >
            W43L_LBL
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
