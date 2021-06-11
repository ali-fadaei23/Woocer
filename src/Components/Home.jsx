import { Component, createRef } from "react";
// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import ScrollButton from "../Components/ScrollButton";

// App - css
import "./Home.css";

// Add Components
import NavigationBar from "../Components/NavigationBar";
import Header from "../Components/Header";
import Features from "../Components/Features";
import About from "../Components/About";
import Subscribe from "../Components/Subscribe";
import GetApp from "../Components/GetApp";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";

class Home extends Component {
  // state = {
  //   scroll: window.scrollY,
  // };

  // constructor() {
  //   super();

  //   this.handleScrollHeight = this.handleScrollHeight.bind(this);
  // }

  // handleScrollHeight() {
  //   const prevLocation = createRef();
  //   if (prevLocation.current !== window.location.pathname) {
  //     this.setState({ scroll: window.scrollTo(0, 0) });
  //   } else {
  //     this.setState({ scroll: window.scrollY });
  //   }
  // }

  render() {
    return (
      <>
        <div className="header-container" id="top">
          <NavigationBar />
          <div className="box-header-bg">
            <div className="layer-img"></div>
          </div>
          <Header />
        </div>
        <div className="features-container">
          <Features />
        </div>
        <div className="about-container">
          <About />
        </div>
        <div className="subscribe-container">
          <Subscribe />
        </div>
        <div className="get-app-container">
          <GetApp />
        </div>
        <div className="faq-container">
          <Faq />
        </div>
        <div className="footer-container">
          <Footer />
        </div>
        <div className="box-scroll-container">
          <ScrollButton scrollStepInPx={"90"} delayInMs={"16.66"} />
        </div>
      </>
    );
  }
}

export default Home;
