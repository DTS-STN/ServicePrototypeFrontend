import React from "react";
import PropTypes from "prop-types";

/**
 * Box for benefit card which contains the benefit card items
 */
export function BenefitCardBox(props) {
  return (
    <div
      className={`flex flex-col md:w-2/6 sm:w-full rounded-md shadow${
        props.dark ? " bg-gray-300" : ""
      }`}
      style={{ height: "300px" }}
    >
      {props.children}
    </div>
  );
}

BenefitCardBox.propTypes = {
  /**
   * boolean flag that specifies the background should be dark
   */
  dark: PropTypes.bool,
  /**
   * children elements of the box
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
