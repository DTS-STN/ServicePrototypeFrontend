import React, { useEffect } from "react";
import "./tailwind.output.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Routes from "./router";

function App() {
  // i18n
  let { i18n } = useTranslation();

  // state subscription to language
  const language = useSelector((state) => state.language);

  // effect to handle language switching based on redux state
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [i18n, language]);

  return <Routes />;
}

export default App;
