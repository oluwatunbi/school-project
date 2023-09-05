import React from "react";
import Navigation from "../../component/Navigation/Navigation-bar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";

const About = () => {
  return (
    <div>
      <Navigation />
      <Container fluid>
        <Row>
          <Col className="about-board" md="12">
            <p className="text-center ">About Us</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
