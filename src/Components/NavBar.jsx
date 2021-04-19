import React from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import "./NavBar.css";
import Logo from "../Assets/woocer.png";

const NavBar = () => (
  <Container style={{ maxWidth: "100%", color: "#fff", fontSize: "20px" }}>
    <Row>
      <Col
        style={{
          backgroundColor: "#00B12A",
        }}
        lg={4}
      >
        <Button className='home-logo'>
          <img src={Logo} />
        </Button>
      </Col>
      <Col
        style={{
          backgroundColor: "#B1A12F",
          padding: "20px",
        }}
        lg={8}
      >
        Buttons
      </Col>
    </Row>
  </Container>
);

export default NavBar;
