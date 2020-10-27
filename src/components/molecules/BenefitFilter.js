import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 * This component displays three navigation buttons which filters out the result of benefits
 */
export function BenefitFilter(props) {
  const handleClick = () => props.filter();

  return (
    <div>
      <p className="text-gray-700 leading-none font-bold">{props.text}</p>
      <div className="w-full md:flex">
        <span>
          <ActionButton
            type="filter"
            text={props.eligible}
            count={props.eligibleCount}
            invert={true}
            onClick={handleClick}
          />
        </span>
        <span className="md:ml-2">
          <ActionButton
            type="filter"
            text={props.help}
            count={props.helpCount}
            invert={true}
            onClick={handleClick}
          />
        </span>
        <span className="md:ml-2">
          <ActionButton
            type="filter"
            text={props.others}
            count={props.othersCount}
            invert={true}
            onClick={handleClick}
          />
        </span>
      </div>
    </div>
  );
}

BenefitFilter.propTypes = {
  /**
   * Text on top of the buttons
   */
  text: PropTypes.string,

  /**
   * Button text that displays Eligible benefits
   */
  eligible: PropTypes.string,

  /**
   * Displays the number of results of eligible benefits
   */
  eligibleCount: PropTypes.number,

  /**
   * Button text that displays Potential help
   */
  help: PropTypes.string,

  /**
   * Displays the number of results of potential help
   */
  helpCount: PropTypes.number,

  /**
   * Other filter options that may be applied
   */
  others: PropTypes.string,

  /**
   * Display the number of results of other option that may applies
   */
  othersCount: PropTypes.number,
};
