import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { userDataSelector } from "../../redux/selectors";
import { useKeycloak } from "@react-keycloak/web";
import { changeLanguageCreator, LANGUAGES } from "../../redux/actions";
import { getUserData } from "../../redux/dispatchers/user/requestUserData";
import { getClientDash } from "../../redux/dispatchers/benefits";

/**
 * page component complete with canada.ca header and footer
 */
export function Page(props) {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const { keycloak } = useKeycloak();
  const { t } = useTranslation();
  const userProfileData = useSelector(userDataSelector);

  let languageButtonHandler = () => {
    if (language === "en") {
      dispatch(changeLanguageCreator(LANGUAGES.FR));
    } else {
      dispatch(changeLanguageCreator(LANGUAGES.EN));
    }
  };

  useEffect(() => {
    if (keycloak.authenticated && Object.keys(userProfileData).length === 0) {
      dispatch(getUserData(keycloak));
    }
  }, [keycloak, dispatch, userProfileData]);

  let userNameClickHandler = () => {
    dispatch(
      getClientDash(
        keycloak,
        keycloak.authenticated ? keycloak.idTokenParsed.guid : ""
      )
    );
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header
        onLanguageClick={languageButtonHandler}
        headerCanadaCaAltText={t("headerCanadaCaAltText")}
        language={language === "fr" ? "English" : "Français"}
        siteTitle={t("siteTitle")}
        loginText={t("login")}
        logoutText={t("logout")}
        isAuthenticated={keycloak.authenticated}
        onLogin={() => {
          keycloak.login();
        }}
        userName={`${
          keycloak.authenticated ? keycloak.idTokenParsed.name : ""
        }`}
        onLogout={() => keycloak.logout()}
        onUsernameClick={userNameClickHandler}
      />

      <div
        className="w-full md:w-2/3 m-0 md:mr-auto md:ml-auto p-4 md:p-0"
        data-cy={props.dataCy}
      >
        {props.children}
      </div>

      <div className="w-full flex flex-col flex-grow justify-end">
        <Footer
          contactLink={t("contactLink")}
          contactText={t("contactText")}
          termsAndConditionsLink={t("termsAndConditionsLink")}
          termsAndConditionsText={t("termsAndConditionsText")}
          privacyLink={t("privacyLink")}
          privacyText={t("privacyText")}
          footerCanadaCaAltText={t("footerCanadaCaAltText")}
          links={[
            {
              link: t("departmentAndAgenciesLink"),
              linkText: t("departmentAndAgenciesText"),
            },
            {
              link: t("publicServiceAndMilitaryLink"),
              linkText: t("publicServiceAndMilitaryText"),
            },
            {
              link: t("newsLink"),
              linkText: t("newsText"),
            },
            {
              link: t("treatiesLawsAndRegulationLink"),
              linkText: t("treatiesLawsAndRegulationText"),
            },
            {
              link: t("governmentWideReportingLink"),
              linkText: t("governmentWideReportingText"),
            },
            {
              link: t("howGovernmentWorksLink"),
              linkText: t("howGovernmentWorksText"),
            },
          ]}
        />
      </div>
    </div>
  );
}

Page.propTypes = {
  /**
   * content that will go into the page
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  /**
   * This is for adding an id for testing in cypress
   */
  dataCy: PropTypes.string,
};
