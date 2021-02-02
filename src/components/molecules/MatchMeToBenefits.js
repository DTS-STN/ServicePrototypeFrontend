import React from "react";
import { ActionButton } from "../atoms/ActionButton";
import PropTypes from "prop-types";

/**
 * This component shows match me to benefits button and questions when authenticated and clicked
 */
export function MatchMeToBenefits(props) {
  return (
    <div>
      <ActionButton
        id="MatchMeToBenefits"
        text={props.text}
        className={"bg-bg-gray-dk text-white hover:bg-black"}
        onClick={props.onClick}
      />
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
