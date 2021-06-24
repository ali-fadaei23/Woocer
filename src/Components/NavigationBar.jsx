import React, { useEffect, useState } from "react";
import { Row, Col, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import Logo from "../Assets/woocer.png";

const NavigationBar = () => {
  const [showEl, setShowEl] = useState(false);

  const MoreBtn = function () {
    if (!showEl) {
      setShowEl(true);
    } else if (showEl) {
      setShowEl(false);
    }
  };

  useEffect(() => {
    const Reset = function () {
      if (window.innerWidth > 900) {
        setShowEl(false);
      }
    };

    window.addEventListener("resize", Reset);
    return () => {
      window.removeEventListener("resize", Reset);
    };
  }, []);

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
      className="nav-container container-nav-pos bg-nav"
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
      <Row className={showEl ? "row-nav" : "row-nav display-row-nav"}>
        <Col className={showEl ? "col-nav" : "col-nav display-col-nav"}>
          <div className="size-nav" style={{ width: "100%" }}>
            <Navbar className={show ? "navbar navbar-nav " : null}>
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
          <div className="box-more-icon">
            <button
              className={showEl ? "more-icon" : "more-icon hide-more-icon"}
              onClick={MoreBtn}
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </Col>
        <Col className="col-ul">
          <div className={showEl ? "box-ul" : "box-ul hide-box-ul"}>
            <ul className={!showEl ? "ul-nav" : "ul-nav pad-ul-nav"}>
              <li>
                <a className="home link-nav" href="/">
                  Home
                </a>
              </li>
              <li>
                <Link
                  className="how-to-use link-nav"
                  to={{ pathname: "/how-to-use" }}
                >
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

export default NavigationBar;
