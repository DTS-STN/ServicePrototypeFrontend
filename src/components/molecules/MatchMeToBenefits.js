import React from "react";
import { ActionButton } from "../atoms/ActionButton";
import PropTypes from "prop-types";
//keycloak
import { useKeycloak } from "@react-keycloak/web";
// i18n imports
import { useTranslation } from "react-i18next";

/**
 * This component show login or a logout button according to the user authenticated flag
 */
export function MatchMeToBenefits(props) {
  const { keycloak } = useKeycloak();
  const { t } = useTranslation();
  const matchMeToBenefitsButtonClickHandler = () => {
    // if not logged in log in first
    if (!keycloak.authenticated) {
      keycloak.login();
    } else {
    }
  };
  return (
    <div>
      <ActionButton
        id="MatchMeToBenefits"
        text={t("matchMeToBenefits")}
        className={"bg-bg-gray-dk text-white hover:bg-black"}
        onClick={matchMeToBenefitsButtonClickHandler}
      />
      {props.displayQuestion ? <div>Display questions here</div> : null}
    </div>
  );
}

/**
 * MatchMeToBenefits
 */
MatchMeToBenefits.propTypes = {
  /**
   * displayQuestion for checking when to display questions
   */
  displayQuestion: PropTypes.bool,
};
