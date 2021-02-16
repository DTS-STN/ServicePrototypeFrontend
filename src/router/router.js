import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { Home } from "../pages/home";
import { NotFoundPage } from "../pages/404";
import { BenefitPage } from "../pages/benefit";
import { CasesPage } from "../pages/case";
import { LifeJourneyPage } from "../pages/lifejourneys";
import { ThankYouPage } from "../pages/thankyou";
import { Page } from "../components/organisms/Page";
import { Spinner } from "../components/atoms/Spinner";
import { Dashboard } from "../pages/dashboard";

function Routes() {
  const { initialized } = useKeycloak();

  // if keycloak is not initialized yet present user with spinner rather than blank page
  if (!initialized) {
    return (
      <Page>
        <div className="w-full flex justify-center ">
          <Spinner size="large" />
        </div>
      </Page>
    );
  }
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/cases" exact component={CasesPage} />
        <Route path="/benefit/:id" component={BenefitPage} />
        <Route path="/lifejourney/:id" component={LifeJourneyPage} />
        <Route path="/case/:id" component={CasesPage} />
        <Route path="/thankyou" component={ThankYouPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
