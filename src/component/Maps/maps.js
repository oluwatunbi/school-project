import React from "react";
import GoogleMapreact from "google-map-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./maps.css";

const defaultaddress = {
  location: {
    address: "39, Kingsway Road, 7th Floor, Mulliner Towers, Ikoyi, Lagos",
    lat: 6.444360829374958,
    lng: 3.4267950539756957,
  },
  zoomlevel: 12,
};

const Locationpin = ({ text }) => (
  <div className="pin">
    <FontAwesomeIcon icon={faLocationDot} size="2xl" />
    <p className="pin-text"> {text}</p>
  </div>
);

const Googlemap = ({ location, zoomlevel }) => {
  return (
    <Row>
      <h2 className="text-center"> Check out our Location</h2>
      <Col md="12" style={{ height: "25rem", width: "100%" }}>
        <GoogleMapreact
          bootstarpURLKEY={{ key: "AIzaSyCKqdAMhpRr-h4bLQ-8G3rRSmZs35GOsMk" }}
          defaultCenter={defaultaddress.location}
          defaultZoom={defaultaddress.zoomlevel}
        >
          <Locationpin
            lat={defaultaddress.location.lat}
            lng={defaultaddress.location.lng}
            text={defaultaddress.location.address}
          />
        </GoogleMapreact>
      </Col>
    </Row>
  );
};

export default Googlemap;
