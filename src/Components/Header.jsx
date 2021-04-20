import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Header.css";

// Add Assets
import AwesomeImage from "../Assets/Woocer-screenshot-5.png";
import GreenBlur from "../Assets/green-blur.png";
import BlueBlur from "../Assets/blue-blur.png";
import PinkBlur from "../Assets/pink-blur.png";
import IconTriangle1 from "../Assets/icon-triangle-1.png";
import IconTriangle2 from "../Assets/icon-triangle-2.png";
import IconCircle1 from "../Assets/icon-circle-1.png";
import IconCircle2 from "../Assets/icon-circle-2.png";
import IconCircle3 from "../Assets/icon-circle-3.png";

const Header = () => (
  <Container style={{ margin: 0 }}>
    <Row>
      <Col style={{ display: "flex", padding: 0 }}>
        <div
          className="text-banner"
          style={{
            
          }}
        >
          <span
            className="txt-1"
            style={{
              fontSize: "x-large",
              color: "#8A57DE",
            }}
          >
            WELCOME TO WOOCER
          </span>
          <h1 className="txt-2">
            Easily manage your <br />
            Woocommerce store
          </h1>
          <span className="txt-3" style={{ color: "#7A7A7A" }}>
            Woocer let's you manage your store from your mobile device.
          </span>
         <Button>select</Button>
        </div>
        <span className="pink-blur">
          <img src={PinkBlur} />
        </span>
        <span className="blue-blur">
          <img src={BlueBlur} />
        </span>
        <span className="green-blur">
          <img src={GreenBlur} />
        </span>

        <span className="icon-circle-1">
          <img src={IconCircle1} width="170" />
        </span>
        <span className="icon-circle-2">
          <img src={IconCircle2} />
        </span>
        <span className="icon-circle-3">
          <img src={IconCircle3} />
        </span>

        <span className="icon-triangle-1">
          <img src={IconTriangle1} />
        </span>
        <span className="icon-triangle-2">
          <img src={IconTriangle2} />
        </span>

        <div className="img-wow">
          <img
            src={AwesomeImage}
            alt="Awesome Image"
            style={{ width: "300px", marginLeft: "117%" }}
          />
          <div style={{ marginBottom: "15%" }}></div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Header;
