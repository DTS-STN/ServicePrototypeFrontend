import React from "react";
import PropTypes from "prop-types";

/**
 * The counter component that keeps track of the total number of benefits
 */
export function BenefitsCounter(props) {
  return (
    <div className="text-center m-auto">
      <div className="-mb-8" style={{ fontSize: "100px" }}>
        {props.counter}
      </div>
      <p className="text-base">{props.text}</p>
    </div>
  );
}

BenefitsCounter.propTypes = {
  /**
   * number of benefits
   */
  counter: PropTypes.number,
  /**
   * text under the number of benefits
   */
  text: PropTypes.string,
};
