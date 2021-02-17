import React from "react";

export function AppointmentTable() {
  return (
    <table className="w-full mt-4 tabel-fixed">
      <tr>
        <th className="bg-header-blue text-white text-left">Date</th>
        <th className="bg-header-blue text-white text-left">Location</th>
        <th className="bg-header-blue text-white text-left">
          Appointment Type
        </th>
      </tr>
      <tr>
        <td>12/07/2020</td>
        <td>Address</td>
        <td>Description of Appointment</td>
      </tr>
      <tr>
        <td>23/06/2020</td>
        <td>Address</td>
        <td>Description of Appointment</td>
      </tr>
      <tr>
        <td>16/11/2019</td>
        <td>Address</td>
        <td>Description of Appointment</td>
      </tr>
    </table>
  );
}
