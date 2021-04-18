import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => (
  <Container style={{ maxWidth: "100%", color: "#fff", fontSize: "20px" }}>
    <Row>
      <Col
        style={{
          backgroundColor: "#945CDC",
          padding: "300px",
        }}
      >
        Left Header
      </Col>
      <Col
        style={{
          backgroundColor: "#282C34",
          padding: "300px",
        }}
      >
        Right Header
      </Col>
    </Row>
  </Container>
);

export default Header;
