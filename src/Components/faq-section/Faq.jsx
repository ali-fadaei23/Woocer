import React, { useState } from "react";
import { Row, Col, Container, Collapse, Button } from "react-bootstrap";
import "./Faq.css";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <Container
      style={{
        position: "relative",
        padding: "100px 0 100px",
        backgroundColor: "#fbfbfd",
        maxWidth: "100%",
      }}
    >
      <Row>
        <Col>
          <div className="section-faq">
            <div className="box-text-faq">
              <span className="text-faq">Frequently asked questions</span>
            </div>
            <div className="section-faq-content">
              <div className="box-content">
                <div className="box-content-1">
                  <Button
                    className="btn-collapse-1"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    Does Woocer use a plugin to work?
                    <span className="icon-plus-1">
                      {open ? (
                        <i class="fas fa-minus"></i>
                      ) : (
                        <i class="fas fa-plus"></i>
                      )}
                    </span>
                  </Button>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                      <div className="text-1">
                        No, Woocer only uses the Woocommerce API itself.
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
              <div className="box-content">
                <div className="box-content-2">
                  <Button
                    className="btn-collapse-2"
                    onClick={() => setOpen2(!open2)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open2}
                  >
                    Where do you store consumer key and consumer secret?
                    <span className="icon-plus-2">
                      {open2 ? (
                        <i class="fas fa-minus"></i>
                      ) : (
                        <i class="fas fa-plus"></i>
                      )}
                    </span>
                  </Button>
                  <Collapse in={open2}>
                    <div id="example-collapse-text">
                      <div className="text-2">
                        We encrypt and store your keys on your phone. We do not
                        save your keys on our clouds.
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Faq;
