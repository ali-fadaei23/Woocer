import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Features.css";

// Add Assets
import Forward from "../Assets/forward.png";

const BtnFeature = (props) => {
  return (
    <div className="circle">
      <div className="features-box">
        <img className="img-forward" src={Forward} alt="" />
      </div>
      <button
        className="btns-features"
        style={{
          backgroundColor: "transparent",
          border: 0,
          color: "#fff",
        }}
      >
        {props.text}
      </button>
    </div>
  );
};

const Features = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const ShowAnimationStart = function () {
      if (window.pageYOffset >= 800) {
        setShow(true);
      }
    };
    window.addEventListener("scroll", ShowAnimationStart);
    return () => window.removeEventListener("scroll", ShowAnimationStart);
  }, []);
  return (
    <Container
      className="container-features"
      style={{
        animation: show ? "bg-animate 1500ms" : null,
        visibility: show ? "visible" : "hidden",
      }}
    >
      <div style={{ padding: "3vw" }}>
        <h2
          className={
            show
              ? "text-title-features animation-title-features"
              : "text-title-features"
          }
        >
          Some of our features
        </h2>
      </div>

      <Row className="row-features">
        <Col className="col-features-1 col-features">
          <div className={show ? "anim-box-1 animation-1" : "anim-box-1"}>
            <div className="box-features-btn">
              <BtnFeature text={"Manage Product"} />
            </div>
            <div className="box-features-btn">
              <BtnFeature text={"Manage Orders"} />
            </div>
            <div className="box-features-btn">
              <BtnFeature text={"Manage Customers"} />
            </div>
          </div>
        </Col>
        <Col className="col-features-2 col-features">
          <div className={show ? "anim-box-2 animation-2" : "anim-box-2"}>
            <div className="box-features-btn">
              <BtnFeature text={"Manage Review"} />
            </div>

            <div className="box-features-btn">
              <BtnFeature text={"Manage Tags"} />
            </div>
            <div className="box-features-btn">
              <BtnFeature text={"Manage Categories"} />
            </div>
          </div>
        </Col>
        <Col className="col-features-3 col-features">
          <div className={show ? "anim-box-3 animation-3" : "anim-box-3"}>
            <div className="box-features-btn">
              <BtnFeature text={"Login with fingerprint"} />
            </div>
            <div className="box-features-btn">
              <BtnFeature text={"Customizable Profile"} />
            </div>
            <div className="box-features-btn">
              <BtnFeature text={"And so much more..."} />
            </div>
          </div>
        </Col>
      </Row>
      <div className="space-between-features" style={{ padding: "3vw" }}></div>
    </Container>
  );
};

export default Features;
