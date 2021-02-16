import React from "react";
import PropTypes from "prop-types";

export function ProfileCard(props) {
  return (
    <div className="flex flex-col">
      <h1 className="text-center"> Welcome , First Name</h1>
      <p className="text-center"> Your last login was at 11:15am</p>
    </div>
  );
}
