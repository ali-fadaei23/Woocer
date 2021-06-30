import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./About.css";

// Add Assets
import ImageAbout from "../../Assets/Woocer-screenshot-2.png";
import ImageOrder from "../../Assets/Woocer-screenshot-7.png";
// import ImageAboutProduct from "../../Assets/product.png";
// import ImageAboutOrder from "../../Assets/order.png";

const About = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  // const [show3, setShow3] = useState(false);

  useEffect(() => {
    const ShowAnimationStart = function () {
      if (window.pageYOffset >= 1670) {
        setShow(true);
      }
      if (window.pageYOffset >= 2810) {
        setShow2(true);
      }
      // if (window.pageXOffset <= 699) {
      //   setShow3(true);
      // }
    };
    window.addEventListener("scroll", ShowAnimationStart);
    return () => window.removeEventListener("scroll", ShowAnimationStart);
  }, []);
  return (
    <Container className="about-container">
      <Row className="row-about-product">
        <Col className="col-about-product-img">
          {/* <img
            className={
              show3
                ? "img-about-shape animation-img-about-shape"
                : "img-about-shape"
            }
            src={ImageAboutProduct}
            alt=""
          /> */}
          <div
            className={
              show ? "box-img-about animation-box-about" : "box-img-about"
            }
          >
            <img
              className={show ? "img-about animation-img-about" : "img-about"}
              src={ImageAbout}
              alt=""
            />
          </div>
        </Col>
        <Col className="col-about-product-text">
          <div className="box-title-about">
            <div className="box-main-text-about">
              <div>
                <span>Add & Edit Product</span>
              </div>
              <div className="box-text-about">
                <span className="text-about" placeholder="Text">
                  text
                </span>
              </div>
            </div>
            <div className="box-btn-about">
              <Button className="btn-about">Manage Product</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="row-about-order" style={{ paddingTop: "4vh" }}>
        <Col className="col-about-order-text">
          <div className="box-add-order">
            <div className="box-main-text-order">
              <div>
                <span>Add & Edit Order </span>
              </div>
              <div className="box-text-order">
                <span
                  className="text-order"
                  placeholder="Text"
                  style={{ overflow: "hidden" }}
                >
                  text
                </span>
              </div>
              <div className="box-btn-order">
                <Button className="btn-order">Manage Order</Button>
              </div>
            </div>
          </div>
        </Col>
        <Col className="col-about-order-text">
          {/* <div>
            <img
              className={
                show3 ? "img-order-2 animation-img-order-2" : "img-order-2"
              }
              src={ImageAboutOrder}
              alt=""
            />
          </div> */}
          <div className="box-img-order-about" style={{ overflow: "hidden" }}>
            <div
              className={show2 ? "circle-1 animate-circle-1" : "circle-1"}
            ></div>
            <div
              className={show2 ? "circle-2 animate-circle-2" : "circle-2"}
            ></div>
            <div
              className={
                show2 ? "box-img-order animate-img-order" : "box-img-order"
              }
            >
              <img className="img-order" src={ImageOrder} alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
