import { Component } from "react";
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
  render() {
    return (
      <>
        <div className="header-container" id="top"></div>
        <NavigationBar />
        <div className="box-header-bg">
          <div className="layer-img"></div>
        </div>
        <Header />
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
