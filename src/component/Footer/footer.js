import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <Container fluid className="footercolor">
        <Row>
          <Row className="justify-content-center">
            {" "}
            <Col md="4" className=" mt-5 d-flex justify-content-between">
              <FontAwesomeIcon
                icon={faEarthAfrica}
                size="2x"
                style={{ color: "white" }}
              />
              <FontAwesomeIcon
                icon={faFacebookSquare}
                size="2x"
                style={{ color: "white" }}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                style={{ color: "white" }}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                style={{ color: "white" }}
              />
              <FontAwesomeIcon
                icon={faSnapchat}
                size="2x"
                style={{ color: "white" }}
              />
            </Col>
          </Row>

          <Row className="footer-intro mt-5 mb-5">
            <Col md="3">
              <h2> Head Office</h2>
              <ul>
                <li>laoreet ac finibus sapien</li>
                <li> finibus sapien</li>
                <li>laoreet sapien</li>
                <li>laore finibus sapien</li>
              </ul>
            </Col>
            <Col md="3">
              <h2> Head Office</h2>
              <ul>
                <li>laoreet ac finibus sapien</li>
                <li> finibus sapien</li>
                <li>laoreet sapien</li>
                <li>laore finibus sapien</li>
              </ul>
            </Col>
            <Col md="3">
              <h2> Head Office</h2>
              <ul>
                <li>laoreet ac finibus sapien</li>
                <li> finibus sapien</li>
                <li>laoreet sapien</li>
                <li>laore finibus sapien</li>
              </ul>
            </Col>
            <Col md="3">
              <h2> Head Office</h2>
              <ul>
                <li>laoreet ac finibus sapien</li>
                <li> finibus sapien</li>
                <li>laoreet sapien</li>
                <li>laore finibus sapien</li>
              </ul>
            </Col>
            <Row className="footer-line mt-3">
              <p style={{ padding: "1rem" }}>@2023- Grace Valley School</p>
            </Row>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
