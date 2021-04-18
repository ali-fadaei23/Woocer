import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { Component } from "react";

// App - css
import "./App.css";

// Add Components
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Features from "./Components/Features";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="background-header">
          <NavBar />
          <Header />
        </div>
        <div className="features-container">
          <Features />
        </div>
      </>
    );
  }
}

export default App;
