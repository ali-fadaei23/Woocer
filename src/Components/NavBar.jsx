import React from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => (
  <Container style={{ maxWidth: "100%", color: "#fff", fontSize: "20px" }}>
    <Row>
      <Col
        style={{
          backgroundColor: "#00B12A",
          padding: "20px",
        }}
        lg={2}
      >
        Logo
      </Col>
      <Col
        style={{
          backgroundColor: "#B1A12F",
          padding: "20px",
        }}
        lg={10}
      >
        Buttons
      </Col>
    </Row>
  </Container>
);

export default NavBar;
