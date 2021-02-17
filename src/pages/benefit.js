import React, { useState, useEffect } from "react";

// react router imports
import { useParams } from "react-router-dom";

// i18n imports
import { useTranslation } from "react-i18next";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import { benefitSelectorFactory } from "../redux/selectors/benefits";
import { NETWORK_FAILED_REASONS } from "../redux/actions";
import {
  getBenefit,
  applyForBenefit,
  getEntitlementAmount,
} from "../redux/dispatchers";
import { entitlementSelector } from "../redux/selectors";

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
  const [triedFetchedEntitlement, setTriedFetchedEntitlement] = useState(false);
  const [entitlementReponse, setEntitlementResponse] = useState({});
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

  // entitlement
  const isFetchingEntitlement = useSelector(
    (state) => state.entitlement.isFetching
  );
  const fetchEntitlementFailed = useSelector(
    (state) => state.entitlement.fetchFailed
  );
  const entitlement = useSelector(entitlementSelector);

  const { t } = useTranslation();

  //redux dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    if (!triedFetch && !isFetchingBenefits && !fetchBenefitsFailed) {
      dispatch(getBenefit(id));
      setTriedFetch(true);
    }
  }, [triedFetch, isFetchingBenefits, fetchBenefitsFailed, id, dispatch]);

  useEffect(() => {
    if (
      !triedFetchedEntitlement &&
      !isFetchingEntitlement &&
      !fetchEntitlementFailed
    ) {
      dispatch(
        getEntitlementAmount(
          "ON",
          "HFPIR1",
          keycloak.authenticated ? keycloak.token : "",
          keycloak.authenticated ? keycloak.idTokenParsed.guid : ""
        )
      );
      dispatch(
        getEntitlementAmount(
          "ON",
          "HFPIR2",
          keycloak.authenticated ? keycloak.token : "",
          keycloak.authenticated ? keycloak.idTokenParsed.guid : ""
        )
      );
      dispatch(
        getEntitlementAmount(
          "ON",
          "HFPIR3",
          keycloak.authenticated ? keycloak.token : "",
          keycloak.authenticated ? keycloak.idTokenParsed.guid : ""
        )
      );
      setTriedFetchedEntitlement(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    triedFetchedEntitlement,
    isFetchingEntitlement,
    fetchEntitlementFailed,
    dispatch,
  ]);

  useEffect(() => {
    setEntitlementResponse(entitlement);
  }, [
    triedFetchedEntitlement,
    isFetchingEntitlement,
    fetchEntitlementFailed,
    dispatch,
  ]);

  // const showEntitlementClickHandler = () => {
  //   // This is for testing ONLY
  //   if (keycloak.authenticated) {
  //     let entitlementData = `  Entitlement. BaseRate = ${entitlement["baseRate"]},
  //       Prov. Rate = , ${entitlement["provincialRate"]},
  //       Grant = , ${entitlement["entitlementGrant"]}`;
  //     setEntitlementData(entitlementData);
  //     console.log(entitlementData);
  //   }
  // };

  const applyButtonClickHandler = () => {
    // if not logged in log in first
    if (!keycloak.authenticated) {
      keycloak.login();
    } else if (benefitData.benefitTag.includes("External")) {
      window.open("https://".concat(benefitData.redirectUrl), "_blank");
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
      DisplayEntitlementButtonText={t("displayEntitlementButton")}
      TableContent={entitlement}
      GoBackButtonText={t("goBackButton")}
      ApplyButtonText={
        benefitData.benefitTag.includes("Internal")
          ? t("ApplyButtonText")
          : t("LearnMore")
      }
      dataCy={"apply-button"}
      onApplyButtonClick={applyButtonClickHandler}
    />
  );
}
