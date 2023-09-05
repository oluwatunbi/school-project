import React from "react";
import Navigation from "../../component/Navigation/Navigation-bar.js";
import ControlledCarousel from "../../component/Slider/Slider.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import IMAGES from "../../component/image/imgexport.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";
import Footer from "../../component/Footer/footer.js";
import "./homepage.css";

const Homepage = () => {
  return (
    <div>
      <Navigation />
      <Container fluid className="fluid">
        <ControlledCarousel />
        {/* Section two  */}
        <Row className="pt-3 section-display">
          <Row>
            <Col md="4 " className="">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={IMAGES.Kids} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className="">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={IMAGES.Kids} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className="">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={IMAGES.Kids} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="registration-bar">
            <Col md="8">
              <h2> Check the Entrance exam preparation text </h2>
            </Col>
            <Col md="4">
              <Button variant="primary" size="lg">
                {" "}
                Click{" "}
              </Button>
            </Col>
          </Row>
        </Row>
        {/* section two ends  and section 3 begins*/}

        <Row className="justify-content-center">
          <Col md="6" className="mt-5 mb-5">
            {" "}
            <p className="history-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vulputate tortor libero, congue laoreet urna aliquet a.
              Praesent ipsum lectus, egestas quis faucibus id, semper eget
              mauris. Nunc placerat elit mi, et sagittis leo egestas eu. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Cras euismod orci a nisi malesuada, quis ultricies
              purus tristique. Nulla ultricies bibendum condimentum.
            </p>
            <p className="history-paragraph ">
              sagittis condimentum neque, fringilla auctor libero varius nec.
              Cras ut sem tempus, dictum risus vitae, maximus ligula. Cras
              pulvinar cursus egestas. Phasellus a leo lacinia, porta urna ac,
            </p>
          </Col>
          <Row className="justify-content-center rowcolor ">
            <Col md="auto" className="application text-center">
              <h2>There is a place for your child </h2>
              <Button variant="primary" size="lg" className="text-center">
                {" "}
                Apply now
              </Button>
            </Col>
          </Row>
        </Row>
        {/* section 3 end and section 4 begins */}
        <Row className="justify-content-center mt-5">
          <Row></Row>
          <Col md="6">
            {" "}
            <h1 className="text-center">Explore our School</h1>{" "}
            <p className="history-paragraph">
              {" "}
              Vivamus dignissim, odio eget ornare tincidunt, lorem erat porta
              orci, sit amet bibendum augue ex non turpis. Donec accumsan, nunc
              vel tristique egestas, mauris nibh feugiat enim, id interdum ipsum
            </p>
          </Col>
          <Row>
            <Col md="4" className="img-fluid">
              <Image src={IMAGES.Teacher} fluid />
            </Col>
            <Col md="4" className="img-fluid">
              <Image src={IMAGES.Teacher} fluid />
            </Col>
            <Col md="4" className="img-fluid">
              <h1 className="set text-center" style={{ opacity: 2 }}>
                {" "}
                College Degree
              </h1>
              <Image src={IMAGES.Teacher} fluid />
            </Col>
          </Row>
        </Row>
        {/* Section 4 ends section 5 begins  */}
        <Row className="justify-content-center mt-5 section5-color">
          <Col md="6">
            <h1 className="text-center mt-2">Why Onias School?</h1>
            <p className="history-paragraph">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vulputate tortor libero, congue laoreet urna aliquet a.
              Praesent ipsum lectus, egestas quis faucibus id, semper eget
            </p>
            <p className="history-paragraph">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vulputate tortor libero, congue laoreet urna aliquet a.
              Praesent ipsum lectus, egestas quis faucibus id, semper eget
              mauris. Nunc placerat elit mi, et sagittis leo egestas eu. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
            </p>
            <p className="history-paragraph">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vulputate tortor libero, congue laoreet urna aliquet a.
              Praesent ipsum lectus, egestas quis faucibus id, semper eget
              mauris. Nunc placerat elit mi, et sagittis leo egestas eu. Orci
              varius{" "}
            </p>
          </Col>
          <Row>
            <Col className="icon-style" md="3">
              <div className="text-center">
                <FontAwesomeIcon icon={faGraduationCap} size="7x" />
              </div>
              <div className="text-center">
                {" "}
                <h3>Education Experience</h3>
                <p className="history-paragraph">
                  Praesent ipsum lectus, egestas quis faucibus id, semper eget
                  mauris. Nunc placerat elit mi, et sagittis leo egestas eu.
                  Orci
                </p>
              </div>
            </Col>
            <Col className="icon-style" md="3">
              <div className="text-center">
                <FontAwesomeIcon icon={faEarthAfrica} size="7x" />
              </div>
              <div className="text-center">
                {" "}
                <h3>10 Countries</h3>
                <p className="history-paragraph">
                  Praesent ipsum lectus, egestas quis faucibus id, semper eget
                  mauris. Nunc placerat elit mi, et sagittis leo egestas eu.
                  Orci
                </p>
              </div>
            </Col>
            <Col className="icon-style" md="3">
              <div className="text-center">
                <FontAwesomeIcon icon={faAward} size="7x" />
              </div>
              <div className="text-center">
                {" "}
                <h3>14 Accreditations</h3>
                <p className="history-paragraph">
                  Praesent ipsum lectus, egestas quis faucibus id, semper eget
                  mauris. Nunc placerat elit mi, et sagittis leo egestas eu.
                  Orci
                </p>
              </div>
            </Col>
            <Col className="icon-style" md="3">
              <div className="text-center">
                <FontAwesomeIcon icon={faPeopleGroup} size="7x" />
              </div>
              <div className="text-center">
                {" "}
                <h3>Leader of Tomorrow</h3>
                <p className="history-paragraph">
                  Praesent ipsum lectus, egestas quis faucibus id, semper eget
                  mauris. Nunc placerat elit mi, et sagittis leo egestas eu.
                  Orci
                </p>
              </div>
            </Col>
          </Row>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default Homepage;
