import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../../assets/profile.jpg";
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
                    "I am a Full Stack MERN Developer now.",
                    
                    "I was a Molecular Biology Scientist.",
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
                  <h4 className="abouttext" style={{ textAlign: "justify" }}>
                    Hello, My name is <span className="yellow">Wenbo Li </span>
                    located in <span className="yellow">Houston, TX</span>.
                    <br /> 
                    Hello, I'm a Molecular Biology graduate based in Houston, TX, with several years of experience as a research scientist. My strong foundation in scientific research has honed my problem-solving skills and ability to adapt to new challenges. My passion for coding began in middle school, and over the years, it has grown into a strong desire to transition into a coding career.
                    <br />
                    Recently, I successfully completed an intensive Full Stack Web Development Bootcamp at Rice University. This immersive program equipped me with practical skills and hands-on experience in the tech industry, building upon my previous experience in biology research.
                    <br />
                    If you're in need of a dedicated and skilled web developer with the latest web development expertise, please don't hesitate to get in touch with me. I am eager to collaborate with innovative teams on challenging projects and contribute to their success. I look forward to connecting with you!
                    <br />
                  </h4>
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

