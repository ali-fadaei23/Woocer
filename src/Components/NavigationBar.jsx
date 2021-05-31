import React from "react";
import { Row, Col, Container, Navbar } from "react-bootstrap";
import "./NavigationBar.css";
import Logo from "../Assets/woocer.png";

const NavigationBar = () => (
  <Container className="nav-container">
    <Row>
      <Col
        lg={4}
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div>
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
        </div>
        <div className="box-ul">
          <ul className="ul-nav">
            <li>
              <a className="home link-nav" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="how-to-use link-nav" href="#">
                How to use
              </a>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  </Container>
);

export default NavigationBar;
