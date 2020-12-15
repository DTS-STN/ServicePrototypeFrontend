import React, { useState, useEffect } from "react";

// react router imports
import { useParams, useHistory } from "react-router-dom";

// redux imports
import { useSelector, useDispatch } from "react-redux";
import {
  lifeJourneySelectorFactory,
  benefitForLifeJourney,
} from "../redux/selectors";
import { NETWORK_FAILED_REASONS } from "../redux/actions";
import { getLifeJourney } from "../redux/dispatchers/lifejourneys";
import { getBenefits } from "../redux/dispatchers/benefits";

//component imports
import { ContentPage } from "../components/organisms/ContentPage";
import { ErrorPage } from "../components/organisms/ErrorPage";
import { NotFoundPage } from "./404";
import { Page } from "../components/organisms/Page";
import { Spinner } from "../components/atoms/Spinner";
import { BenefitGrid } from "../components/organisms/BenefitGrid";
import { Title } from "../components/atoms/Title";

import { useTranslation } from "react-i18next";
import {
  deselectBenefitActionCreator,
  selectBenefitActionCreator,
} from "../redux/actions/benefits";

export function LifeJourneyPage() {
  const [triedFetchedBenefits, setTriedFetchedBenefits] = useState(false);
  const [triedFetchLifeJourney, setTriedFetchLifeJourney] = useState(false);

  // react router
  const { id } = useParams();
  const hist = useHistory();

  // benefit redux subscriptions
  const isFetchingBenefits = useSelector(
    (state) => state.benefits.benefitsData.isFetching
  );
  const fetchBenefitsFailed = useSelector(
    (state) => state.benefits.benefitsData.fetchFailed
  );
  const fetchBenefitsFailedObj = useSelector(
    (state) => state.benefits.benefitsData.fetchFailedObj
  );

  const isFetchingLifeJourney = useSelector(
    (state) => state.lifejourneys.lifeJourneysData.isFetching
  );

  const fetchLifeJourneyFailed = useSelector(
    (state) => state.lifejourneys.lifeJourneysData.fetchFailed
  );

  const fetchLifeJourneyFailedReason = useSelector(
    (state) => state.lifejourneys.lifeJourneysData.fetchFailedReason
  );

  const fetchLifeJourneyFailedObj = useSelector(
    (state) => state.lifejourneys.lifeJourneysData.fetchFailedObj
  );

  const lifeJourneySelector = lifeJourneySelectorFactory(id);
  const benefitsForLifeJourneySelector = benefitForLifeJourney(id);

  const lifeJourney = useSelector(lifeJourneySelector);
  const benefitsForLifeJourney = useSelector(benefitsForLifeJourneySelector);
  const benefitKeyToId = useSelector(
    (state) => state.benefits.benefitsData.benefitsKeyToIdMap
  );

  //redux dispatch
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    if (
      !triedFetchLifeJourney &&
      !isFetchingLifeJourney &&
      !fetchLifeJourneyFailed
    ) {
      dispatch(getLifeJourney(id));
      setTriedFetchLifeJourney(true);
    }
  }, [
    triedFetchLifeJourney,
    isFetchingLifeJourney,
    fetchLifeJourneyFailed,
    dispatch,
  ]);

  useEffect(() => {
    if (!triedFetchedBenefits && !isFetchingBenefits && !fetchBenefitsFailed) {
      dispatch(getBenefits());
      setTriedFetchedBenefits(true);
    }
  }, [triedFetchedBenefits, isFetchingBenefits, fetchBenefitsFailed, dispatch]);

  if (fetchLifeJourneyFailed) {
    if (fetchLifeJourneyFailedReason === NETWORK_FAILED_REASONS) {
      return <NotFoundPage />;
    }
    return (
      <ErrorPage
        errorTitle={fetchLifeJourneyFailedReason}
        error={fetchLifeJourneyFailedObj}
      />
    );
  } else if (fetchBenefitsFailed) {
    return (
      <ErrorPage
        errorTitle={fetchBenefitsFailed}
        error={fetchBenefitsFailedObj}
      />
    );
  } else if (!lifeJourney) {
    return (
      <Page>
        <div className="w-full flex justify-center ">
          <Spinner size="large" />
        </div>
      </Page>
    );
  }

  const onBenefitMoreInfo = (benefitID) => {
    hist.push(`/benefit/${benefitKeyToId[benefitID]}`);
  };

  const onBenefitSelect = (benefitId, selected) => {
    selected
      ? dispatch(selectBenefitActionCreator(benefitId))
      : dispatch(deselectBenefitActionCreator(benefitId));
  };

  return (
    <ContentPage
      beforeContent={<Title>{lifeJourney.lifeJourneyTitle}</Title>}
      content={
        lifeJourney.lifeJourneyContent
          ? lifeJourney.lifeJourneyContent
          : "Looks like there is no content yet"
      }
      afterContent={
        benefitsForLifeJourney.length > 0 ? (
          <>
            <h2 className="text-3xl mb-2">Related Benefits</h2>
            <BenefitGrid
              benefits={benefitsForLifeJourney}
              benefitMoreInfoButtonText={t("benefitsMoreInformation")}
              nextPageButtonAriaLabel={t("benefitsNextPage")}
              previousPageButtonAriaLabel={t("benefitsPreviousPage")}
              numberOfPages={Math.ceil(benefitsForLifeJourney.length / 3)}
              numberOfRows={1}
              onMoreInfoClick={onBenefitMoreInfo}
              onBenefitSelect={onBenefitSelect}
            />
          </>
        ) : undefined
      }
    />
  );
}
