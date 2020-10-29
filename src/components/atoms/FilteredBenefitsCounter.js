import React from "react";
import PropTypes from "prop-types";

/**
 * This component display the number of filtered benefits
 */
export function FilteredBenefitsCounter(props) {
  return (
    <div className="ml-4 rounded-full h-6 w-6 flex item-center justify-center bg-gray-300 text-gray-700">
      {props.count}
    </div>
  );
}

FilteredBenefitsCounter.propTypes = {
  /**
   * counts the filtered benefits
   */
  count: PropTypes.number,
};
