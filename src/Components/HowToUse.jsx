import React, { useEffect, useState } from "react";
import { Row, Col, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HowToUse.css";

import ScrollButton from "./ScrollButton";

// Add Assets
import Logo from "../Assets/woocer.png";
import GreenBlur from "../Assets/green-blur.png";
import BlueBlur from "../Assets/blue-blur.png";
import PinkBlur from "../Assets/pink-blur.png";
import ApiImage1 from "../Assets/Woocer-Woocommerce-API-1.jpg";
import ApiImage2 from "../Assets/Woocer-Woocommerce-API-2.jpg";

const NavBarV2 = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const stickyNav = function () {
      if (window.pageYOffset > 90) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", stickyNav);
    return () => {
      window.removeEventListener("scroll", stickyNav);
    };
  }, []);

  return (
    <Container
      className="nav-v2-container"
      style={
        show
          ? {
              position: "fixed",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.8743872549019608) 8%, rgba(238,238,242,0.896796218487395) 55%)",
              zIndex: "3",
              animation: "animation-nav 0.4s",
              visibility: "visible",
            }
          : {
              position: "absolute",
              zIndex: "3",
              animation: "animation-nav-1 1s",
            }
      }
    >
      <Row>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0px 87px",
          }}
        >
          <div>
            <Navbar className={show ? "navbar-v2 navbar-nav-v2 " : null}>
              <Navbar.Brand href="/">
                <img
                  src={Logo}
                  width="130"
                  className="d-inline-block align-top"
                  alt="logo"
                />
              </Navbar.Brand>
            </Navbar>
          </div>
          <div className="box-ul-v2">
            <ul className="ul-nav-v2">
              <li>
                <a className="home-v2 link-nav-v2" href="/">
                  Home
                </a>
              </li>
              <li>
                <Link className="how-to-use-v2 link-nav-v2" to="/how-to-use">
                  How to use
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const HowToUse = () => {
  //   const [show, setShow] = useState(false);
  //   const [show2, setShow2] = useState(false);

  //   useEffect(() => {
  //     const ShowAnimationStart = function () {
  //       if (window.pageYOffset >= 1670) {
  //         setShow(true);
  //       }
  //       if (window.pageYOffset >= 2810) {
  //         setShow2(true);
  //       }
  //     };
  //     window.addEventListener("scroll", ShowAnimationStart);
  //     return () => window.removeEventListener("scroll", ShowAnimationStart);
  //   }, []);

  return (
    <Container>
      <Row>
        <div className="section-header-how-to-use">
          <div className="box-nav-bar-v2">
            <NavBarV2 />
          </div>
          <div className="layer-image">
            <span className="layer-1 animation-layer"></span>
            <span className="layer-2 animation-layer"></span>
          </div>
          <div className="animation-icon-v2">
            <span className="pink-blur-v2">
              <img src={PinkBlur} width="100" alt="PinkBlur" />
            </span>
            <span className="blue-blur-v2">
              <img src={BlueBlur} width="110" alt="BlueBlur" />
            </span>
            <span className="green-blur-v2">
              <img src={GreenBlur} width="80" alt="GreenBlur" />
            </span>
          </div>
          <div className="box-title-how-to-use">
            <div className="title-how-to-use">
              <h1 className="text-title">
                How to use Woocer - WooCommerce Mobile App for iOS & Android
              </h1>
              <div className="box-links-how-to-use">
                <div className="links-how-to-use">
                  <li className="li-home li-style">
                    <a href="/" className="link-home-how-to-use">
                      Home
                    </a>
                  </li>
                  <li className="li-how-to-use li-style">
                    <li>How to use</li>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-container">
          <div className="box-content-sidebar">
            <div className="content-sidebar">
              <p>Using Woocer is easy.</p>
              <p>
                Go to:
                <strong>
                  {" "}
                  WooCommerce{">"} Settings {">"} Advanced {">"} REST API
                </strong>
                .
              </p>
              <img
                className="img-step-1 img-step"
                src={ApiImage1}
                width="570"
                height="377"
              />
              <img
                className="img-step-2 img-step"
                src={ApiImage2}
                width="996"
                height="675"
              />
              <p>
                Select <strong>Add Key</strong>. Add a{" "}
                <strong>Description</strong>. Make sure you give{" "}
                <strong>Read/Write</strong> access.
              </p>
              <p>Now add them in the app.</p>
            </div>
          </div>
        </div>
        <div className="box-btn-scroll-how-to-use">
          <ScrollButton scrollStepInPx={"40"} delayInMs={"16.66"} />
        </div>
      </Row>
      <Row>
        <div className="section-footer-how-to-use">
          <div className="footer-how-to-use">
            <div className="box-layer-footer">
              <span className="layer-footer-1 animation-layer-footer"></span>
              <span className="layer-footer-2 animation-layer-footer"></span>
            </div>
            <div className="box-text-footer-bottom-v2">
              <div className="text-footer">
                <span className="text-footer-bottom-v2">
                  © 2020 Woocer. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default HowToUse;