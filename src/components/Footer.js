import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//imports social icons
import { 
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare
 } from "react-icons/fa";

 import { 
  SiLeetcode
 } from "react-icons/si";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={6} className="footer-author">
          <h3>Thank you for visiting. </h3>
        </Col>
        <Col md={6} className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/deadseal001"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithubSquare />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://twitter.com/LiWenbo"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTwitterSquare />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/wenbo-li-25791937/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/deadseal001/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInstagramSquare />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://leetcode.com/deadseal/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
