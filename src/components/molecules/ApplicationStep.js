import React from "react";
import PropTypes from "prop-types";
import clock from "../../assets/images/clock.svg";

export function ApplicationStep({
  stepNumber,
  stepStatus,
  stepDescription,
  date,
}) {
  return (
    <div className="flex flex-row">
      <p className="w-1/6 pl-4 text-3xl">{stepNumber}</p>
      <div className="w-4/6 flex flex-col">
        <p className="font-bold">{stepStatus}</p>
        <p>{stepDescription}</p>
      </div>
      <div className="w-1/6 flex flex-row">
        <img alt="" src={clock} className="self-center"></img>
        <p className="w-2/3 self-center pl-2">{date}</p>
      </div>
    </div>
  );
}
ApplicationStep.propTypes = {
  /**
   * Step Number
   */
  stepNumber: PropTypes.string.isRequired,
  /**
   * Status of Step
   */
  stepStatus: PropTypes.string.isRequired,
  /**
   * Step Description
   */
  stepDescription: PropTypes.string.isRequired,
  /**
   *  Expected Completion Date
   */
  date: PropTypes.string.isRequired,
};
