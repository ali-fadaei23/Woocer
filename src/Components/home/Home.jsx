import { Component } from "react";
import ScrollButton from "../scroll-button/ScrollButton";

// App - css
import "./Home.css";

// Add Components
import NavigationBar from "../header/NavigationBar";
import Header from "../header/Header";
import Features from "../features-app/Features";
import About from "../add-edit/About";
import Subscribe from "../subscribe/Subscribe";
import GetApp from "../download-app/GetApp";
// import Faq from "../faq-section/Faq";
import Footer from "../footer/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <div className="h-container" id="top">
          <NavigationBar />
          <div className="box-header-bg">
            <div className="layer-img"></div>
          </div>
          <Header />
        </div>
        <div className="f-container">
          <Features />
        </div>
        <div className="a-container">
          <About />
        </div>
        <div className="s-container">
          <Subscribe />
        </div>
        <div className="get-app-container">
          <GetApp />
        </div>
        {/* <div className="faq-container">
          <Faq />
        </div> */}
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
