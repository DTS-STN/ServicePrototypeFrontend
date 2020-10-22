import React from "react";
import { PropTypes } from "prop-types";

/**
 * Used for navigation in grid components. This is just a simple text component
 * with a callback when its clicked that will pass the page number.
 */
export function PageNumber(props) {
  return (
    <span
      className={`p-auto h-2 w-2 ${
        props.isSelected ? "text-black" : "text-gray-500"
      }`}
      role="button"
      aria-pressed={props.isSelected === true}
      onClick={() => {
        props.onClick(props.number);
      }}
    >
      {props.number}
    </span>
  );
}

PageNumber.propTypes = {
  /**
   * the number of the page that should be rendered
   */
  number: PropTypes.number.isRequired,

  /**
   * a flag to indicate whether or not this page is selected
   */
  isSelected: PropTypes.bool,

  /**
   * call back for when the page is clicked. This function should
   * take one argument which is the number passed in as a prop
   */
  onClick: PropTypes.func,
};
