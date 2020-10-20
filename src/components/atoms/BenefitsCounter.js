import React from "react";
import PropTypes from "prop-types";

/**
 * The counter component that keeps track of the total number of benefits that claimant is eligible
 */
export function BenefitsCounter(props) {
  return (
    <div className="text-center m-auto">
      <div className="text-6xl -mb-6">{props.counter}</div>
      <p className="text-sm">{props.text}</p>
    </div>
  );
}

BenefitsCounter.propTypes = {
  /**
   * number of benefits
   */
  counter: PropTypes.number,
  /**
   *
   */
  text: PropTypes.string,
};
