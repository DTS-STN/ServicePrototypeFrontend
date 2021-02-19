import React, { useState, useEffect } from "react";

// i18n imports
import { useTranslation } from "react-i18next";

// redux imports
import {
  benefitsDataSelector,
  questionsSelector,
  eligibleBenefitsSelector,
  externalBenefitsDataSelector,
} from "../redux/selectors";
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
import { Questions } from "../components/molecules/Questions";
import { ActionButton } from "../components/atoms/ActionButton";

//keycloak
import { useKeycloak } from "@react-keycloak/web";
import { requestEligibility } from "../redux/dispatchers/benefits/requestEligibility";
import { setAnswerActionCreator } from "../redux/actions/answers";

export function Home() {
  const [triedFetchedBenefitsCount, setTriedFetchBenefitsCount] = useState(
    false
  );
  const [triedFetchedBenefits, setTriedFetchedBenefits] = useState(false);
  const [triedFetchedQuestions, setTriedFetchedQuestions] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [previouBtnDisabled, setPreviousBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [nextButtonText, setNextButtonText] = useState("Next Question");
  const [triedFetchElegibility, setTriedFetchElegibility] = useState(false);

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
  const eligibleBenefitsData = useSelector(eligibleBenefitsSelector);
  const externalBenefitsData = useSelector(externalBenefitsDataSelector);

  const benefitKeyToId = useSelector(
    (state) => state.benefits.benefitsData.benefitsKeyToIdMap
  );

  const fetchBenefitsEligibilityFailed = useSelector(
    (state) => state.benefits.benefitsEligibility.fetchFailed
  );

  const { t } = useTranslation();

  const isFetchingQuestions = useSelector(
    (state) => state.questions.isFetching
  );
  const fetchQuestionsFailed = useSelector(
    (state) => state.questions.fetchFailed
  );

  const questions = useSelector(questionsSelector);
  const answers = useSelector((state) => state.answers);

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
    setDisplayQuestions(true);
  };

  const seeMyCasesButtonClickHandler = () => {
    history.push(`/cases/`);
  };

  if (
    fetchBenefitsFailed ||
    fetchBenefitsCountFailed ||
    fetchBenefitsEligibilityFailed
  ) {
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

  const questionOnChangeHandler = ({ key, value }) => {
    dispatch(setAnswerActionCreator(key, value));
    setNextBtnDisabled(false);
  };

  const nextCurrentQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const answerForQuestion = answers[currentQuestion.questionId];
    if (!answerForQuestion) {
      setNextBtnDisabled(true);
      alert("Answer required for question");
    } else {
      if (currentQuestionIndex === questions.length - 2) {
        setNextButtonText("Submit");
      }
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setNextBtnDisabled(true);
      }

      if (previouBtnDisabled) {
        setPreviousBtnDisabled(false);
      } else if (currentQuestionIndex === questions.length - 1) {
        dispatch(requestEligibility(answers));
        setTriedFetchElegibility(true);
      }
    }
  };

  const prevCurrentQuestion = () => {
    if (currentQuestionIndex - 1 === 0) {
      setPreviousBtnDisabled(true);
    }
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setNextButtonText("Next Question");
    }
    if (currentQuestionIndex <= 1) {
      setPreviousBtnDisabled(true);
    }
    if (nextBtnDisabled) {
      setNextBtnDisabled(false);
    }
  };

  const showCases = () => {
    //show link to cases button if user is logged in
    if (keycloak.authenticated) {
      return (
        <section
          className="border-t border-b pt-2 pb-2 mt-8"
          data-cy="showCasesHeader"
        >
          <div className="flex m-auto items-start relative">
            <h2 className="text-3xl mb-2">{t("yourCases")}</h2>
          </div>
          <ActionButton
            id="GoToCases"
            text={t("See My Cases")}
            className={"bg-bg-gray-dk text-white hover:bg-black"}
            onClick={seeMyCasesButtonClickHandler}
          />
        </section>
      );
    } else {
      return;
    }
  };

  return (
    <Page>
      <main className="font-sans">
        <Title dataCy={"home-page-title"}>{t("homePageTitle")}</Title>
        <PageDescription dataCy={"home-page-description"}>
          {t("pageDescription")}
        </PageDescription>

        {/* Display the questions or button  */}

        <section>
          {displayQuestions ? (
            <Questions
              id={questions[currentQuestionIndex].questionId}
              required={true}
              textRequired="required"
              legend={questions[currentQuestionIndex].questionText}
              name={questions[currentQuestionIndex].questionId}
              options={questions[currentQuestionIndex].questionOptions}
              onChange={questionOnChangeHandler}
              prevText="Previous Question"
              onPrevClick={prevCurrentQuestion}
              disabledPrev={previouBtnDisabled}
              nextText={nextButtonText}
              onNextClick={nextCurrentQuestion}
              disabledNext={nextBtnDisabled}
              answer={answers[questions[currentQuestionIndex].questionId]}
            />
          ) : (
            <ActionButton
              id="MatchMeToBenefits"
              text={t("matchMeToBenefits")}
              className={"bg-bg-gray-dk text-white hover:bg-black"}
              onClick={matchMeToBenefitsButtonClickHandler}
            />
          )}
        </section>

        <section
          className="border-t border-b pt-2 pb-2 mt-8"
          data-cy="eligibleBenefitsHeader"
        >
          <div className="flex m-auto items-start relative">
            <h2 className="text-3xl mb-2">
              {triedFetchElegibility
                ? t("eligibleBenefitsHeader")
                : t("allEligibleBenefitsHeader")}
            </h2>
            <section className="flex mb-12 md:absolute md:right-0">
              <BenefitsCounter
                dataCy={"home-page-benefit-counter"}
                className="text-center m-auto mr-0 px-6"
                counter={
                  triedFetchElegibility
                    ? eligibleBenefitsData.length
                    : benefitsCount
                }
                text={t("totalBenefits")}
              />
            </section>
          </div>
          {triedFetchElegibility ? (
            eligibleBenefitsData.length === 0 ? (
              "No benefits!"
            ) : (
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
                benefits={eligibleBenefitsData}
              />
            )
          ) : (
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
          )}
        </section>

        {triedFetchElegibility ? (
          <section
            className="border-t border-b pt-2 pb-2 mt-8"
            data-cy="eligibleBenefitsHeader"
          >
            <div className="flex m-auto items-start relative">
              <h2 className="text-3xl mb-2">
                {t("otherProviderBenefitsHeader")}
              </h2>
              <section className="flex mb-12 md:absolute md:right-0">
                <BenefitsCounter
                  dataCy={"home-page-benefit-counter"}
                  className="text-center m-auto mr-0 px-6"
                  counter={externalBenefitsData.length}
                  text={t("totalBenefits")}
                />
              </section>
            </div>
            {externalBenefitsData.length === 0 ? (
              "No benefits!"
            ) : (
              <BenefitGrid
                dataCy={"home-page-benefit-grid"}
                benefitMoreInfoButtonText={t("benefitsMoreInformation")}
                nextPageButtonAriaLabel={t("benefitsNextPage")}
                previousPageButtonAriaLabel={t("benefitsPreviousPage")}
                numberOfPages={
                  benefitsCount === 0
                    ? 1
                    : Math.ceil(externalBenefitsData.length / 6)
                }
                numberOfRows={2}
                onBenefitSelect={onBenefitSelect}
                onMoreInfoClick={onBenefitMoreInfo}
                benefits={externalBenefitsData}
              />
            )}
          </section>
        ) : null}
        {showCases()}
      </main>
    </Page>
  );
}
