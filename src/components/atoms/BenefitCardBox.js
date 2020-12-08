import React from "react";
import PropTypes from "prop-types";

/**
 * Box for benefit card which contains the benefit card items
 */
export function BenefitCardBox(props) {
  return (
    <div
      className={`flex flex-col flex-grow w-full md:w-64 lg:w-1/4 rounded-lg shadow pt-5 pb-5 pl-6 pr-6 m-1 ${
        props.dark ? "bg-gray-300" : ""
      }`}
      style={{ height: "300px" }}
      data-testid={props.dataTestId}
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
   * test id for unit tests
   */
  dataTestId: PropTypes.string,
  /**
   * children elements of the box
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
