import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux";
import { Provider } from "react-redux";
import "./i18n";
import { keycloak } from "./keycloak";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ReactKeycloakProvider authClient={keycloak}>
    <Provider store={store}>
      <App />
    </Provider>
  </ReactKeycloakProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
