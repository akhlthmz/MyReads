import React, { Component } from "react";
import { Route } from "react-router-dom";
import App from "./App";
import Search from "./Components/Search";

class Router extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/search" component={Search} />
      </div>
    );
  }
}

export default Router;
