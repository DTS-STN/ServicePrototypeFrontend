import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import { AppointmentTable } from "../molecules/AppointmentTable";

export function AppointmentCard(props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <p>Appointments</p>
        <ActionButton></ActionButton>
      </div>
      <div>
        <AppointmentTable></AppointmentTable>
      </div>
    </div>
  );
}
