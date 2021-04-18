import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./About.css";

const About = () => (
  <Container style={{ color: "#fff", fontSize: "20px" }}>
    <Row>
      <Col
        style={{
          backgroundColor: "#4749A0",
          padding: "250px",
        }}
      >
        About
      </Col>
    </Row>
  </Container>
);

export default About;
