import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
return (
<Card className="quote-card-view">
<Card.Body>
<blockquote className="blockquote mb-0">
<p style={{ textAlign: "justify" }}>
Hi Everyone, I am <span className="purple">LEBAILI Mohamed Ouail</span> from <span className="purple">ALGERIA, Algiers</span>.
<br />
I am currently a computer science engineering student at ESI‑SBA (Higher School of Computer Science, Sidi Bel Abbes).
<br />
My interests span full‑stack web development, networking, and increasingly <b className="purple">embedded systems & real‑time IoT</b>. I enjoy designing systems where low‑level hardware meets scalable software — from microcontroller firmware and RTOS concepts to cloud‑connected services and data pipelines.
<br />
Recently I have been expanding my skills in <b className="purple">embedded C/C++, FreeRTOS concepts, STM32/Arduino simulation, MQTT,</b> and real‑time data processing. I have also worked on projects and competitions like Kaggle challenges and a datathon where my team achieved a podium finish.
<br />
I am actively pursuing formal training (Coursera: Real‑Time Embedded Systems — financial aid pending) and I apply what I learn to hands‑on projects documented in my portfolio.
</p>


<ul>
<li className="about-activity">
<ImPointRight /> Building Real‑Time & IoT prototypes
</li>
<li className="about-activity">
<ImPointRight /> Contributing to Open‑Source & Web Apps
</li>
<li className="about-activity">
<ImPointRight /> Participating in Datathons & ML Challenges
</li>
</ul>


<p style={{ color: "rgb(155 126 172)" }}>
"Strive to build things that make a difference!"
</p>
<footer className="blockquote-footer">W43L_LBL</footer>
</blockquote>
</Card.Body>
</Card>
);
}


export default AboutCard;