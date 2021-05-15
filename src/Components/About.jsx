import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./About.css";

// Add Assets
import ImageAbout from "../Assets/Woocer-screenshot-2.png";

const About = () => (
  <Container style={{ maxWidth: "100%", color: "#000", fontSize: "20px" }}>
    <Row>
      <Col>
        <div>
          <img src={ImageAbout} />
        </div>
      </Col>
      <Col>
        <div className="box-title-about">
          <div className="box-text-about">
            <div>
              <span>Manage your products</span>
            </div>
            <div>
              <span>
                The href attribute requires a valid value to be accessible.
              </span>
            </div>
          </div>
          <div className="box-btn-about">
            <Button>Select</Button>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default About;
