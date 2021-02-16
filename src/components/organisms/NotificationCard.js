import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

export function NotificationCard(props) {
  return (
    <div className="flex flex-row">
      <img></img>
      <div className="flex flex-col">
        <p>You have 1 new Notification</p>
        <p> An update was recently made to your medical records...</p>
        <ActionButton></ActionButton>
      </div>
    </div>
  );
}
