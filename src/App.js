import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import register from "./pages/register";
import profile from "./pages/profile";
import login from "./pages/login";
import home from "./pages/home";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={register}></Route>
            <Route exact path="/profile" component={profile}></Route>
            <Route exact path="/login" component={login}></Route>
            <Route exact path="/home" component={home}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}
