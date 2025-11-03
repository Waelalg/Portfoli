"use client"

import { useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { CgWebsite } from "react-icons/cg"
import { BsGithub } from "react-icons/bs"

function ProjectCards(props) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="project-card-view"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: "all 0.4s ease",
      }}
    >
      {props.imgPath ? (
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{
            transition: "transform 0.4s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      ) : null}

      <Card.Body>
        <Card.Title style={{ color: "#c770f0", fontWeight: "600" }}>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify", color: "#d0d0d0" }}>{props.description}</Card.Text>

        <div style={{ display: "flex", gap: "10px" }}>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" rel="noopener noreferrer">
              <BsGithub style={{ marginRight: "6px" }} />
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" rel="noopener noreferrer">
              <CgWebsite style={{ marginRight: "6px" }} />
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCards
