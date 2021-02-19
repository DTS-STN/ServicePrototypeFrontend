import React, { useState, useEffect, useRef } from "react";

//redux imports
import {
  questionsSelector,
  eligibleBenefitsSelector,
} from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { getQuestions } from "../redux/dispatchers/questions";
import { getBenefits } from "../redux/dispatchers/benefits";

//keycloack
import { useKeycloak } from "@react-keycloak/web";
import { requestEligibility } from "../redux/dispatchers/benefits/requestEligibility";
import { setAnswerActionCreator } from "../redux/actions/answers";

//component imports
import { Page } from "../components/organisms/Page";
import { ResourceGrid } from "../components/organisms/ResoursesGrid";
import { ProfileCard } from "../components/organisms/ProfileCard";
import { NotificationCard } from "../components/organisms/NotificationCard";
import { AppointmentCard } from "../components/organisms/AppointmentCard";
import { ServiceProvidersCard } from "../components/organisms/ServiceProvidersCard";
import { JourneyCard } from "../components/organisms/JourneyCard";
import { ApplicationStatusCard } from "../components/organisms/ApplicationStatusCard";
import { QuestionCard } from "../components/organisms/QuestionCard";
import { BenefitsCard } from "../components/organisms/BenefitsCard";

export function Dashboard() {
  const { keycloak } = useKeycloak();

  const dispatch = useDispatch();

  const questions = useSelector(questionsSelector);
  const answers = useSelector((state) => state.answers);
  const eligibleBenefitsData = useSelector(eligibleBenefitsSelector);

  //redux subcriptions
  const isFetchingBenefits = useSelector(
    (state) => state.benefits.benefitsData.isFetching
  );
  const fetchBenefitsFailed = useSelector(
    (state) => state.benefits.benefitsData.fetchFailed
  );
  const isFetchingQuestions = useSelector(
    (state) => state.questions.isFetching
  );
  const fetchQuestionsFailed = useSelector(
    (state) => state.questions.fetchFailed
  );
  const fetchBenefitsEligibilityFailed = useSelector(
    (state) => state.benefits.benefitsEligibility.fetchFailed
  );

  const [triedFetchedBenefits, setTriedFetchedBenefits] = useState(false);
  const [triedFetchedQuestions, setTriedFetchedQuestions] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [previouBtnDisabled, setPreviousBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [nextButtonText, setNextButtonText] = useState("Next");
  const [triedFetchElegibility, setTriedFetchElegibility] = useState(false);

  const loginButtonClick = () => {
    keycloak.login();
  };

  // iframe Ref
  const iframe = useRef(null);

  //message listener
  const messageListener = (event) => {
    if (event.data === "ready" && iframe && iframe.current) {
      iframe.current.contentWindow.postMessage(
        { jwt: keycloak.token, guid: keycloak.idTokenParsed.guid },
        "*"
      );
    }
  };

  useEffect(() => {
    window.addEventListener("message", messageListener);

    return () => window.removeEventListener("message", messageListener);
  }, []);

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

  const questionOnChangeHandler = ({ key, value }) => {
    dispatch(setAnswerActionCreator(key, value));
    setNextBtnDisabled(false);
  };

  const nextCurrentQuestion = () => {
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
  };

  const prevCurrentQuestion = () => {
    if (currentQuestionIndex - 1 === 0) {
      setPreviousBtnDisabled(true);
    }
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setNextButtonText("Next");
    }
    if (currentQuestionIndex <= 1) {
      setPreviousBtnDisabled(true);
    }
    if (nextBtnDisabled) {
      setNextBtnDisabled(false);
    }
  };

  return (
    <Page>
      <ProfileCard
        isAuthenticated={keycloak.authenticated}
        userName={`${
          keycloak.authenticated ? keycloak.idTokenParsed.name : ""
        }`}
        loginButtonClick={loginButtonClick}
      ></ProfileCard>
      {keycloak.authenticated ? (
        <div>
          <NotificationCard></NotificationCard>
          <JourneyCard></JourneyCard>
          <BenefitsCard
            questionnaireCompleted={triedFetchElegibility}
            foundBenefits={eligibleBenefitsData}
            failedFetch={fetchBenefitsEligibilityFailed}
          ></BenefitsCard>
          {questions[currentQuestionIndex] ? (
            <QuestionCard
              id={questions[currentQuestionIndex].questionId}
              textRequired="Required"
              questionTitle={questions[currentQuestionIndex].questionText}
              options={questions[currentQuestionIndex].questionOptions}
              onChange={questionOnChangeHandler}
              prevText="Previous"
              onPrevClick={prevCurrentQuestion}
              disabledPrev={previouBtnDisabled}
              nextText={nextButtonText}
              onNextClick={nextCurrentQuestion}
              disabledNext={nextBtnDisabled}
              answer={answers[questions[currentQuestionIndex].questionId]}
            ></QuestionCard>
          ) : (
            ""
          )}
          <ApplicationStatusCard></ApplicationStatusCard>
          <AppointmentCard></AppointmentCard>
          <ResourceGrid />
          <ServiceProvidersCard></ServiceProvidersCard>
          <iframe
            ref={iframe}
            style={{
              position: "fixed",
              height: "500px",
              width: "400px",
              bottom: "0",
              right: "0",
            }}
            src="https://vigilant-mayer-92de00.netlify.app/"
            // src="http://localhost:3001"
            title="Chatbot"
          ></iframe>
        </div>
      ) : (
        ""
      )}
    </Page>
  );
}
