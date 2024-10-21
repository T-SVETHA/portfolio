import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/vmm.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a project I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vmm}
              isBlog={false}
              title="Virtual Memory Management"
              description="Virtual memory management is a critical component of modern operating systems that enhances the efficiency and flexibility of memory usage. It abstracts physical memory, allowing systems to use disk space to simulate additional RAM. This mechanism enables multiple processes to run concurrently, providing each with a private address space while efficiently sharing physical memory resources.The project employs the Least Recently Used (LRU) page replacement algorithm. LRU is a widely-used strategy that tracks page usage over time and evicts the least recently accessed page when a page fault occurs. This approach is based on the assumption that pages used recently will likely be used again soon, thus optimizing memory utilization."
             
            />
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
