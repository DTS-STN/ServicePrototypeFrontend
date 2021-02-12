import React, { useState, useEffect } from "react";

// react router imports
import { useParams } from "react-router-dom";

// i18n imports
import { useTranslation } from "react-i18next";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { benefitSelectorFactory } from "../redux/selectors/benefits";
import { NETWORK_FAILED_REASONS } from "../redux/actions";
import { getBenefit, applyForBenefit } from "../redux/dispatchers";

//component imports
import { ContentPage } from "../components/organisms/ContentPage";
import { ErrorPage } from "../components/organisms/ErrorPage";
import { NotFoundPage } from "./404";
import { Page } from "../components/organisms/Page";
import { Spinner } from "../components/atoms/Spinner";

//keycloak
import { useKeycloak } from "@react-keycloak/web";
import { userDataSelector } from "../redux/selectors";

export function BenefitPage() {
  const [triedFetch, setTriedFetch] = useState(false);
  const { keycloak } = useKeycloak();

  // react router
  const { id } = useParams();

  // redux
  const isFetchingBenefits = useSelector(
    (state) => state.benefits.benefitsData.isFetching
  );

  const fetchBenefitsFailed = useSelector(
    (state) => state.benefits.benefitsData.fetchFailed
  );

  const fetchBenefitsFailedReason = useSelector(
    (state) => state.benefits.benefitsData.fetchFailedReason
  );

  const fetchBenefitsFailedObj = useSelector(
    (state) => state.benefits.benefitsData.fetchFailedObj
  );

  const userProfileData = useSelector(userDataSelector);

  const answers = useSelector((state) => state.answers);

  const benefitSelector = benefitSelectorFactory(id);
  const benefitData = useSelector(benefitSelector);

  const { t } = useTranslation();

  //redux dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    if (!triedFetch && !isFetchingBenefits && !fetchBenefitsFailed) {
      dispatch(getBenefit(id));
      setTriedFetch(true);
    }
  }, [triedFetch, isFetchingBenefits, fetchBenefitsFailed, id, dispatch]);

  const applyButtonClickHandler = () => {
    // if not logged in log in first
    if (!keycloak.authenticated) {
      keycloak.login();
    } else {
      dispatch(
        applyForBenefit(
          benefitData.benefitType,
          keycloak,
          keycloak.authenticated ? keycloak.idTokenParsed.guid : "",
          answers,
          userProfileData
        )
      );
    }
  };

  if (fetchBenefitsFailed) {
    if (fetchBenefitsFailedReason === NETWORK_FAILED_REASONS.NOT_FOUND) {
      return <NotFoundPage />;
    }
    return (
      <ErrorPage
        errorTitle={fetchBenefitsFailedReason}
        error={fetchBenefitsFailedObj}
      />
    );
  } else if (!benefitData) {
    return (
      <Page>
        <div className="w-full flex justify-center ">
          <Spinner size="large" />
        </div>
      </Page>
    );
  }
  return (
    <ContentPage
      content={
        benefitData.benefitContent
          ? benefitData.benefitContent
          : "Looks like there is no content yet"
      }
      benefitId={benefitData}
      GoBackButtonText={t("goBackButton")}
      ApplyButtonText={
        benefitData.benefitTag === "Internal"
          ? t("ApplyButtonText")
          : t("LearnMore")
      }
      dataCy={"apply-button"}
      onApplyButtonClick={applyButtonClickHandler}
    />
  );
}
