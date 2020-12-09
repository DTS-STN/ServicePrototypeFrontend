import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { NotFoundPage } from "../pages/404";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
