import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../../assets/profile.png";
import Card from "react-bootstrap/Card";
import Typewriter from "typewriter-effect";
//Imports tech icons
import {DiHtml5, DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiHeroku} from "react-icons/di";
import {SiMysql, SiTailwindcss} from "react-icons/si";
import {BsFillBootstrapFill} from "react-icons/bs";


function About() {
  return (
    <Container fluid className="about-section">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/* left side */}
          <Col md={7} style={{justifyContent: "center", paddingTop: "30px",  paddingBottom: "50px",}}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About Me
            </h1>
            <div style={{ padding: 25, textAlign: "left" }}>
              <Typewriter
                options={{
                  strings: [
                    "I am a Full Stack MERN Developer.",
                    
                    "I'm a Molecular Biology Scientist.",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 80,
                }}
              />
              </div>
            <Card className="aboutme-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hello, My name is <span className="yellow">Wenbo Li </span>
                    located in <span className="yellow">Houston, TX</span>.
                    <br /> 
                    I majored in Molecular Biology and have been worked as a research scientist for almost 10 years. 
                    I started coding since I was in middle school. I felt it's about time to make a change by pursuing a coding career.<br/>
                    I am now currently being trained at Rice University Extension Coding Bootcamp for Full Stack Web Development. Do not hesitate to contact me if you need my services.
                    Looking forward to working with ingenious teams on challenging projects. 
                    <br />
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          
          {/* right side */}
          <Col md={5}
            style={{ paddingTop: "100px", paddingBottom: "50px" }}
            className="about-img"
          >
              <img src={profileImg} alt="profile-img" className="img-fluid" />
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

export default About;

