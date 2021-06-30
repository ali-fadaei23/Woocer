import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Header.css";

// Add Assets
import AwesomeImage from "../../Assets/Woocer-screenshot-5.png";
import GreenBlur from "../../Assets/green-blur.png";
import BlueBlur from "../../Assets/blue-blur.png";
import PinkBlur from "../../Assets/pink-blur.png";
import IconTriangle1 from "../../Assets/icon-triangle-1.png";
import IconTriangle2 from "../../Assets/icon-triangle-2.png";
import IconCircle1 from "../../Assets/icon-circle-1.png";
import IconCircle2 from "../../Assets/icon-circle-2.png";
import IconCircle3 from "../../Assets/icon-circle-3.png";

const Header = (props) => {
  return (
    <Container
      className="header-container"
      style={{ margin: 0, paddingTop: "125px" }}
    >
      <Row>
        <Col
          className="col-header"
          style={{
            padding: "0",
            display: "flex",
          }}
        >
          <div className="text-banner">
            <div className="box-text-h-1">
              <span
                className="txt-1"
                style={{
                  color: "#8A57DE",
                }}
              >
                WELCOME TO WOOCER
              </span>
            </div>
            <div className="box-text-h-2">
              <h1 className="txt-2">
                Easily manage your <br />
                Woocommerce store
              </h1>
            </div>
            <div className="box-text-h-3">
              <span className="txt-3" style={{ color: "#7A7A7A" }}>
                Woocer let's you manage your store from your mobile device.
              </span>
            </div>
            <div className="box-btn-header">
              <Button className="btn-header">Manage Product</Button>
            </div>
          </div>
          <span className="pink-blur">
            <img src={PinkBlur} alt="" />
          </span>
          <span className="blue-blur">
            <img src={BlueBlur} alt="" />
          </span>
          <span className="green-blur">
            <img src={GreenBlur} alt="" />
          </span>
          <div className="icons-wow">
            <span className="icon-circle-1">
              <img className="img-circle-1" src={IconCircle1} alt="" />
            </span>
            <span className="icon-circle-2">
              <img className="img-circle-2" src={IconCircle2} alt="" />
            </span>
            <span className="icon-circle-3">
              <img className="img-circle-3" src={IconCircle3} alt="" />
            </span>

            <span className="icon-triangle-1">
              <img src={IconTriangle1} alt="" width="60" />
            </span>
            <span className="icon-triangle-2">
              <img src={IconTriangle2} alt="" />
            </span>
            <span className="icon-triangle-4">
              <img src={IconTriangle1} alt="" width="50" />
            </span>
          </div>
          <div className="box-wow">
            <img className="img-wow" src={AwesomeImage} alt="Awesome" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
