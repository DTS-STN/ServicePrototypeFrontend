import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import { Title } from "../atoms/Title";

/**
 * This component is for the login button :)
 */
export function TitleUserLogout(props) {
  const handleClick = (event) => props.onClick(event.currentTarget.id);
  const userName = props.userName;

  return (
    <div className="flex">
      <div className="w-4/5">
        <Title data-cy={props.titleDataCy}>{props.titleChildren}</Title>
      </div>

      <div className="flex w-2/5 px-5 border-b mt-2 mb-2 border-h1-underline-color">
        <div className="px-2">
          <span className="text-blue-600">
            {props.isAuthenticated ? "Welcome: " : ""}
          </span>
          <span className="text-blue-600 font-bold">
            {props.isAuthenticated ? userName : ""}
          </span>
        </div>
        <div className="px-2 ">
          {props.isAuthenticated ? (
            <ActionButton
              className={"bg-bg-gray-dk text-white hover:bg-black -mt-1"}
              id="logout"
              text={props.logoutText}
              onClick={handleClick}
              dataTestId="logoutButton"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * TitleUserLogout
 */

TitleUserLogout.propTypes = {
  /**
   * Text for the title
   */
  titleChildren: PropTypes.string.isRequired,
  /**
   * Data-cy for the title
   */
  titleDataCy: PropTypes.string.isRequired,
  /**
   * authentication flag
   */
  isAuthenticated: PropTypes.bool,
  /**
   * text for the user name
   */
  userName: PropTypes.string.isRequired,
  /**
   * Text for the logout button
   */
  logoutText: PropTypes.string.isRequired,
  /**
   * Event Handler when Logout button clicked
   */
  onClick: PropTypes.func,
};
