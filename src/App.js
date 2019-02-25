import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Form.js";
import Validator from "./Validator.js";
import Test from "./Test.js";
import AgeValidator from "./AgeValidator.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/form" exact={true} component={Form} />
          <Route path="/validator" exact={true} component={Validator} />
          <Route path="/test" exact={true} component={Test} />
          <Route path="/age" extact={true} component={AgeValidator} />
        </Switch>
      </Router>
    );
  }
}

export default App;
