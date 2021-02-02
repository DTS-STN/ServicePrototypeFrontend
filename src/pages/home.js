import React, { useState, useEffect } from "react";

// i18n imports
import { useTranslation } from "react-i18next";

// redux imports
import { benefitsDataSelector } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { getBenefits, getBenefitsCount } from "../redux/dispatchers/benefits";
import {
  deselectBenefitActionCreator,
  selectBenefitActionCreator,
} from "../redux/actions/benefits";

//react router

import { useHistory } from "react-router-dom";

// component imports
import { Page } from "../components/organisms/Page";
import { PageDescription } from "../components/atoms/PageDescription";
import { BenefitGrid } from "../components/organisms/BenefitGrid";
import { BenefitsCounter } from "../components/atoms/BenefitsCounter";
import { ErrorPage } from "../components/organisms/ErrorPage";
import { Title } from "../components/atoms/Title";
import { MatchMeToBenefits } from "../components/molecules/MatchMeToBenefits";
import { Questions } from "../components/molecules/Questions";

//keycloak
import { useKeycloak } from "@react-keycloak/web";

export function Home() {
  const [triedFetchedBenefitsCount, setTriedFetchBenefitsCount] = useState(
    false
  );
  const [triedFetchedBenefits, setTriedFetchedBenefits] = useState(false);

  const { keycloak } = useKeycloak();

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

  const { t } = useTranslation();

  //redux dispatch
  const dispatch = useDispatch();

  const history = useHistory();

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

  const matchMeToBenefitsButtonClickHandler = () => {
    // if not logged in log in first
    if (!keycloak.authenticated) {
      keycloak.login();
    } else {
      //display questions
    }
  };

  if (fetchBenefitsFailed || fetchBenefitsCountFailed) {
    return (
      <ErrorPage
        errorTitle={t("somethingWentWrong")}
        error={
          fetchBenefitsFailed
            ? fetchBenefitsFailedObj
            : fetchBenefitsCountFailedObj
        }
      />
    );
  }

  const onChange = () => {};
  var questions = {
    id: 1,
    required: true,
    textRequired: "test",
    text: "How much income have you earned in Canada the last year?",
    name: "test",
    answers: [
      {
        id: "lt-30k",
        label: "Less than $30,000",
        value: "test",
      },
      {
        id: "30k-to-60k",
        label: "Between $30,000 & $60,000",
        value: "test",
      },
      {
        id: "gt-60k",
        label: "More than $60,000",
        value: "test",
      },
    ],
    onChange: onChange,
  };
  /*2:{
      "id": 2,
      "required": true,
      "text": "How long have you been out of work?",
      "answers": [
        {
          "id": "lt-2weeks",
          "text": "Less than 2 weeks"
        },
        {
          "id": "2weeks-3months",
          "text": "More than 2 weeks but less than 3 months"
        },
        {
          "id": "gt-3months",
          "text": "More than 3 months"
        }
      ]
    },
    3:{
      "id": 3,
      "required": true,
      "text": "Are you able to work / look for work?",
      "answers": [
        {
          "id": "yes",
          "text": "Yes"
        },
        {
          "id": "no",
          "text": "No"
        }
      ]
    },
    4:{
      "id": 4,
      "required": true,
      "text": "Why are you currently out of work?",
      "answers": [
        {
          "id": "lost-job",
          "text": "I lost my job"
        },
        {
          "id": "sick",
          "text": "I am sick/injured"
        },
        {
          "id": "baby",
          "text": "I had a baby"
        }
      ]
    },
    5:{
      "id": 5,
      "required": true,
      "text": "What is your gender?",
      "answers": [
        {
          "id": "male",
          "text": "Male"
        },
        {
          "id": "female",
          "text": "Female"
        }
      ]
    }
    
  }*/

  return (
    <Page>
      <main className="font-sans">
        <Title dataCy={"home-page-title"}>{t("homePageTitle")}</Title>
        <PageDescription dataCy={"home-page-description"}>
          {t("pageDescription")}
        </PageDescription>
        <MatchMeToBenefits
          text={t("matchMeToBenefits")}
          onClick={matchMeToBenefitsButtonClickHandler}
        />
        <Questions questions={questions} />
        <section
          className="border-t border-b pt-2 pb-2 mt-8"
          data-cy="eligibleBenefitsHeader"
        >
          <div className="flex m-auto items-start relative">
            <h2 className="text-3xl mb-2">{t("eligibleBenefitsHeader")}</h2>
            <section className="flex mb-12 md:absolute md:right-0">
              <BenefitsCounter
                dataCy={"home-page-benefit-counter"}
                className="text-center m-auto mr-0 px-6"
                counter={benefitsCount}
                text={t("totalBenefits")}
              />
            </section>
          </div>
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
      </main>
    </Page>
  );
}
