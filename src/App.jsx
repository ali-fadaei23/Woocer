import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

// App - css
import "./App.css";

// Add Components

import Home from "./Components/Home";
import HowToUse from "./Components/HowToUse";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import ScrollToTop from "./Components/Scroll";

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/how-to-use" component={HowToUse} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
        </Switch>
      </Router>
    );
  }
}

export default App;
