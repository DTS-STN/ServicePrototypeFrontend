import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "./ActionButton";

/**
 * This component is used to create the print and email button
 */
export function EmailPrintButton(props) {
  return (
    <button
      className="flex text-gray-700 hover:text-black"
      onClick={props.onClick}
      onMouseEnter={props.onHover}
      onMouseLeave={props.onMouseLeave}
      id={props.id}
    >
      <span className={`pt-1 -mr-2 ${props.icon}`} />
      <ActionButton
        className={"hover:underline shadow-none"}
        text={props.text}
      />
    </button>
  );
}

EmailPrintButton.propTypes = {
  /**
   * Identifies which button clicked.
   */
  id: PropTypes.string.isRequired,
  /**
   * Text on the button
   */
  text: PropTypes.string.isRequired,
  /**
   * Custome style that used for display icon
   */
  icon: PropTypes.string,
  /**
   * Callback for a click event on the button
   */
  onClick: PropTypes.func,
  /**
   *Callback for when a user's mouse goes over the button
   */
  onHover: PropTypes.func,
  /**
   * Callback for when a user's mouse leaves the button
   */
  onMouseLeave: PropTypes.func,
};
