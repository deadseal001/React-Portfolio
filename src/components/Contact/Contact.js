
import { Container, Row, Col } from "react-bootstrap";

//imports social icons
import { 
  FaGithubSquare,
  FaLinkedin,
 } from "react-icons/fa";

 import { 
    ImEnvelop
   } from "react-icons/im";

import handshake from "../../assets/handshake.png";

import React, { useEffect } from "react";
import ContactForm from "./ContactForm";

function Contact() {
     useEffect(() => {
     }, []);

     return (
      <section>
      <Container fluid className="contact-section">

      <Row style={{ justifyContent: "center", padding: "10px" }}>
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Connect <strong className="yellow">Me</strong>
            </h1>
            <Col
            md={5}
            style={{
              justifyContent: "end",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h3 className="title-left">Get in <strong className="yellow">Touch</strong></h3>
            <div className="social-icons">
             <a
               href="https://www.linkedin.com/in/bfguo/"
               rel="noreferrer"
               target="_blank"
             >
               <FaLinkedin />
             </a>

             <a
               href="https://github.com/magickw"
               rel="noreferrer"
               target="_blank"
             >
               <FaGithubSquare />
             </a>

           <a
               href="mailto:peterguo1983@gmail.com"
               rel="noreferrer"
               target="_blank"
             ><ImEnvelop />
             </a>
             </div>
             <img src={handshake} alt="collaboration" className="img-fluid"/>
          </Col>
          
          {/* right side */}
          <Col md={5}
            style={{ paddingTop: "100px", paddingBottom: "50px" }}
            className="contact-form"
          >
              <ContactForm />
            </Col>
        </Row>
         </Container>
         </section>

     );
   }
export default Contact;