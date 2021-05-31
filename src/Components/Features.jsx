import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import "./Features.css";

// Add Assets
import Forward from "../Assets/forward.png";

const BtnFeature = (props) => (
  <div className="circle">
    <div className="features-box">
      <img
        src={Forward}
        style={{
          filter: "brightness(0) invert(1)",
          width: "35px",
        }}
        alt=""
      />
    </div>
    <button
      style={{
        backgroundColor: "transparent",
        border: 0,
        color: "#fff",
        padding: "20px",
      }}
    >
      {props.text}
    </button>
  </div>
);

const Features = () => (
  <Container
    style={{
      backgroundColor: "#7478FA",
      color: "#fff",
      fontSize: "20px",
      fontFamily: "Poppins",
    }}
  >
    <div style={{ padding: "60px" }}>
      <h2 style={{ fontSize: "40px" }}>Some of our features</h2>
    </div>

    <Row>
      <Col>
        <div className="box-features-btn">
          <BtnFeature text={"Manage Product"} />
        </div>
        <div className="box-features-btn">
          <BtnFeature text={"Manage Orders"} />
        </div>
        <div className="box-features-btn">
          <BtnFeature text={"Manage Customers"} />
        </div>
      </Col>
      <Col>
        <div className="box-features-btn">
          <BtnFeature text={"Manage Review"} />
        </div>

        <div className="box-features-btn">
          <BtnFeature text={"Manage Tags"} />
        </div>
        <div className="box-features-btn">
          <BtnFeature text={"Manage Categories"} />
        </div>
      </Col>
      <Col>
        <div className="box-features-btn">
          <BtnFeature text={"Login with fingerprint"} />
        </div>
        <div className="box-features-btn">
          <BtnFeature text={"Customizable Profile"} />
        </div>
        <div className="box-features-btn">
          <BtnFeature text={"And so much more..."} />
        </div>
      </Col>
    </Row>
    <div className="space-between-features" style={{ padding: "40px" }}></div>
  </Container>
);

export default Features;
