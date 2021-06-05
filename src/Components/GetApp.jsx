import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./GetApp.css";

import UpImage from "../Assets/Woocer-screenshot-6.png";
import DownImage from "../Assets/Woocer-screenshot-7.png";
import ShapeImage from "../Assets/shape-7.png";

const GetApp = () => {
  var [value, setValue] = useState(0);
  var [show, setShow] = useState(false);
  useEffect(() => {
    var handleScroll = () => {
      if (window.pageYOffset >= 3900) {
        setShow(true);
        setValue(window.pageYOffset - 1500);
      } else if (window.pageYOffset >= 5050) {
        setShow(false);
        setValue(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      style={{
        maxWidth: "100%",
        backgroundColor: "#fbfbfe",
        paddingBottom: "350px",
        overflow: "hidden",
      }}
    >
      <Row style={{ padding: "60px 0px" }}>
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
                <span className="button btn-google-play">
                  <a href="#home" className="link link-google-play">
                    <i className="fab fa-google-play fa-lg"></i>
                    Google Play
                  </a>
                </span>
              </div>
              <div className="box-btn-app-store">
                <span className="button btn-apple-store">
                  <a href="#home" className="link link-apple-store">
                    <i className="fab fa-apple fa-lg"></i>
                    Apple Store
                  </a>
                </span>
              </div>
            </div>
          </div>
        </Col>

        <Col>
          <div className="box-image-shape">
            <img
              className="shape-image"
              style={{
                transform: show
                  ? `translateX(-${Math.round(value - 2800)}px)`
                  : null,
              }}
              src={ShapeImage}
              alt=""
            />
          </div>
          <div className="box-img-get-app">
            <div className="box-img-down">
              <img className="image-down" src={DownImage} alt="" />
            </div>
            <div className="box-img-up">
              <img className="image-up" src={UpImage} alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GetApp;
