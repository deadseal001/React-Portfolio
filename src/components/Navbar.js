import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
//imports icons
import {ImUser, ImBriefcase, ImProfile, ImPhone} from "react-icons/im";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 40) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  
  let currentPage=document.location.pathname;
  console.log("outside"+currentPage);
  useEffect(()=>{
    console.log("inside"+currentPage);
  },[document.location.pathname])

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => updateExpanded(false)}>
               <h3 className="nav-header" alt="header">Wenbo Li</h3>
        </Navbar.Brand>
        {/* toggle to burger menu on small screen devices */}

        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => {updateExpanded(expand ? false : "expanded");}}>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
              {/* navbar items */}

            <Nav.Item>
              <Nav.Link className="nav-item" as={Link} to="/" onClick={() => updateExpanded(false)}>
                <ImUser style={{ marginBottom: "2px" }} /> About Me
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="nav-item" as={Link} to="/projects" onClick={() => updateExpanded(false)}>
                <ImBriefcase style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="nav-item" as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <ImProfile style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="nav-item" as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                <ImPhone style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
