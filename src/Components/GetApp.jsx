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
    var position = document.body.scrollTop;
    var handleScroll = () => {
      var scroll = window.pageYOffset;
      if ((scroll > position) & (window.pageYOffset >= 3415)) {
        setShow(true);
        setValue((window.pageXOffset += 2));
      } else if ((scroll < position) & (window.pageYOffset >= 3415)) {
        setValue((window.pageXOffset -= 2));
      } else {
        setShow(false);
      }
      position = scroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [show2, setShow2] = useState(false);
  useEffect(() => {
    const ShowAnimationStart = function () {
      if (window.pageYOffset >= 4400) {
        setShow2(true);
      }
    };
    window.addEventListener("scroll", ShowAnimationStart);
    return () => window.removeEventListener("scroll", ShowAnimationStart);
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
              <div
                className={show2 ? "box-text-1 animate-txt-1" : "box-text-1"}
              >
                <span className="text-1-get-app">
                  Available for your smartphone.
                </span>
              </div>
              <div
                className={show2 ? "box-text-2 animate-txt-2" : "box-text-2"}
              >
                <span className="text-2-get-app">
                  All the power of lconosquare in your pocker. Schedule, publish
                  and monitor your accounts with ease.
                </span>
              </div>
            </div>
            <div className="box-btn-get-app">
              <div
                className={
                  show2
                    ? "box-btn-google-play animate-btn-google-play"
                    : "box-btn-google-play"
                }
              >
                <span className="button btn-google-play">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.woocer.woocommerceapp&hl=en_US&gl=US"
                    className="link-getapp link-google-play"
                  >
                    <i className="fab fa-google-play fa-lg"></i>
                    Google Play
                  </a>
                </span>
              </div>
              <div
                className={
                  show2
                    ? "box-btn-app-store animate-btn-apple-store"
                    : "box-btn-app-store"
                }
              >
                <span className="button btn-apple-store">
                  <a
                    href="https://apps.apple.com/us/app/woocer-woocommerce-admin/id1534385320#?platform=iphone"
                    className="link-getapp link-apple-store"
                  >
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
                transform: show ? `translateX(-${value}px)` : "translateX(0px)",
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
