import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Faq.css";

const Faq = () => (
  <Container style={{ maxWidth: "100%", color: "#fff", fontSize: "20px" }}>
    <Row>
      <Col
        style={{
          backgroundColor: "#03003C",
          padding: "180px",
        }}
      >
        Faq Container
      </Col>
    </Row>
  </Container>
);

export default Faq;
