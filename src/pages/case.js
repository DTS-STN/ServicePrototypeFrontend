import React, { useState, useEffect } from "react";

// i18n imports
import { useTranslation } from "react-i18next";

// redux imports
import { casesDataSelector } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { getCases } from "../redux/dispatchers/cases";

//react router

// component imports
import { Page } from "../components/organisms/Page";
import { ErrorPage } from "../components/organisms/ErrorPage";
import { Title } from "../components/atoms/Title";
import { CasesList } from "../components/organisms/CasesList";

//keycloak
import { useKeycloak } from "@react-keycloak/web";

export function CasesPage() {
  const [triedFetchedCases, setTriedFetchedCases] = useState(false);

  const { keycloak } = useKeycloak();

  // case redux subscriptions
  const isFetchingCases = useSelector(
    (state) => state.cases.casesData.isFetching
  );
  const fetchCasesFailed = useSelector(
    (state) => state.cases.casesData.fetchFailed
  );

  const fetchCasesFailedObj = useSelector(
    (state) => state.cases.casesData.fetchFailedObj
  );

  const casesData = useSelector(casesDataSelector);

  const { t } = useTranslation();

  //redux dispatch
  const dispatch = useDispatch();

  // iframe Ref
  let iframe;

  //message listener
  const messageListener = (event) => {
    if (event.data === "ready") {
      iframe.contentWindow.postMessage(
        { jwt: keycloak.token, guid: "cc6e16b0-db92-459a-91df-f8144befdda9" },
        "*"
      );
    }
  };

  useEffect(() => {
    window.addEventListener("message", messageListener);

    if (!triedFetchedCases && !isFetchingCases && !fetchCasesFailed) {
      dispatch(getCases(undefined, undefined, "created_at:asc", keycloak));
      setTriedFetchedCases(true);
    }
    return () => window.removeEventListener("message", messageListener);
  }, [
    triedFetchedCases,
    isFetchingCases,
    fetchCasesFailed,
    messageListener,
    dispatch,
    keycloak,
  ]);

  if (fetchCasesFailed) {
    return (
      <ErrorPage
        errorTitle={t("somethingWentWrong")}
        error={fetchCasesFailed ? fetchCasesFailedObj : ""}
      />
    );
  }
  return (
    <Page>
      <main className="font-sans">
        <Title dataCy={"case-page-title"}>{t("casePageTitle")}</Title>
        <section
          className="border-t border-b pt-2 pb-2 mt-8"
          data-cy="casesHeader"
        >
          <div className="flex m-auto items-start relative">
            <section className="flex mb-12 md:absolute md:right-0"></section>
          </div>
          <CasesList
            dataCy={"case-page-card-list"}
            cases={casesData}
            numberOfPages={1}
            caseReferenceNumberLabel={t("caseReferenceLabel")}
            caseBenefitTypeLabel={t("caseBenefitTypeLabel")}
            noCasesFoundLabel={t("noCasesFound")}
          />
          <iframe
            ref={(webview) => {
              iframe = webview;
            }}
            style={{
              position: "absolute",
              height: "400px",
              width: "400px",
              bottom: "0",
              right: "0",
            }}
            src="https://vigilant-mayer-92de00.netlify.app/"
            // src="http://localhost:3001"
            title="Chatbot"
          ></iframe>
        </section>
      </main>
    </Page>
  );
}
