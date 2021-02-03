import React, { useState, useEffect } from "react";

// i18n imports
import { useTranslation } from "react-i18next";

// redux imports
import { benefitsDataSelector } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { getBenefits, getBenefitsCount } from "../redux/dispatchers/benefits";
import { getQuestions } from "../redux/dispatchers/questions";
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
  const [triedFetchedQuestions, setTriedFetchedQuestions] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const [displayQuestions, setDisplayQuestions] = useState(false);

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

  const isFetchingQuestions = useSelector(
    (state) => state.questions.isFetching
  );
  const fetchQuestionsFailed = useSelector(
    (state) => state.questions.fetchFailed
  );

  const questionsMap = useSelector(
    (state) => state.questions.questionsData.questionsMap
  );

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

  useEffect(() => {
    if (
      !triedFetchedQuestions &&
      !isFetchingQuestions &&
      !fetchQuestionsFailed
    ) {
      dispatch(getQuestions());
      setTriedFetchedQuestions(true);
    }
  }, [
    triedFetchedQuestions,
    isFetchingQuestions,
    fetchQuestionsFailed,
    dispatch,
  ]);

  useEffect(() => {
    if (questions.length !== 0) {
      setCurrentQuestion(questions[0]);
      setDisplayQuestions(true);
    }
  }, [questions]);

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
      let res = [];
      for (const [key, value] of Object.entries(questionsMap)) {
        res.push(value);
      }
      setQuestions(res);
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
  const changeCurrentQuestion = (id) => {
    console.log(id);
    // setCurrentQuestion(questions[id]);
  };

  return (
    <Page>
      <main className="font-sans">
        <Title dataCy={"home-page-title"}>{t("homePageTitle")}</Title>
        <PageDescription dataCy={"home-page-description"}>
          {t("pageDescription")}
        </PageDescription>

        {displayQuestions ? (
          <Questions
            id={currentQuestion.id.toString()}
            required={true}
            textRequired="required"
            legend={currentQuestion.text}
            name="currentQuestion"
            options={currentQuestion.answers}
            onChange={onChange}
            prevText="Previous Question"
            nextText="Next Question"
            onNextClick={changeCurrentQuestion}
            onPrevClick={changeCurrentQuestion}
          />
        ) : (
          <MatchMeToBenefits
            text={t("matchMeToBenefits")}
            onClick={matchMeToBenefitsButtonClickHandler}
          />
        )}

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
