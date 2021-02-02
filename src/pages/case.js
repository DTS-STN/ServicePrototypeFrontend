import React, { useState, useEffect } from "react";

// i18n imports
import { useTranslation } from "react-i18next";

// redux imports
import { benefitsDataSelector } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
// import { getBenefits, getBenefitsCount } from "../redux/dispatchers/benefits";
import { getCases } from "../redux/dispatchers/cases";
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
import { ActionButton } from "../components/atoms/ActionButton";

export function CasesPage() {
  const [triedFetchedBenefitsCount, setTriedFetchBenefitsCount] = useState(
    false
  );
  const [triedFetchedBenefits, setTriedFetchedBenefits] = useState(false);

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
  const benefitsData = useSelector(benefitsDataSelector);

  const benefitKeyToId = useSelector(
    (state) => state.benefits.benefitsData.benefitsKeyToIdMap
  );

  const { t } = useTranslation();

  //redux dispatch
  const dispatch = useDispatch();

  const history = useHistory();

  // iframe Ref
  let iframe;

  // message listener
  const messageListener = (event) => {
    // console.log(event);
    if (event.data === "ready") {
      iframe.contentWindow.postMessage({ jwt: "", guid: "" }, "*");
    }
  };

  useEffect(() => {
    window.addEventListener("message", messageListener);

    if (!triedFetchedBenefits && !isFetchingBenefits && !fetchBenefitsFailed) {
      dispatch(getCases(undefined, undefined, "created_at:asc"));
      setTriedFetchedBenefits(true);
    }

    return () => window.removeEventListener("message", messageListener);
  }, [triedFetchedBenefits, isFetchingBenefits, fetchBenefitsFailed, dispatch]);

  const onBenefitMoreInfo = (benefitKey) => {
    history.push(`/benefit/${benefitKeyToId[benefitKey]}`);
  };

  if (fetchBenefitsFailed) {
    return (
      <ErrorPage
        errorTitle={t("somethingWentWrong")}
        error={fetchBenefitsFailed ? fetchBenefitsFailedObj : ""}
      />
    );
  }

  return (
    <Page>
      <section>
        <main className="font-sans">
          {/* <main className="font-sans">
        <Title dataCy={"home-page-title"}>{t("homePageTitle")}</Title>
        <PageDescription dataCy={"home-page-description"}>
          {t("pageDescription")}
        </PageDescription>
        <ActionButton
          id="MatchMeToBenefits"
          text={t("matchMeToBenefits")}
          className={"bg-bg-gray-dk text-white hover:bg-black"}
        />

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
          </div> */}
          <BenefitGrid
            dataCy={"home-page-benefit-grid"}
            benefitMoreInfoButtonText={t("benefitsMoreInformation")}
            nextPageButtonAriaLabel={t("benefitsNextPage")}
            previousPageButtonAriaLabel={t("benefitsPreviousPage")}
            numberOfPages={1}
            numberOfRows={2}
            // onBenefitSelect={onBenefitSelect}
            // onMoreInfoClick={onBenefitMoreInfo}
            benefits={benefitsData}
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
        </main>
      </section>
    </Page>
  );
}

// import React, { useState, useEffect } from "react";

// // react router imports
// import { useParams } from "react-router-dom";

// // i18n imports
// import { useTranslation } from "react-i18next";

// // redux imports
// import { useSelector, useDispatch } from "react-redux";
// import { caseSelectorFactory } from "../redux/selectors/cases";
// import { NETWORK_FAILED_REASONS } from "../redux/actions";

// //component imports
// import { ContentPage } from "../components/organisms/ContentPage";
// import { getCases } from "../redux/dispatchers/cases";
// import { ErrorPage } from "../components/organisms/ErrorPage";
// import { NotFoundPage } from "./404";
// import { Page } from "../components/organisms/Page";
// import { Spinner } from "../components/atoms/Spinner";

// // variable imports
// import { CURAM_UA_LINK } from "../variables";

// //keycloak
// import { useKeycloak } from "@react-keycloak/web";

// export function CasesPage() {
//   const [triedFetch, setTriedFetch] = useState(false);
//   const { keycloak } = useKeycloak();

//   // react router
//   const { id } = useParams();

//   // redux
//   const isFetchingBenefits = useSelector(
//     (state) => state.benefits.benefitsData.isFetching
//   );

//   const fetchBenefitsFailed = useSelector(
//     (state) => state.benefits.benefitsData.fetchFailed
//   );

//   const fetchBenefitsFailedReason = useSelector(
//     (state) => state.benefits.benefitsData.fetchFailedReason
//   );

//   const fetchBenefitsFailedObj = useSelector(
//     (state) => state.benefits.benefitsData.fetchFailedObj
//   );

//   const benefitSelector = caseSelectorFactory(id);
//   const benefitData = useSelector(benefitSelector);

//   const { t } = useTranslation();

//   //redux dispatch
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!triedFetch && !isFetchingBenefits && !fetchBenefitsFailed) {
//       dispatch(getCases(id));
//       setTriedFetch(true);
//     }
//   }, [triedFetch, isFetchingBenefits, fetchBenefitsFailed, id, dispatch]);

//   const applyButtonClickHandler = () => {
//     // if not logged in log in first
//     if (!keycloak.authenticated) {
//       keycloak.login();
//     } else {
//       window.location.replace(CURAM_UA_LINK);
//     }
//   };

//   if (fetchBenefitsFailed) {
//     if (fetchBenefitsFailedReason === NETWORK_FAILED_REASONS.NOT_FOUND) {
//       return <NotFoundPage />;
//     }
//     return (
//       <ErrorPage
//         errorTitle={fetchBenefitsFailedReason}
//         error={fetchBenefitsFailedObj}
//       />
//     );
//   } else if (!benefitData) {
//     return (
//       <Page>
//         <div className="w-full flex justify-center ">
//           <Spinner size="large" />
//         </div>
//       </Page>
//     );
//   }
//   return (
//     <ContentPage
//       content={
//         benefitData.benefitContent
//           ? benefitData.benefitContent
//           : "Looks like there is no content yet"
//       }
//       ApplyButtonText={t("ApplyButtonText")}
//       onApplyButtonClick={applyButtonClickHandler}
//     />
//   );
// }
