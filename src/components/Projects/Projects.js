import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//components
import ProjectCard from "./ProjectCard";
import projectData from './ProjectData';




function Projects() {
  return (
    <Container fluid className="project-section">
        <h1 className="project-heading text-center">
          Projects
        </h1>

        {/* <p>Below are some of my recent projects</p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map(project => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                image_path={project.image_path}
                title={project.title}
                description={project.description}
                repo_url={project.repo_url}
                deployed_url={project.deployed_url}
              />
            </Col>
          ))}
        </Row>
    </Container>
  );
}

export default Projects;
