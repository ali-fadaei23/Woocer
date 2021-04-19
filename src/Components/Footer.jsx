import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => (
  <Container style={{ maxWidth: "100%", color: "#fff", fontSize: "20px" }}>
    <Row>
      <Col
        style={{
          backgroundColor: "#FF7F5C",
          padding: "210px",
        }}
      >
        Footer Container
      </Col>
    </Row>
  </Container>
);

export default Footer;
