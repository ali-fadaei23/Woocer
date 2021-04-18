import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { Component } from "react";

// App - css
import "./App.css";

// Add Components
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Features from "./Components/Features";
import About from "./Components/About";
import Subscribe from "./Components/Subscribe";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="header-container">
          <NavBar />
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
      </>
    );
  }
}

export default App;
