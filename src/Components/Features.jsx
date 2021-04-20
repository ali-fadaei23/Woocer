import React from "react";
import { Row, Col, Container, Button, Navbar } from "react-bootstrap";
import "./Features.css";

// Add Assets
import Forward from "../Assets/forward.png";

const BtnFeature = (props) => (
  <div style={{ color: "#7F83FC" }}>
    <div style={{ borderRadius: "50%", color: "#767AF7", marginRight: "5px" }}>
      <img
        src={Forward}
        style={{ filter: "brightness(0) invert(1)", width: "50px" }}
      />
      <button
        style={{ backgroundColor: "transparent", border: 0, color: "#fff" }}
      >
        {props.text}
      </button>
    </div>
  </div>
);

const Features = () => (
  <Container
    style={{
      backgroundColor: "#7478FA",
      color: "#fff",
      fontSize: "20px",
    }}
  >
    <div style={{ padding: "20px", fontFamily: "Poppins" }}>
      <h2 style={{ fontSize: "40px" }}>Some of our features</h2>
    </div>
    <div style={{ textAlign: "left", padding: "50px" }}>
      <Row>
        <Col>
          <BtnFeature text={"Manage Product"} />

          <BtnFeature text={"Manage Reviews"} />

          <BtnFeature text={"Login with fingerprint"} />
        </Col>
        <Col>
          <BtnFeature text={"Manage Orders"} />

          <BtnFeature text={"Manage Tags"} />

          <BtnFeature text={"Customizable Profile"} />
        </Col>
        <Col>
          <BtnFeature text={"Manage Customers"} />

          <BtnFeature text={"Manage Categories"} />

          <BtnFeature text={"And so much more..."} />
        </Col>
      </Row>
    </div>
  </Container>
);

export default Features;
