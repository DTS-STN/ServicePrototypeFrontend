import React, { useState, useEffect } from "react";

// i18n imports
import { useTranslation } from "react-i18next";

// redux imports
import { lifeJourneysDataSelector } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { getBenefits, getBenefitsCount } from "../redux/dispatchers/benefits";
import { getLifeJourneys } from "../redux/dispatchers/lifejourneys";
//react router

import { useHistory } from "react-router-dom";

// component imports
import { Page } from "../components/organisms/Page";
import { Title } from "../components/atoms/Title";
import { LifeJourneyGrid } from "../components/organisms/LifeJourneyGrid";
import { ErrorPage } from "../components/organisms/ErrorPage";
import { SearchBar } from "../components/molecules/SearchBar";

export function Home() {
  const [triedFetchedBenefitsCount, setTriedFetchBenefitsCount] = useState(
    false
  );
  const [triedFetchedBenefits, setTriedFetchedBenefits] = useState(false);

  const [triedFetchLifeJourneys, setTriedFetchLifeJourneys] = useState(false);

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
        <Title dataCy={"home-page-title"}>{t("homePageTitle")}</Title>
        <SearchBar
          text={t("searchBarText")}
          buttonText={t("searchButtonText")}
          placeholder={t("textFieldPlaceholder")}
        />
        <h2 className="text-3xl mb-2">{t("chooseYourTopic")}</h2>
        <LifeJourneyGrid
          lifeJourneys={lifeJourneyData || []}
          onLifeJourneyClick={onLifeJourneyClick}
        />
      </main>
    </Page>
  );
}
