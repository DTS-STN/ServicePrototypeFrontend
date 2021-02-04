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

  // TO DO MOVE THIS INTO A SEPARATE COMPONENT
  const statusColors = {
    Open: "#3A73D8",
    Active: "#3ab4d8",
    Approved: "#87c673",
    Submitted: "#1C3A5A",
    Suspended: "#8a4864",
    "Pending Closure": "#B0B5CA",
    Closed: "#6D7486",
  };
  // iframe Ref
  let iframe;

  //message listner
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
  }, [triedFetchedCases, isFetchingCases, fetchCasesFailed, dispatch]);

  // if (fetchCasesFailed) {
  //   return (
  //     <ErrorPage
  //       errorTitle={t("somethingWentWrong")}
  //       error={fetchCasesFailed ? fetchCasesFailedObj : ""}
  //     />
  //   );
  // }
  return (
    <Page>
      <main className="font-sans">
        <Title dataCy={"case-page-title"}>{t("casePageTitle")}</Title>
        <section
          className="border-t border-b pt-2 pb-2 mt-8"
          data-cy="eligibleBenefitsHeader"
        >
          <div className="flex m-auto items-start relative">
            <section className="flex mb-12 md:absolute md:right-0"></section>
          </div>
          <ul>
            {casesData.map(function (obj, index) {
              // TO DO BREAK THIS OUT INTO ITS OWN COMPONENT AND REMOVE INLINE STYLES
              return (
                <li
                  key={index}
                  style={{ backgroundColor: "#EFEFEF" }}
                  className="mt-5 mb-5 p-5"
                >
                  <div className="grid grid-cols-2">
                    <div className="">
                      <span className="block">
                        <span className="font-bold">
                          {t("caseReferenceLabel")}
                        </span>{" "}
                        | {obj.referenceNumber}
                      </span>
                      <span className="block">
                        <span className="font-bold">
                          {t("caseBenefitTypeLabel")}
                        </span>{" "}
                        | {obj.benefitType}
                      </span>
                    </div>
                    <div className="text-right">
                      <div
                        className="inline-block p-2 text-center"
                        style={{
                          backgroundColor: statusColors[obj.status],
                          color: "white",
                          width: "180px",
                          borderRadius: "8px",
                        }}
                      >
                        {obj.status}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
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
            // src="https://vigilant-mayer-92de00.netlify.app/"
            src="http://localhost:3001"
            title="Chatbot"
          ></iframe>
        </section>
      </main>
    </Page>
  );
}
