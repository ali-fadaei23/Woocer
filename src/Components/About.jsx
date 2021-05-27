import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./About.css";

// Add Assets
import ImageAbout from "../Assets/Woocer-screenshot-2.png";

const About = () => (
  <Container
    style={{
      maxWidth: "100%",
      color: "#000",
      fontSize: "20px",
      paddingTop: "100px",
    }}
  >
    <Row>
      <Col>
        <div className="box-img-about">
          <img className="img-about" src={ImageAbout} />
        </div>
      </Col>
      <Col>
        <div className="box-title-about">
          <div className="box-main-text-about">
            <div>
              <span>Manage your products</span>
            </div>
            <div className="box-text-about">
              <span className="text-about" placeholder="Text">
                Woocer let's you manage your store from your mobile device.
              </span>
            </div>
          </div>
          <div className="box-btn-about">
            <Button className="btn-about">Manage Product</Button>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default About;
