import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

import Cloud1 from "../../Assets/icon-cloud-1.png";
import Cloud2 from "../../Assets/icon-cloud-2.png";
import Cloud3 from "../../Assets/icon-cloud-3.png";
import Cloud4 from "../../Assets/icon-cloud-4.png";
import Cloud5 from "../../Assets/icon-cloud-2.png";
import Cloud6 from "../../Assets/icon-cloud-4.png";
import IconBuilding from "../../Assets/icon-buildings.png";

const Footer = () => {
  const [scrollTop, setScrollTop] = useState(window.scrollY);
  const prevLocation = useRef();

  useEffect(() => {
    const ScrollHandleTop = () => {
      if (
        (prevLocation.current !== window.location.pathname) &
        (window.location.pathname !== "/")
      ) {
        prevLocation.current = window.location.pathname;
        setScrollTop(window.scrollTo(0, 0));
      } else {
        setScrollTop(window.scrollY);
      }
    };

    window.addEventListener("click", ScrollHandleTop);
    return () => {
      window.removeEventListener("click", ScrollHandleTop);
    };
  }, [scrollTop]);

  return (
    <Container
      style={{
        maxWidth: "100%",
        position: "relative",
        backgroundColor: "#fcfafb",
        color: "#394963",
      }}
    >
      <Row>
        <Col>
          <div className="footer">
            <div className="animation-footer-icons">
              <img
                className="icon-footer icon-cloud-footer-1"
                src={Cloud1}
                alt=""
              />
              <img
                className="icon-footer icon-cloud-footer-2"
                src={Cloud2}
                alt=""
              />
              <img
                className="icon-footer icon-cloud-footer-3"
                src={Cloud3}
                alt=""
              />
              <img
                className="icon-footer icon-cloud-footer-4"
                src={Cloud4}
                alt=""
              />
              <img
                className="icon-footer icon-cloud-footer-5"
                src={Cloud5}
                alt=""
              />
              <img
                className="icon-footer icon-cloud-footer-6"
                src={Cloud6}
                alt=""
              />
            </div>
            <div className="section-footer-pages">
              <div className="box-pages">
                <span className="text-title-pages title">Pages</span>
              </div>
              <div className="box-pages-link">
                <ul>
                  <div className="box-link-pages">
                    <li className="link-home link-footer">
                      <a className="links-style" href="#top">
                        Home
                      </a>
                    </li>
                    <li className="link-how-to-use link-footer">
                      <Link
                        className="links-style"
                        to={{ pathname: "/how-to-use" }}
                      >
                        How to use
                      </Link>
                    </li>
                    <li className="link-privacy-policy link-footer">
                      <Link
                        className="links-style"
                        to={{ pathname: "/privacy-policy" }}
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="link-terms-and-conditions link-footer">
                      <Link
                        className="links-style"
                        to={{
                          pathname: "/terms-conditions",
                        }}
                      >
                        Terms and Conditions
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="section-footer-download">
              <div className="box-download">
                <span className="text-title-pages title">Download</span>
              </div>
              <div className="box-btn-footer-download">
                <div className="btn-footer-google-play btn-footer">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.woocer.woocommerceapp&hl=en_US&gl=US"
                    className="google-play-footer btn-download-app"
                  >
                    <i className="fab fa-google-play fa-lg"></i>
                    Google Play
                  </a>
                </div>
                <div className="btn-footer-apple-store btn-footer">
                  <a
                    href="https://apps.apple.com/us/app/woocer-woocommerce-admin/id1534385320#?platform=iphone"
                    className="apple-store-footer btn-download-app"
                  >
                    <i className="fab fa-apple fa-lg"></i>
                    Apple Store
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="building">
            <img className="icon icon-building" src={IconBuilding} alt="" />
          </div>
          <div className="footer-bottom-padding">
            <div className="footer-bottom">
              <span className="text-footer-bottom">
                © 2020 Woocer. All rights reserved.
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
