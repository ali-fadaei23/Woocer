import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Subscribe.css";


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
        overflow: "hidden",
        padding: "0",
      }}
    >
      <Row>
        <Col>
          <div className="section-subscribe">
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
