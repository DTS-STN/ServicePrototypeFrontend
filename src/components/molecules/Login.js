import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 * This component is for the login button :)
 *
 *  NOTE:  the idea is to add to this component (box around, text as per design, etc. )
 *
 */
export function Login(props) {
  return (
    <div className="flex">
      <ActionButton
        className={"bg-bg-gray-dk text-white hover:bg-black"}
        id="login"
        text={props.text}
        onClick={props.onClick}
        dataTestId="loginButton"
      />
    </div>
  );
}

/**
 * Login text
 * TODO Logout text
 * TODO show login or logout based on a flag (true/false like the language button)
 */

Login.propTypes = {
  /**
   * Text for the login button
   */
  text: PropTypes.string.isRequired,
  /**
   * Event Handler when button clicked
   */
  onClick: PropTypes.func,
};
