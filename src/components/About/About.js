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
              About <strong className="yellow">Me</strong>
            </h1>
            <div style={{ padding: 5, textAlign: "left" }}>
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
                    <br />I hold a PhD Degree in Development Biology. 
                    {/* I majored in Biology in college and have been working as an English - Chinese medical translator after graduation for more than 14 years. 4 years after moving to the Bay Area and inspired by its entrepreneurial atmosphere, I felt it's about time to make a change by pursuing a coding career. 
                    
                    That's how it started. I am now currently trained at UC Berkeley Extension Coding Bootcamp for Full Stack Web Development. Do not hesitate to contact me if you need my services.

                    Looking forward to working with ingenious teams on challenging projects. */}
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

