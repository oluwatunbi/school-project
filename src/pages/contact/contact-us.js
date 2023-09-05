import React from "react";
import Navigation from "../../component/Navigation/Navigation-bar.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import IMAGES from "../../component/image/imgexport.js";
import "./contact.css";
import Googlemap from "../../component/Maps/maps.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../../component/Footer/footer.js";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <Container fluid>
        <Row>
          <Col className="contact-pic" md="12" g="0">
            <Image
              className="textstyle"
              src={IMAGES.ClassPupil}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <p className="contact-text text-center"> CONTACT US</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="6">
            <h2 className="text-center ">Head office</h2>
            <p className="text-center textsize">
              24, Ikoyi rabbon Estate<br></br> Victoria Island <br></br>Lagos
              State PO <br></br>BOX 12247<br></br> Call +2340768453735 <br></br>{" "}
              Opening Hour: 8am - 4pm
            </p>
          </Col>
          <Col md="6">
            <Form style={{ width: "75%", height: "100%" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md="9">
            {" "}
            <Googlemap />
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default Contact;
