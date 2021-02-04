import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import { Link } from "react-router-dom";

/**
 * This component show login or a logout button according to the user authenticated flag
 */
export function LogInOut(props) {
  return (
    <div className="flex justify-end">
      {props.isAuthenticated ? (
        <div className="text-white font-normal pt-1 pr-4">
          <span data-cy={props.dataCy} onClick={props.onUsernameClick}>
            <span className="cursor-pointer hover:underline mr-1">
              {props.userName}
            </span>
          </span>
          <span>
            {" "}
            {/* This is tempory should ideally create a menu item for logged in users */}
            <Link
              to="/cases"
              className="border-l-2 border-white-600 ml-1 pl-2 cursor-pointer hover:underline "
            >
              {" "}
              My cases{" "}
            </Link>
          </span>
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
