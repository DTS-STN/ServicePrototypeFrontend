import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { NotFoundPage } from "../pages/404";
import { BenefitPage } from "../pages/benefit";
import { LifeJourneyPage } from "../pages/lifejourneys";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/benefit/:id" component={BenefitPage} />
        <Route path="/lifejourney/:id" component={LifeJourneyPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
