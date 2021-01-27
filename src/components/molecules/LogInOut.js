import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import { Alink } from "../atoms/Alink";

/**
 * This component show login or a logout button according to the user authenticated flag
 */
export function LogInOut(props) {
  //Link for user
  let url = props.curamUaLink;

  return (
    <div className="flex justify-end">
      <div className="text-white font-normal pt-1 pr-4">
        <Alink
          href={url}
          customClass={"text-white hover:text-black"}
          id="CuramUaLink"
        >
          {props.isAuthenticated ? props.userName : ""}
        </Alink>
      </div>

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
   * Link for redrirecting to curam
   */
  curamUaLink: PropTypes.string,
  /**
   * Event Handler for the Login function
   */
  onLogin: PropTypes.func,
  /**
   * Event Handler for the Logout function
   */
  onLogout: PropTypes.func,
};
