import React from "react";
import PropTypes from "prop-types";

export function AppointmentTable(props) {
  return (
    <table>
      <tr>
        <th>Date</th>
        <th>Location</th>
        <th>Appointment Type</th>
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
