import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import { AppointmentTable } from "../molecules/AppointmentTable";

export function AppointmentCard(props) {
  return (
    <div className="mt-4 flex flex-col">
      <div className="flex flex-row justify-between">
        <p className="text-xl font-bold">Appointments</p>
        <ActionButton
          className="bg-bg-gray-dk text-white hover:bg-black"
          id="AddAppointment"
          text="Add Appointment"
        ></ActionButton>
      </div>
      <div>
        <AppointmentTable></AppointmentTable>
      </div>
    </div>
  );
}
