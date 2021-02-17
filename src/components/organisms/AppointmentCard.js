import React from "react";
import { ActionButton } from "../atoms/ActionButton";
import { AppointmentTable } from "../molecules/AppointmentTable";

export function AppointmentCard() {
  return (
    <div className="mt-8 flex flex-col">
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
