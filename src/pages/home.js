import React, { useState, useEffect, useCallback } from "react";

// i18n imports
import { useTranslation } from "react-i18next";

// redux imports
import { benefitsDataSelector } from "../redux/selectors";
import { lifeJourneysDataSelector } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { getBenefits, getBenefitsCount } from "../redux/dispatchers/benefits";
import { getLifeJourneys } from "../redux/dispatchers/lifejourneys";
import {
  deselectBenefitActionCreator,
  selectBenefitActionCreator,
} from "../redux/actions/benefits";

//react router

import { useHistory } from "react-router-dom";

// component imports
import { Page } from "../components/organisms/Page";
import { PageDescription } from "../components/atoms/PageDescription";
//import { Title } from "../components/atoms/Title";
import { BenefitGrid } from "../components/organisms/BenefitGrid";
import { BenefitsCounter } from "../components/atoms/BenefitsCounter";

import { LifeJourneyGrid } from "../components/organisms/LifeJourneyGrid";
import { ErrorPage } from "../components/organisms/ErrorPage";

import { TitleUserLogout } from "../components/molecules/TitleUserLogout";
import { Login } from "../components/molecules/Login";
import { useKeycloak } from "@react-keycloak/web";

export function Home() {
  const [triedFetchedBenefitsCount, setTriedFetchBenefitsCount] = useState(
    false
  );
  const [triedFetchedBenefits, setTriedFetchedBenefits] = useState(false);

  const [triedFetchLifeJourneys, setTriedFetchLifeJourneys] = useState(false);

  // Keycloak Services
  const { keycloak } = useKeycloak();
  const loginOnClick = useCallback(() => {
    keycloak.login();
  }, [keycloak]);

  // benefit redux subscriptions
  const isFetchingBenefits = useSelector(
    (state) => state.benefits.benefitsData.isFetching
  );
  const isFetchingBenefitsCount = useSelector(
    (state) => state.benefits.benefitsCount.isFetching
  );
  const fetchBenefitsFailed = useSelector(
    (state) => state.benefits.benefitsData.fetchFailed
  );
  const fetchBenefitsCountFailed = useSelector(
    (state) => state.benefits.benefitsCount.fetchFailed
  );

  const fetchBenefitsFailedObj = useSelector(
    (state) => state.benefits.benefitsData.fetchFailedObj
  );
  const fetchBenefitsCountFailedObj = useSelector(
    (state) => state.benefits.benefitsCount.fetchFailedObj
  );
  const benefitsCount = useSelector(
    (state) => state.benefits.benefitsCount.count
  );
  const benefitsData = useSelector(benefitsDataSelector);

  const benefitKeyToId = useSelector(
    (state) => state.benefits.benefitsData.benefitsKeyToIdMap
  );

  const isFetchingLifeJourneys = useSelector(
    (state) => state.lifejourneys.lifeJourneysData.isFetching
  );

  const fetchLifeJourneysFailed = useSelector(
    (state) => state.lifejourneys.lifeJourneysData.fetchFailed
  );

  const fetchLifeJourneysFailedObj = useSelector(
    (state) => state.lifejourneys.lifeJourneysData.fetchFailedObj
  );

  const lifeJourneyData = useSelector(lifeJourneysDataSelector);
  const lifeJourneyKeyToId = useSelector(
    (state) => state.lifejourneys.lifeJourneysData.lifeJourneysKeyToIdMap
  );

  const { t } = useTranslation();

  //redux dispatch
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    if (
      !triedFetchLifeJourneys &&
      !isFetchingLifeJourneys &&
      !fetchLifeJourneysFailed
    ) {
      dispatch(getLifeJourneys());
      setTriedFetchLifeJourneys(true);
    }
  }, [
    triedFetchLifeJourneys,
    isFetchingLifeJourneys,
    fetchLifeJourneysFailed,
    dispatch,
  ]);

  // effect to initially fetch count when component mounts
  useEffect(() => {
    if (
      !triedFetchedBenefitsCount &&
      !isFetchingBenefitsCount &&
      !fetchBenefitsCountFailed
    ) {
      dispatch(getBenefitsCount());
      setTriedFetchBenefitsCount(true);
    }
  }, [
    triedFetchedBenefitsCount,
    isFetchingBenefitsCount,
    fetchBenefitsCountFailed,
    dispatch,
  ]);

  useEffect(() => {
    if (!triedFetchedBenefits && !isFetchingBenefits && !fetchBenefitsFailed) {
      dispatch(getBenefits(undefined, undefined, "created_at:asc"));
      setTriedFetchedBenefits(true);
    }
  }, [triedFetchedBenefits, isFetchingBenefits, fetchBenefitsFailed, dispatch]);

  // handler for when benefit is selected
  const onBenefitSelect = (benefitId, selected) => {
    selected
      ? dispatch(selectBenefitActionCreator(benefitId))
      : dispatch(deselectBenefitActionCreator(benefitId));
  };

  const onBenefitMoreInfo = (benefitKey) => {
    history.push(`/benefit/${benefitKeyToId[benefitKey]}`);
  };

  if (
    fetchBenefitsFailed ||
    fetchBenefitsCountFailed ||
    fetchLifeJourneysFailed
  ) {
    return (
      <ErrorPage
        errorTitle={t("somethingWentWrong")}
        error={
          fetchBenefitsFailed
            ? fetchBenefitsFailedObj
            : fetchBenefitsCountFailedObj
            ? fetchBenefitsCountFailedObj
            : fetchLifeJourneysFailedObj
        }
      />
    );
  }

  const onLifeJourneyClick = (id) => {
    history.push(`/lifejourney/${lifeJourneyKeyToId[id]}`);
  };

  return (
    <Page>
      <main className="font-sans">
        {/* <Title dataCy={"home-page-title"}>{t("homePageTitle")}</Title> */}

        <TitleUserLogout
          titleChildren={t("homePageTitle")}
          titleDataCy={"home-page-title"}
          isAuthenticated={keycloak.authenticated}
          userName={`${
            keycloak.authenticated ? keycloak.idTokenParsed.name : ""
          }`}
          logoutText={t("Logout")}
          onClick={() => keycloak.logout()}
        />

        <Login text="Login" onClick={loginOnClick} />

        <PageDescription dataCy={"home-page-description"}>
          {t("pageDescription")}
        </PageDescription>

        <h2 className="text-3xl mb-2">{t("chooseYourTopic")}</h2>

        <section className="flex mb-12">
          <BenefitsCounter
            dataCy={"home-page-benefit-counter"}
            className="text-center m-auto mr-0 px-6"
            counter={benefitsCount}
            text={t("totalBenefits")}
          />
        </section>

        <section
          className="border-t border-b pt-2 pb-2"
          data-cy="eligibleBenefitsHeader"
        >
          <h2 className="text-3xl mb-2">{t("eligibleBenefitsHeader")}</h2>
          <BenefitGrid
            dataCy={"home-page-benefit-grid"}
            benefitMoreInfoButtonText={t("benefitsMoreInformation")}
            nextPageButtonAriaLabel={t("benefitsNextPage")}
            previousPageButtonAriaLabel={t("benefitsPreviousPage")}
            numberOfPages={
              benefitsCount === 0 ? 1 : Math.ceil(benefitsCount / 6)
            }
            numberOfRows={2}
            onBenefitSelect={onBenefitSelect}
            onMoreInfoClick={onBenefitMoreInfo}
            benefits={benefitsData}
          />
        </section>

        <section>
          <LifeJourneyGrid
            lifeJourneys={lifeJourneyData || []}
            onLifeJourneyClick={onLifeJourneyClick}
          />
        </section>
      </main>
    </Page>
  );
}
