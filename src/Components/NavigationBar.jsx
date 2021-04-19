import React from "react";
import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css";
import Logo from "../Assets/woocer.png";

const NavigationBar = () => (
  <Container style={{ maxWidth: "100%", color: "#fff", fontSize: "20px" }}>
    <Row>
      <Col lg={4} style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Navbar>
            <Navbar.Brand href="#home">
              <img
                src={Logo}
                width="130"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
          </Navbar>
          <Nav
            style={{
              margin: "auto",
              color: "#4749A0",
            }}
          >
            <Nav.Link href="#home" style={{ color: "#4749A0" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#how-to-use" style={{ color: "#4749A0" }}>
              How to use
            </Nav.Link>
          </Nav>
        </div>
      </Col>
      <Col lg={8}></Col>
    </Row>
  </Container>
);

export default NavigationBar;
