import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Header.css";
import AwesomeImage from "../Assets/Woocer-screenshot-5.png";

const Header = () => (
  <Container style={{}}>
    <Row>
      <Col style={{ display: "flex" }}>
        <div>
          <span>WELCOME TO WOOCER</span>
          <h1>Easily manage your Woocommerce store</h1>
          <span>
            Woocer let's you manage your store from your mobile device.
          </span>
        </div>
        <div>
          <img src={AwesomeImage} />
        </div>
      </Col>
    </Row>
  </Container>
);

export default Header;
