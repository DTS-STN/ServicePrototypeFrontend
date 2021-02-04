import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 * This component show login or a logout button according to the user authenticated flag
 */
export function LogInOut(props) {
  return (
    <div className="flex justify-end">
      {props.isAuthenticated ? (
        <div
          className="text-white font-normal pt-1 pr-4 cursor-pointer hover:underline"
          data-cy={props.dataCy}
          onClick={props.onUsernameClick}
        >
          {props.userName}
        </div>
      ) : undefined}
      <ActionButton
        invert
        id="LogInOut"
        text={!props.isAuthenticated ? props.loginText : props.logoutText}
        onClick={!props.isAuthenticated ? props.onLogin : props.onLogout}
        dataTestId="LogInOutButton"
      />
    </div>
  );
}

/**
 * LogInOut
 */

LogInOut.propTypes = {
  /**
   * Text for the LogInOut button
   */
  loginText: PropTypes.string,
  /**
   * Text for the LogInOut button
   */
  logoutText: PropTypes.string,
  /**
   * authentication flag
   */
  isAuthenticated: PropTypes.bool,
  /**
   * text for the user name
   */
  userName: PropTypes.string,
  /**
   * Event Handler for the Login function
   */
  onLogin: PropTypes.func,
  /**
   * Event Handler for the Logout function
   */
  onLogout: PropTypes.func,
  /**
   * This is for adding an id for testing in cypress
   */
  dataCy: PropTypes.string,

  /**
   * Event handler for when the username is clicked
   */
  onUsernameClick: PropTypes.func,
};
