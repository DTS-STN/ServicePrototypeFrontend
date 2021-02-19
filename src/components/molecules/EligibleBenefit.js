import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

export function EligibleBenefit({ benefitName, benefitLink }) {
  return (
    <div className="flex flex-row bg-gray-light">
      <div>
        <img></img>
      </div>
      <div className="flex flex-col">
        <p className="font-bold">{benefitName}</p>
        <ActionButton></ActionButton>
      </div>
    </div>
  );
}
