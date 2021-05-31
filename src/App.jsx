import "bootstrap/dist/css/bootstrap.min.css";
// import { Row, Col, Container } from "react-bootstrap";
import { Component } from "react";

// App - css
import "./App.css";

// Add Components
import NavigationBar from "./Components/NavigationBar";
import Header from "./Components/Header";
import Features from "./Components/Features";
import About from "./Components/About";
import Subscribe from "./Components/Subscribe";
import GetApp from "./Components/GetApp";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="header-container">
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
      </>
    );
  }
}

export default App;
