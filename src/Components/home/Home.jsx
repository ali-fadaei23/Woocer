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
import Faq from "../faq-section/Faq";
import Footer from "../footer/Footer";

class Home extends Component {
  render() {
    return (
      <>
          <NavigationBar />
          <Header />
        <div className="f-container">
          <Features />
        </div>
          <About />
          <Subscribe />
          <GetApp />
          <Faq />
          <Footer />
          <ScrollButton scrollStepInPx={"90"} delayInMs={"16.66"} />
      </>
    );
  }
}

export default Home;
