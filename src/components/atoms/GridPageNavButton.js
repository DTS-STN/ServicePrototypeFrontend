import React from "react";
import PropTypes from "prop-types";

/**
 * Button component that can be used to move between pages of cards on a grid
 */
export function GridPageNavButton(props) {
  //handler for click event
  function onClickHandler() {
    props.onClick(props.isNextButton ? "next" : "previous");
  }
  return (
    <button
      className="flex justify-center content-center h-auto w-6 p-1 rounded-sm shadow-md text-white text-sm"
      onClick={onClickHandler}
      aria-label={props.ariaLabel}
      disabled={props.isDisabled === true}
    >
      {props.isNextButton ? (
        <span
          className={`icon-angle-right ${
            props.isDisabled ? "text-gray-500" : "text-black"
          }`}
        />
      ) : (
        <span
          className={`icon-angle-left ${
            props.isDisabled ? "text-gray-500" : "text-black"
          }`}
        />
      )}
    </button>
  );
}

GridPageNavButton.propTypes = {
  /**
   * boolean flag to specify whether this is a next button or a previous button
   */
  isNextButton: PropTypes.bool,

  /**
   * boolean flag to specify whether the button is disabled
   */
  isDisabled: PropTypes.bool,

  /**
   * ariaLabel for accessibility
   */
  ariaLabel: PropTypes.string.isRequired,

  /**
   * handler for when the button is clicked
   */
  onClick: PropTypes.func,
};
