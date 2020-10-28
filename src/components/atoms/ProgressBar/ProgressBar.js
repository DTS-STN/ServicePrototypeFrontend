import React from "react";
import PropTypes from "prop-types";
import circle from "./circle.png";

/**
 * progressBar () component
 */
export function ProgressBar(props) {
  const { customClass, percentage, alt, id } = props;
  const perc = 582 * (percentage / 100);

  return (
    <div
      className={`bg-pink-500 flex ${customClass} ? customClass : '' `}
      style={{ width: 582 + "px" }}
    >
      <div
        className={`absolute`}
        style={{ width: 582 + "px", height: 1.6 + "rem" }}
      >
        <div className="bg-black block" style={{ width: perc + "px" }}>
          {" "}
          &nbsp;{" "}
        </div>
      </div>
      <div className={`absolute`} style={{ top: 14 + "px" }}>
        <img src={circle} id={id + "-img"} data-cy={id + "-img"} alt={alt} />
      </div>
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
  /**
   * Alt description for the
   */
  alt: PropTypes.string.isRequired,
};
