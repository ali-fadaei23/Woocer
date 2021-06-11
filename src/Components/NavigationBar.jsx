import React, { useEffect, useState } from "react";
import { Row, Col, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import Logo from "../Assets/woocer.png";

const NavigationBar = () => {
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
      className="nav-container"
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
          }}
        >
          <div>
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

          <div className="box-ul">
            <ul className="ul-nav">
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
