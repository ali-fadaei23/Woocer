import React, { useEffect, useRef, useState } from "react";
import "./ScrollButton.css";

const ScrollButton = (props) => {
  const intervalId = useRef(0);
  const [visible, setVisible] = useState(false);

  function scrollStep() {
    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
    if (window.pageYOffset === 0) {
      clearInterval(intervalId.current);
    }
  }

  useEffect(() => {
    const showBackTop = function () {
      if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
      ) {
        setVisible(true);
      } else if (window.pageYOffset === 0) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", showBackTop);
    return () => window.removeEventListener("scroll", showBackTop);
  }, []);

  function scrollToTop() {
    clearInterval(intervalId.current);
    intervalId.current = setInterval(scrollStep, props.delayInMs);
  }

  return (
    <div
      className="box-scroll-button"
      style={{ visibility: visible ? "visible" : "hidden" }}
      onClick={scrollToTop}
    >
      <a href="#home" className="btn-go-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </div>
  );
};

export default ScrollButton;
