import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../../assets/profile.png";
import Typewriter from "typewriter-effect";

// Animation
import { motion } from "framer-motion";

const contentVariants = { initial: { translateX: "-100vw", opacity: 0}, animate: { translateX: "0vw", opacity: 1, transition: { duration: 2, when: "beforeChildren"}}};

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>

            <Col md={7} className="home-header">
            <motion.div className="home-header" variants={contentVariants} initial="initial" animate="animate">
              <h1 className="heading-name">
               Hi, My Name is <strong className="official-name">Wenbo Li</strong>
              </h1>
              <div style={{ padding: 30, textAlign: "left" }}>
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
              </motion.div>
            </Col>


            <Col md={5} style={{ justifyContent: "center", paddingBottom: 20 }}>
            <motion.div animate={{ translateY: [-20, 0, -20, 0] }} transition={{ yoyo: Infinity, duration: 6 }}>      
              <img src={profileImg} alt="profile" className="img-fluid"/>
            </motion.div>
            </Col>

          </Row>
          
        </Container>
      </Container>
    </section>
  );
}

export default Home;
