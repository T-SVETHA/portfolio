import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> C MANOJ </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am a 19 yr old, currently employed as a student in SRM Institute of Science and Technology. I'm currently pursuing 2nd yr in btech. Computer science and engineering with passion and interest in computers. For past few years I have been interested in coding and worked with programming languages which has given me a solid foundation in mini projects. This has deeply kindled my interest for robotics and new technologies.
            <br />
            I have completed my schooling in ST.Joseph's mat hr sec school in Poonamallee, Chennai, India.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing Gamming videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Today Jolly Tomorrow Gaali!"{" "}
          </p>
          <footer className="blockquote-footer">C Manoj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
