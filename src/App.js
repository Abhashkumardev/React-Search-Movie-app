import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/home/Dashboard";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Dashboard} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
