import React, { useEffect } from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import "./tailwind.output.css";
import "./icomoon/style.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { languageSelector } from "./redux/selectors";
import Routes from "./router";

import keycloak from "./keycloak";

function App() {
  // i18n
  let { i18n } = useTranslation();

  // state subscription to language
  const language = useSelector(languageSelector);

  // effect to handle language switching based on redux state
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [i18n, language]);

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Routes />
    </ReactKeycloakProvider>
  );
}

export default App;
