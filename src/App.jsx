import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

// add CSS
import "./App.css";

// Add Components

import Home from "./Components/home/Home";
import HowToUse from "./Components/HowToUse";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsAndConditions from "./Components/Terms";

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/how-to-use" component={HowToUse} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-conditions" component={TermsAndConditions} />
        </Switch>
      </Router>
    );
  }
}

export default App;
