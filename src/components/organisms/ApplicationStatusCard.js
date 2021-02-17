import React from "react";
import { ActionButton } from "../atoms/ActionButton";

export function ApplicationStatusCard() {
  return (
    <div className="mt-8 px-4 rounded-lg shadow flex flex-col">
      <p className="py-4 text-xl font-bold">Status of "X" Application</p>
      <div className="flex-flex-col"></div>
      <p>
        This information represents the most up to date status of your
        application. The estimated processing time of your application could
        change if additonal information is recieved.
      </p>
      <div>
        <ActionButton
          className="mx-auto mb-8 bg-bg-gray-dk text-white hover:bg-black"
          id="ViewApplicaton"
          text="View Application"
        ></ActionButton>
      </div>
    </div>
  );
}
