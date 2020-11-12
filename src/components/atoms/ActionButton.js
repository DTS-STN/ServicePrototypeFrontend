import React from "react";
import PropTypes from "prop-types";

/**
 * Button component which is used to trigger actions on the page
 */
export function ActionButton(props) {
  return (
    <button
      className={`flex justify-center content-center h-auto w-auto p-1 ${
        props.rounded ? "rounded-full py-2 px-4" : "rounded-md"
      } shadow-lg ${
        props.invert
          ? "bg-gray-100 text-gray-700 border border-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
          : props.className
      } text-sm px-4 focus:outline-none`}
      onClick={props.onClick}
      onMouseEnter={props.onHover}
      onMouseLeave={props.onMouseLeave}
      id={props.id}
      data-testid={props.dataTestId}
    >
      {props.icon ? <span className={props.icon} /> : undefined}
      {props.text}
      {props.children}
    </button>
  );
}

ActionButton.propTypes = {
  /**
   * The text that the button will display
   */
  text: PropTypes.string.isRequired,

  /**
   * Identify which button being clicked
   */
  id: PropTypes.string,

  /**
   * Inverted color styling on the buttons as an default option
   */
  invert: PropTypes.bool,

  /**
   * Boolean flag that specifies the button should be rounded
   */
  rounded: PropTypes.bool,

  /**
   * Callback for a click event on the button
   */
  onClick: PropTypes.func,

  /**
   * Callback for when a user's mouse goes over the button
   */
  onHover: PropTypes.func,

  /**
   * Callback for when a user's mouse leaves the button
   */
  onMouseLeave: PropTypes.func,

  /**
   * css overrides for button
   */
  className: PropTypes.string,

  /**
   * any other elements you want to add to the button
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  /**
   * Test id for unit test
   */
  dataTestId: PropTypes.string,
};
