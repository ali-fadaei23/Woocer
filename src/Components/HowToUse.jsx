import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./HowToUse.css";

import NavigationBar from "./NavigationBar";

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
        <NavigationBar />

        <Col></Col>
      </Row>
    </Container>
  );
};

export default HowToUse;
