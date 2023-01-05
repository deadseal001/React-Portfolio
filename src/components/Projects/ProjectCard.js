import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//external link icon
import { BiLinkExternal } from "react-icons/bi";

function ProjectCard (props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.image_path} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div class="d-flex justify-content-around">
        <Button variant="primary" href={props.repo_url} target="_blank">
          <BiLinkExternal /> View Repo
        </Button>  
         
        <Button variant="primary" href={props.deployed_url} target="_blank">
          <BiLinkExternal /> View App
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
