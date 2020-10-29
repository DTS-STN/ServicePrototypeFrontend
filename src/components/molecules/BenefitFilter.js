import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import { FilteredBenefitsCounter } from "../atoms/FilteredBenefitsCounter";

/**
 * This component displays three navigation buttons which filters out the result of benefits
 */
export function BenefitFilter(props) {
  const handleClick = (event) => props.onFilter(event.currentTarget.id);

  return (
    <div>
      <p className="text-gray-700 leading-none font-bold">{props.text}</p>
      <div className="w-full md:flex">
        <span>
          <ActionButton
            id="eligible"
            text={props.eligible}
            invert={props.isSelectedEligible === false}
            onClick={handleClick}
          >
            <FilteredBenefitsCounter count={props.eligibleCount} />
          </ActionButton>
        </span>
        <span className="md:ml-2">
          <ActionButton
            id="help"
            text={props.help}
            invert={props.isSelectedHelp === false}
            onClick={handleClick}
          >
            <FilteredBenefitsCounter count={props.helpCount} />
          </ActionButton>
        </span>
        <span className="md:ml-2">
          <ActionButton
            id="others"
            text={props.others}
            invert={props.isSelectedOthers === false}
            onClick={handleClick}
          >
            <FilteredBenefitsCounter count={props.othersCount} />
          </ActionButton>
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

  /**
   * Handler when filter options clicked
   */
  onFilter: PropTypes.func,
};
