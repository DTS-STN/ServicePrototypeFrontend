import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

export function NotificationCard(props) {
  return (
    <div className=" mt-8 bg-bg-gray-dk flex flex-row">
      <img alt=""></img>
      <div className="mx-4 py-8">
        <div className="flex flex-col">
          <p className=" text-xl text-white">You have 1 new Notification</p>
          <p className="text-white">
            An update was recently made to your medical records by "health care
            provider X". To accept, edit or reject thr update please view your
            medical records in your profile.
          </p>
          <ActionButton
            className=" w-1/3 mt-4 bg-transparent border-white border-2 text-white"
            id="ViewMedicalRecords"
            text="View Medical Records"
          ></ActionButton>
        </div>
      </div>
    </div>
  );
}
