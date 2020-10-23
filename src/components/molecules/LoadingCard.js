import React from "react";
import PropTypes from "prop-types";
import { BenefitCardBox } from "../atoms/BenefitCardBox";

/**
 * Placeholder card with pulsing animation used as a placeholder until
 * the actual benefits card load
 */

export function LoadingCard(props) {
  return (
    <BenefitCardBox dark={props.isDark === true}>
      <div className="flex justify-between items-center w-full animate-pulse">
        <div className="flex flex-col justify-start w-full">
          <div
            className={`h-4 ${
              props.isDark ? "bg-black" : "bg-gray-500"
            } rounded w-3/4 mb-2`}
          />
          <div
            className={`h-2 ${
              props.isDark ? "bg-black" : "bg-gray-500"
            } rounded w-20`}
          />
        </div>
      </div>
      <div
        className={`m-auto animate-pulse ${
          props.isDark ? "bg-black" : "bg-gray-500"
        } rounded w-full h-24`}
      />
    </BenefitCardBox>
  );
}

LoadingCard.propTypes = {
  /**
   * boolean flag to specify the card should be dark
   */
  isDark: PropTypes.bool,
};
