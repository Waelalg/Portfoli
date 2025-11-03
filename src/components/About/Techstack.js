import { Col, Row } from "react-bootstrap"
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava } from "react-icons/di"
import { SiNextdotjs, SiPostgresql, SiSocketdotio, SiCplusplus, SiArduino, SiRaspberrypi } from "react-icons/si"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs title="Next.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus title="C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino title="Arduino" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRaspberrypi title="Raspberry Pi" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSocketdotio title="Socket.io" />
      </Col>
    </Row>
  )
}

export default Techstack
