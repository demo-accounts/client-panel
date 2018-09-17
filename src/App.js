import React, { Component } from "react";
import "./App.css";
import AppNavbar from "./Components/layout/AppNavbar";
import Dashboard from "./Components/layout/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
