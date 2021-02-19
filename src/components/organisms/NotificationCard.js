import React from "react";
import { ActionButton } from "../atoms/ActionButton";

export function NotificationCard({ gotNotification, notificationsData }) {
  console.log(notificationsData);
  return (
    <div className=" mt-8 bg-header-blue flex flex-row">
      <img alt=""></img>
      {!gotNotification || notificationsData.length == 0 ? (
        <div className="mx-4 py-8">
          <div className="flex flex-col">
            <p className=" mx-auto text-xl text-white">No New Notifications</p>
          </div>
        </div>
      ) : (
        <div className="mx-4 py-8">
          <div className="flex flex-col">
            <p className=" text-xl text-white">You have 1 new Notification</p>
            <p className="text-white">
              An update was recently made to your medical records by "health
              care provider X". To accept, edit or reject the update please view
              your medical records in your profile.
            </p>
            <ActionButton
              className=" w-1/3 mt-4 bg-transparent border-white border-2 text-white hover:bg-black"
              id="ViewMedicalRecords"
              text="View Medical Records"
            ></ActionButton>
          </div>
        </div>
      )}
    </div>
  );
}
