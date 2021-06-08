import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// App - css
import "./App.css";

// Add Components
import Home from "./Components/Home";
import HowToUse from "./Components/HowToUse";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/how-to-use" component={HowToUse} />
      </Router>
    );
  }
}

export default App;
