import React from "react";

// i18n imports
import { useTranslation } from "react-i18next";

//react router
import { useLocation } from "react-router-dom";

import { ErrorPage } from "../components/organisms/ErrorPage";

export function NotFoundPage() {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <ErrorPage
      errorTitle={t("notFound")}
      error={t("pageDoesntExist") + " " + location.pathname}
    />
  );
}
