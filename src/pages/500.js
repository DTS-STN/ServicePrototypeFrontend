import React from "react";

// i18n imports
import { useTranslation } from "react-i18next";

import { ErrorPage } from "../components/organisms/ErrorPage";

export function InternalServerErrorPage() {
  const { t } = useTranslation();
  return (
    <ErrorPage errorTitle={t("urlOpenError")} error={t("urlOpenErrorInfo")} />
  );
}
