import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { Component } from "react";

// App - css
import "./App.css";

// Add Components
import NavBar from "./Components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavBar />
      </>
    );
  }
}

export default App;
