
import { Container, Row, Col } from "react-bootstrap";

//imports social icons
import { FaGithubSquare, FaLinkedin, AiOutlineMail} from "react-icons/fa";
import { ImEnvelop } from "react-icons/im";
import handshake from "../../assets/handshake.png";
import React, { useEffect } from "react";
import ContactForm from "./ContactForm";

function Contact() {
     useEffect(() => {}, []);

     return (
      <section>
        <Container fluid className="contact-section">
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}> Connect Me</h1>
              <Col md={5} style={{ justifyContent: "end", paddingTop: "30px", paddingBottom: "50px"}}>
                <h3 className="title-left">Get in Touch</h3>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/wenbo-li-25791937/" rel="noreferrer" target="_blank" class="fa-2xl">
                    <FaLinkedin size={40}/>
                  </a>

                  <a href="https://github.com/deadseal001" rel="noreferrer" target="_blank" class="fa-2xl">
                    <FaGithubSquare size={40}/>
                  </a>

                  <a href="mailto:liwenbo4936@gmail.com" rel="noreferrer" target="_blank" class="fa-2xl">
                    <ImEnvelop size={40}/>
                  </a>
                </div>
                <img src={handshake} alt="collaboration" className="img-fluid"/>
              </Col>
              
              {/* right side */}
              <Col md={5} style={{ paddingTop: "50px", paddingBottom: "50px" }} className="contact-form">
                  <ContactForm/>
              </Col>
          </Row>
      </Container>
    </section>
    );
   }
export default Contact;