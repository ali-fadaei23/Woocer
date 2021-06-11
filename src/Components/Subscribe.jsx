import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Subscribe.css";

// Add Assets
import Cloud1 from "../Assets/icon-cloud-1.png";
import Cloud2 from "../Assets/icon-cloud-2.png";
import Cloud3 from "../Assets/icon-cloud-3.png";
import Cloud4 from "../Assets/icon-cloud-4.png";
import Cloud5 from "../Assets/icon-cloud-2.png";
import Cloud6 from "../Assets/icon-cloud-4.png";

const Subscribe = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const ShowAnimationStart = function () {
      if (window.pageYOffset >= 3830) {
        setShow(true);
      }
    };
    window.addEventListener("scroll", ShowAnimationStart);
    return () => window.removeEventListener("scroll", ShowAnimationStart);
  }, []);

  return (
    <Container
      style={{
        maxWidth: "100%",
        color: "#fff",
        fontSize: "20px",
        overflow: "hidden",
        padding: "0",
      }}
    >
      <Row>
        <Col>
          <div className="section-subscribe">
            <div className="animation-icons">
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
            <div className="box-iframe">
              <iframe
                className={
                  show ? "iframe-video animation-iframe-video" : "iframe-video"
                }
                style={{ zIndex: "1", position: "relative" }}
                width="680"
                height="380"
                src="https://www.youtube.com/embed/VlOy8-cfjI4?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Subscribe;
