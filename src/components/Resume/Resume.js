import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
//Imports tech icons
import {DiHtml5, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiHeroku} from "react-icons/di";
import {SiMysql,SiTailwindcss} from "react-icons/si";
import {BsFillBootstrapFill} from "react-icons/bs";
import resumed from "../../assets/Wenbo_Li_resume.pdf"


function Resume() {
  return (
    <Container fluid className="about-section">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{justifyContent: "center", paddingTop: "30px",  paddingBottom: "50px",}}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Resume
            </h1>
            <Card className="resume-card-view">
              <Card.Body>
              <a href={resumed} download> Click to download my Resume </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
        <Container fluid className="skill-section">
            <Row>
              <h1 className="skill-heading">
                <strong className="white">Skills</strong>
              </h1>
            </Row>
            
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              <Col xs={6} md={3} className="skill-icons"><DiHtml5 /></Col>
              <Col xs={6} md={3} className="skill-icons"><DiJavascript1 /></Col>
              <Col xs={6} md={3} className="skill-icons"><DiNodejs /></Col>
              <Col xs={6} md={3} className="skill-icons"><DiReact /></Col>
              <Col xs={6} md={3} className="skill-icons"><DiMongodb /></Col>
              <Col xs={6} md={3} className="skill-icons"><SiMysql /></Col>
              <Col xs={6} md={3} className="skill-icons"><DiGit /></Col>
              <Col xs={6} md={3} className="skill-icons"><DiHeroku /></Col>
              <Col xs={6} md={3} className="skill-icons"><BsFillBootstrapFill /></Col>
              <Col xs={6} md={3} className="skill-icons"> <SiTailwindcss /></Col>
            </Row>
        </Container>
        
        </Row>
    </Container>
  );
}

export default Resume;

