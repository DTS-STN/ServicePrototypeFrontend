import React from "react";
import PropTypes from "prop-types";

/**
 * Button component which is used to trigger actions on the page
 */
export function ActionButton(props) {
  return (
    <button
      className={`flex justify-center content-center h-auto w-auto p-1 ${
        props.rounded
          ? "rounded-full py-2 px-4"
          : props.halfRound
          ? "rounded-r-full"
          : props.notRound
          ? "rounded-sm"
          : "rounded-md"
      } shadow-lg ${
        props.invert
          ? "bg-gray-light text-text-gray-dk border border-gray-md hover:bg-bg-gray-dk hover:text-white focus:bg-bg-gray-dk focus:text-white"
          : props.className
      } text-sm px-4 focus:outline-none`}
      onClick={props.onClick}
      onMouseEnter={props.onHover}
      onMouseLeave={props.onMouseLeave}
      id={props.id}
      data-cy={props.id}
    >
      {props.icon ? (
        <span className={props.icon} data-testid={props.dataTestId} />
      ) : undefined}
      {props.text}
      {props.children}
      {props.icon2 ? (
        <span className={props.icon2} data-testid={props.dataTestId} />
      ) : undefined}
    </button>
  );
}

ActionButton.propTypes = {
  /**
   * This will add the smallest rd css to the button
   */
  notRound: PropTypes.bool,
  /**
   * This will add a img inside the button when needed
   */
  icon: PropTypes.string,
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
