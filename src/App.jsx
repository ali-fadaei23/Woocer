import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// add CSS
import "./App.css";

// Add Components

import Home from "./Components/home/Home";
import HowToUse from "./Components/HowToUse";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsAndConditions from "./Components/Terms";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/how-to-use" component={HowToUse} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-conditions" component={TermsAndConditions} />
          <Route component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
