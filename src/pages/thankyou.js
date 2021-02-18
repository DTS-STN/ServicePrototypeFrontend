import React from "react";

// i18n imports
import { useTranslation } from "react-i18next";

// component imports
import { Title } from "../components/atoms/Title";
//component imports
import { ContentPage } from "../components/organisms/ContentPage";

// react router imports
import { useHistory } from "react-router-dom";

export function ThankYouPage() {
  const { t } = useTranslation();
  // react router
  const history = useHistory();

  //Handler for going to home
  const goBackHomeClickHandler = () => {
    history.push(`/`);
  };

  return (
    <ContentPage
      beforeContent={<Title>{t("thankYouTitle")}</Title>}
      content={t("thankYouContent")}
      GoBackButtonText={t("goBackButton")}
      goBackHomeClickHandler={goBackHomeClickHandler}
    />
  );
}
