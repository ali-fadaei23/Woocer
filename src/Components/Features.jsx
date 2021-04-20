import React from "react";
import { Row, Col, Container, Button, Navbar } from "react-bootstrap";
import "./Features.css";

// Add Assets
import Forward from "../Assets/forward.png";

const BtnFeature = (props) => (
  <div
    style={{
      backgroundColor: "#7F83FC",
      marginBottom: "10%",
      display: "flex",
      padding: "8px",
      borderRadius: "10px",
    }}
  >
    <div className="features-box">
      <img
        src={Forward}
        style={{
          filter: "brightness(0) invert(1)",
          width: "40px",
        }}
      />
    </div>
    <button
      style={{
        backgroundColor: "transparent",
        border: 0,
        color: "#fff",
        padding: "20px",
      }}
    >
      {props.text}
    </button>
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
    <div style={{ padding: "60px", fontFamily: "Poppins" }}>
      <h2 style={{ fontSize: "40px" }}>Some of our features</h2>
    </div>

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
    <div className="space-between-features" style={{ padding: "40px" }}></div>
  </Container>
);

export default Features;
