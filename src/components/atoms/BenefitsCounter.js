import React from "react";
import PropTypes from "prop-types";

/**
 * The counter component that keeps track of the total number of benefits
 */
export function BenefitsCounter(props) {
  return (
    <div className="flex m-auto items-start">
      <div
        className="-mb-8"
        data-cy={props.dataCy}
        style={{ fontSize: "48px" }}
      >
        {props.counter}
      </div>
      <p className="text-base mt-8 ml-2">{props.text}</p>
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
  /**
   * pass css class in parent component
   */
  className: PropTypes.string,
  /**
   * This is for adding an id for testing in cypress
   */
  dataCy: PropTypes.string,
};
