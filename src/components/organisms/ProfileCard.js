import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

export function ProfileCard({ isAuthenticated, userName, loginButtonClick }) {
  return (
    <div className="mt-8 flex flex-col">
      {isAuthenticated ? (
        <div>
          <h1 className="text-3xl text-center"> Welcome Back, {userName} </h1>
          <p className="text-center">Your Last Login was 02/13/2021</p>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-center"> Welcome </h1>
          <ActionButton
            className="mx-auto mt-4 bg-bg-gray-dk text-white hover:bg-black"
            id="ViewDashboard"
            text="View Dashboard"
            onClick={loginButtonClick}
          ></ActionButton>
        </div>
      )}
    </div>
  );
}
ProfileCard.propTypes = {
  /**
   * Bool to check if logged in
   */
  isAuthenticated: PropTypes.bool.isRequired,
  /**
   * Name of User
   */
  userName: PropTypes.string.isRequired,
  /**
   * Login function
   */
  loginButtonClick: PropTypes.func.isRequired,
};
