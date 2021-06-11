import React, { useEffect, useState } from "react";
import { Row, Col, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Terms.css";

import ScrollButton from "./ScrollButton";

// Add Assets
import Logo from "../Assets/woocer.png";
import GreenBlur from "../Assets/green-blur.png";
import BlueBlur from "../Assets/blue-blur.png";
import PinkBlur from "../Assets/pink-blur.png";

const NavBarV2 = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const stickyNav = function () {
      if (window.pageYOffset > 90) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", stickyNav);
    return () => {
      window.removeEventListener("scroll", stickyNav);
    };
  }, []);

  return (
    <Container
      className="nav-v2-container"
      style={
        show
          ? {
              position: "fixed",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.8743872549019608) 8%, rgba(238,238,242,0.896796218487395) 55%)",
              zIndex: "3",
              animation: "animation-nav 0.4s",
              visibility: "visible",
            }
          : {
              position: "absolute",
              zIndex: "3",
              animation: "animation-nav-1 1s",
            }
      }
    >
      <Row>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0px 87px",
          }}
        >
          <div>
            <Navbar className={show ? "navbar-v2 navbar-nav-v2 " : null}>
              <Navbar.Brand href="/">
                <img
                  src={Logo}
                  width="130"
                  className="d-inline-block align-top"
                  alt="logo"
                />
              </Navbar.Brand>
            </Navbar>
          </div>
          <div className="box-ul-v2">
            <ul className="ul-nav-v2">
              <li>
                <a className="home-v2 link-nav-v2" href="/">
                  Home
                </a>
              </li>
              <li>
                <Link className="how-to-use-v2 link-nav-v2" to="/how-to-use">
                  How to use
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const TermsAndConditions = () => {
  const [animationStart, setAnimationStart] = useState(false);
  useEffect(() => {
    var position = document.body.scrollTop;
    var handleAnimation = () => {
      var scroll = window.pageYOffset;
      if (
        (scroll > position) & (window.pageYOffset >= 0) ||
        (scroll < position) & (window.pageYOffset <= 400)
      ) {
        setAnimationStart(true);
      } else {
        setAnimationStart(false);
      }

      position = scroll;
    };

    window.addEventListener("scroll", handleAnimation);
    return () => {
      window.removeEventListener("scroll", handleAnimation);
    };
  }, []);

  console.log(window.location);

  return (
    <Container>
      <Row style={{ flexDirection: "column" }}>
        <div className="section-header-terms">
          <div className="box-nav-bar-v2">
            <NavBarV2 />
          </div>
          <div className="layer-image">
            <span
              className={
                animationStart
                  ? "layer-terms-1 animation-layer-terms-1"
                  : "layer-terms-1"
              }
            ></span>
            <span
              className={
                animationStart
                  ? "layer-terms-2 animation-layer-terms-2"
                  : "layer-terms-2"
              }
            ></span>
          </div>
          <div className="animation-icon-v2">
            <span className="pink-blur-v2">
              <img src={PinkBlur} width="100" alt="PinkBlur" />
            </span>
            <span className="blue-blur-v2">
              <img src={BlueBlur} width="110" alt="BlueBlur" />
            </span>
            <span className="green-blur-v2">
              <img src={GreenBlur} width="80" alt="GreenBlur" />
            </span>
          </div>
          <div className="box-title-terms">
            <div className="title-terms">
              <h1 className="text-title">Terms and Conditions - Woocer</h1>
              <div className="box-links-terms">
                <div className="links-terms">
                  <li className="li-home li-style">
                    <Link to="/" className="link-home-terms">
                      Home
                    </Link>
                  </li>
                  <li className="li-terms li-style">
                    <li>Terms and Conditions</li>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-container">
          <div className="box-content-sidebar">
            <div className="content-sidebar">
              <p>
                <strong>Privacy Policy</strong>
                <br />
                We do not save your secret and consumer key on our servers.
                Woocer built the Woocer app as a Freemium app. This SERVICE is
                provided by Woocer at no cost and is intended for use as is.
                <br />
                This page is used to inform visitors regarding our policies with
                the collection, use, and disclosure of Personal Information if
                anyone decided to use our Service. If you choose to use our
                Service, then you agree to the collection and use of information
                in relation to this policy. The Personal Information that we
                collect is used for providing and improving the Service. We will
                not use or share your information with anyone except as
                described in this Privacy Policy.
                <br />
                The terms used in this Privacy Policy have the same meanings as
                in our Terms and Conditions, which is accessible at Woocer
                unless otherwise defined in this Privacy Policy.
                <br />
                <br />
                <strong>Information Collection and Use</strong>
                <br />
                For a better experience, while using our Service, we may require
                you to provide us with certain personally identifiable
                information. The information that we request will be retained by
                us and used as described in this privacy policy.
                <br />
                The app does use third party services that may collect
                information used to identify you.
                <br />
                Link to privacy policy of third party service providers used by
                the app
                <br />
                <li
                  style={{
                    listStyle: "none",
                    fontWeight: "600",
                    margin: "10px 0px",
                  }}
                >
                  &#9672; Google Play Services
                </li>
                <br />
                <br />
                <strong>Log Data</strong>
                <br />
                We want to inform you that whenever you use our Service, in a
                case of an error in the app we collect data and information
                (through third party products) on your phone called Log Data.
                This Log Data may include information such as your device
                Internet Protocol (“IP”) address, device name, operating system
                version, the configuration of the app when utilizing our
                Service, the time and date of your use of the Service, and other
                statistics.
                <br />
                <br />
                <strong>Cookies</strong>
                <br />
                Cookies are files with a small amount of data that are commonly
                used as anonymous unique identifiers. These are sent to your
                browser from the websites that you visit and are stored on your
                device’s internal memory.
                <br />
                This Service does not use these “cookies” explicitly. However,
                the app may use third party code and libraries that use
                “cookies” to collect information and improve their services. You
                have the option to either accept or refuse these cookies and
                know when a cookie is being sent to your device. If you choose
                to refuse our cookies, you may not be able to use some portions
                of this Service.
                <br />
                <br />
                <strong>Service Providers</strong>
                <br />
                We may employ third-party companies and individuals due to the
                following reasons:
                <br />
                <div className="box-paragraph">
                  <li
                    style={{
                      listStyle: "none",
                      fontWeight: "600",
                      margin: "10px 0px",
                    }}
                  >
                    &#9672; To facilitate our Service.
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      fontWeight: "600",
                      margin: "10px 0px",
                    }}
                  >
                    &#9672; To provide the Service on our behalf.
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      fontWeight: "600",
                      margin: "10px 0px",
                    }}
                  >
                    &#9672; To perform Service-related services.
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      fontWeight: "600",
                      margin: "10px 0px",
                    }}
                  >
                    &#9672; To assist us in analyzing how our Service is used.
                  </li>
                </div>
                We want to inform users of this Service that these third parties
                have access to your Personal Information. The reason is to
                perform the tasks assigned to them on our behalf. However, they
                are obligated not to disclose or use the information for any
                other purpose.
                <br />
                <br />
                <strong>Security</strong>
                <br />
                We value your trust in providing us your Personal Information,
                thus we are striving to use commercially acceptable means of
                protecting it. But remember that no method of transmission over
                the internet, or method of electronic storage is 100% secure and
                reliable, and we cannot guarantee its absolute security.
                <br />
                <br />
                <strong>Links to Other Sites</strong>
                <br />
                This Service may contain links to other sites. If you click on a
                third-party link, you will be directed to that site. Note that
                these external sites are not operated by us. Therefore, we
                strongly advise you to review the Privacy Policy of these
                websites. We have no control over and assume no responsibility
                for the content, privacy policies, or practices of any
                third-party sites or services.
                <br />
                <br />
                <strong>Children’s Privacy</strong>
                <br />
                These Services do not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                children under 13.
                <br />
                In the case we discover that a child under 13 has provided us
                with personal information, we immediately delete this from our
                servers. If you are a parent or guardian and you are aware that
                your child has provided us with personal information, please
                contact us so that we will be able to do necessary actions.
                <br />
                <br />
                <strong>Changes to This Privacy Policy</strong>
                <br />
                We may update our Privacy Policy from time to time. Thus, you
                are advised to review this page periodically for any changes.
                <br />
                We will notify you of any changes by posting the new Privacy
                Policy on this page.
                <br />
                <br />
                <strong>This policy is effective as of 2020-06-13</strong>
                <br />
                <br />
                <strong>Contact Us</strong>
                <br />
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to contact us at support{" "}
                <strong>@woocer.com</strong> .
              </p>
            </div>
          </div>
        </div>
        <div className="box-btn-scroll-terms">
          <ScrollButton scrollStepInPx={"40"} delayInMs={"16.66"} />
        </div>
      </Row>
      <Row>
        <div className="section-footer-terms">
          <div className="footer-terms">
            <div className="box-layer-footer-terms">
              <span className="layer-footer-terms-1 animation-layer-footer"></span>
              <span className="layer-footer-terms-2 animation-layer-footer"></span>
            </div>
            <div className="box-text-footer-bottom-terms-v2">
              <div className="text-footer-terms">
                <span className="text-footer-bottom-terms-v2">
                  © 2020 Woocer. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default TermsAndConditions;
