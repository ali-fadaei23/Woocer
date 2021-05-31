import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./GetApp.css";

import UpImage from "../Assets/Woocer-screenshot-6.png";
import DownImage from "../Assets/Woocer-screenshot-4.png";
import ShapeImage from "../Assets/shape-7.png";

const GetApp = () => (
  <Container style={{ maxWidth: "100%", backgroundColor: "#fbfbfe" }}>
    <Row>
      <Col>
        <div className="section-get-app">
          <div className="box-text-get-app">
            <div className="box-text-1">
              <span className="text-1-get-app">
                Available for your smartphone.
              </span>
            </div>
            <div className="box-text-2">
              <span className="text-2-get-app">
                All the power of lconosquare in your pocker. Schedule, publish
                and monitor your accounts with ease.
              </span>
            </div>
          </div>
          <div className="box-btn-get-app">
            <div className="box-btn-google-play">
              <span
                className="button btn-google-play"
                style={{ color: "Tomato" }}
              >
                <a href="#" className="link link-google-play">
                  <i className="fab fa-google-play fa-lg"></i>
                  Google Play
                </a>
              </span>
            </div>
            <div className="box-btn-app-store">
              <span
                className="button btn-apple-store"
                style={{ color: "Tomato" }}
              >
                <a href="#" className="link link-apple-store">
                  <i className="fab fa-apple fa-lg"></i>
                  Apple Store
                </a>
              </span>
            </div>
          </div>
        </div>
      </Col>
      <Col>
        <div className="box-img-get-app">
          <img className="image-up" src={UpImage} alt="" />
          <img className="image-down" src={DownImage} alt="" />
          <img className="shape" src={ShapeImage} alt="" />
        </div>
      </Col>
    </Row>
  </Container>
);

export default GetApp;
