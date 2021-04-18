import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./About.css";

const About = () => (
  <Container style={{ maxWidth: "100%", color: "#fff", fontSize: "20px" }}>
    <Row>
      <Col
        style={{
          backgroundColor: "#6E9874",
          padding: "250px",
        }}
      >
        About Container
      </Col>
    </Row>
  </Container>
);

export default About;
