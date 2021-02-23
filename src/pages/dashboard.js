import React, { useState, useEffect, useRef } from "react";

//redux imports
import {
  questionsSelector,
  notificationsDataSelector,
  casesDataSelector,
  benefitsDataSelector,
} from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { getQuestions } from "../redux/dispatchers/questions";
import { getBenefits } from "../redux/dispatchers/benefits";
import { getNotifications } from "../redux/dispatchers/notifications";
import { getCases } from "../redux/dispatchers/cases";

// react router
import { useHistory } from "react-router-dom";

//keycloack
import { useKeycloak } from "@react-keycloak/web";
import { requestEligibility } from "../redux/dispatchers/benefits/requestEligibility";
import { setAnswerActionCreator } from "../redux/actions/answers";

//component imports
import { Page } from "../components/organisms/Page";
import { ResourceGrid } from "../components/organisms/ResourseGrid";
import { ProfileCard } from "../components/organisms/ProfileCard";
import { NotificationCard } from "../components/organisms/NotificationCard";
import { AppointmentCard } from "../components/organisms/AppointmentCard";
import { ServiceProvidersCard } from "../components/organisms/ServiceProvidersCard";
import { JourneyCard } from "../components/organisms/JourneyCard";
import { ApplicationStatusCard } from "../components/organisms/ApplicationStatusCard";
import { QuestionCard } from "../components/organisms/QuestionCard";
import { BenefitsDashboardCard } from "../components/organisms/BenefitsDashboardCard";

export function Dashboard() {
  const { keycloak } = useKeycloak();

  const dispatch = useDispatch();
  const history = useHistory();

  //redux subcriptions

  const benefitKeyToId = useSelector(
    (state) => state.benefits.benefitsData.benefitsKeyToIdMap
  );

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

  const isFetchingNotifications = useSelector(
    (state) => state.notifications.notificationsData.isFetching
  );
  const fetchNotificationsFailed = useSelector(
    (state) => state.notifications.notificationsData.fetchFailed
  );
  const isFetchingCases = useSelector(
    (state) => state.cases.casesData.isFetching
  );
  const fetchCasesFailed = useSelector(
    (state) => state.cases.casesData.fetchFailed
  );

  const questions = useSelector(questionsSelector);
  const answers = useSelector((state) => state.answers);
  const notificationsData = useSelector(notificationsDataSelector);
  const casesData = useSelector(casesDataSelector);
  const benefitsData = useSelector(benefitsDataSelector);

  //  React States
  const [triedFetchedBenefits, setTriedFetchedBenefits] = useState(false);
  const [triedFetchedCases, setTriedFetchedCases] = useState(false);
  const [triedFetchedQuestions, setTriedFetchedQuestions] = useState(false);
  const [triedFetchedNotifications, setTriedFetchedNotifications] = useState(
    false
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [previouBtnDisabled, setPreviousBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [nextButtonText, setNextButtonText] = useState("Next");

  const onBenefitMoreInfo = (benefitKey) => {
    history.replace(`/benefit/${benefitKeyToId[benefitKey]}`);
  };

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

  // benefits use effect
  useEffect(() => {
    if (!triedFetchedBenefits && !isFetchingBenefits && !fetchBenefitsFailed) {
      dispatch(getBenefits(undefined, undefined, "created_at:asc"));
      setTriedFetchedBenefits(true);
    }
  }, [triedFetchedBenefits, isFetchingBenefits, fetchBenefitsFailed, dispatch]);

  // questions use effect
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

  // notifications use effect
  useEffect(() => {
    if (
      !triedFetchedNotifications &&
      !isFetchingNotifications &&
      !fetchNotificationsFailed
    ) {
      dispatch(getNotifications(keycloak));
      setTriedFetchedNotifications(true);
    }
  }, [
    triedFetchedNotifications,
    isFetchingNotifications,
    fetchNotificationsFailed,
    dispatch,
    keycloak,
  ]);

  useEffect(() => {
    if (!triedFetchedCases && !isFetchingCases && !fetchCasesFailed) {
      dispatch(getCases(undefined, undefined, "created_at:asc", keycloak));
      setTriedFetchedCases(true);
    }
  }, [
    triedFetchedCases,
    isFetchingCases,
    fetchCasesFailed,
    dispatch,
    keycloak,
  ]);

  const questionOnChangeHandler = ({ key, value }) => {
    dispatch(
      setAnswerActionCreator(questions[currentQuestionIndex].questionId, value)
    );
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
          <NotificationCard
            notificationsData={notificationsData}
            gotNotifications={triedFetchedNotifications}
          ></NotificationCard>
          <JourneyCard></JourneyCard>
          <BenefitsDashboardCard
            fetchedCases={triedFetchedCases}
            foundCases={casesData}
            failedFetch={fetchCasesFailed}
            benefitsData={benefitsData}
            benefitOnClick={onBenefitMoreInfo}
          ></BenefitsDashboardCard>
          {questions[currentQuestionIndex] ? (
            <QuestionCard
              id={questions[currentQuestionIndex].questionId}
              textRequired="Required"
              questionTitle={questions[currentQuestionIndex].questionText}
              options={questions[currentQuestionIndex].questionOptions}
              questionOnChange={questionOnChangeHandler}
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
