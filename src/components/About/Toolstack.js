import { Col, Row } from "react-bootstrap"
import { SiVisualstudiocode, SiPostman, SiSlack, SiVercel, SiTrello, SiDocker, SiArduino } from "react-icons/si"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello title="Trello" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack title="Slack" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino title="Arduino IDE" />
      </Col>
    </Row>
  )
}

export default Toolstack
