import React from "react";
import PropTypes from "prop-types";

/**
 * progress bar component,  meant to display a percentage of the progress
 */
export function ProgressBar(props) {
  const { customClass, percentage, id } = props;

  return (
    <div
      id={id}
      className={`flex border-solid border border-gray-900 ${
        customClass ? customClass : ""
      }`}
    >
      <span
        data-testid={id}
        className="bg-black block"
        style={{ width: percentage + "%", height: "1.2em" }}
      />
    </div>
  );
}

ProgressBar.propTypes = {
  /**
   * Optional overrides the default css for the control
   */
  customClass: PropTypes.string,
  /**
   * Percentage of questions already answered
   */
  percentage: PropTypes.number,
  /**
   * Control ID required for testing must be unique within the page
   */
  id: PropTypes.string.isRequired,
};
