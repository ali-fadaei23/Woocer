import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Subscribe.css";

// Add Assets
import Cloud1 from "../Assets/icon-cloud-1.png";
import Cloud2 from "../Assets/icon-cloud-2.png";
import Cloud3 from "../Assets/icon-cloud-3.png";
import Cloud4 from "../Assets/icon-cloud-4.png";
import Cloud5 from "../Assets/icon-cloud-2.png";
import Cloud6 from "../Assets/icon-cloud-4.png";
import iconBuilding1 from "../Assets/icon-buildings.png";
import iconBuilding2 from "../Assets/icon-buildings.png";
import ImageSubscribe from "../Assets/back.jpg";
import starIcon from "../Assets/star.png";

const Subscribe = () => (
  <Container
    style={{
      maxWidth: "100%",
      color: "#fff",
      fontSize: "20px",
      overflow: "hidden",
    }}
  >
    <Row>
      <Col>
        <div className="section-subscribe">
          <div className="animation-icons">
            <img
              className="icon icon-building left"
              src={iconBuilding1}
              alt=""
            />
            <img
              className="icon icon-building right"
              src={iconBuilding2}
              alt=""
            />
            <img className="icon icon-cloud-1" src={Cloud1} alt="" />
            <img className="icon icon-cloud-2" src={Cloud2} alt="" />
            <img className="icon icon-cloud-3" src={Cloud3} alt="" />
            <img className="icon icon-cloud-4" src={Cloud4} alt="" />
            <img className="icon icon-cloud-5" src={Cloud5} alt="" />
            <img className="icon icon-cloud-6" src={Cloud6} alt="" />
          </div>
          <div className="box-text-subscribe">
            <span className="text-1-subscribe">How Does It Work?</span>
            <h2 className="text-2-subscribe">How does it work?</h2>
          </div>
          <div className="box-subscribe">
            <div className="box-img-subscribe">
              <img className="img-subscribe" src={ImageSubscribe} />
              <a className="video-link" href="https://youtu.be/VlOy8-cfjI4"></a>
              <img className="star-icon" src={starIcon} />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Subscribe;
