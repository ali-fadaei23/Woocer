import React, { useEffect, useState } from "react";
import { Row, Col, Container, Navbar } from "react-bootstrap";
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
              backgroundColor: "#fbfbfe",
              zIndex: "3",
              animation: "animation-nav 0.4s",
            }
          : {
              position: "absolute",
              zIndex: "3",
            }
      }
    >
      <Row>
        <Col
          lg={4}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div>
            <Navbar className={show ? "navbar navbar-nav " : null}>
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
                <a className="home link-nav" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="how-to-use link-nav" href="#how-to-use">
                  How to use
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NavigationBar;
