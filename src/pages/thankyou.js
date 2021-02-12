import React from "react";

// i18n imports
import { useTranslation } from "react-i18next";

// component imports
import { Title } from "../components/atoms/Title";
//component imports
import { ContentPage } from "../components/organisms/ContentPage";

export function ThankYouPage() {
  const { t } = useTranslation();

  return (
    <ContentPage
      beforeContent={<Title>{t("thankYouTitle")}</Title>}
      content={t("thankYouContent")}
      GoBackButtonText={t("goBackButton")}
    />
  );
}
