import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 * This component show login or a logout button according to the user authenticated flag
 */
export function LogInOut(props) {
  return (
    <div className="flex">
      <ActionButton
        className={"bg-bg-gray-dk text-white hover:bg-black"}
        id="LogInOut"
        text={`${props.isAuthenticated ? props.logoutText : props.loginText}`}
        onClick={`${props.isAuthenticated ? props.onLogout : props.onLogin}`}
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
  loginText: PropTypes.string.isRequired,
  /**
   * Text for the LogInOut button
   */
  logoutText: PropTypes.string.isRequired,
  /**
   * authentication flag
   */
  isAuthenticated: PropTypes.bool,
  /**
   * Event Handler for the Login function
   */
  onLogin: PropTypes.func,
  /**
   * Event Handler for the Logout function
   */
  onLogout: PropTypes.func,
};
