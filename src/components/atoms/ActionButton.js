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
          ? "w-full md:w-auto bg-gray-100 text-gray-700 border border-gray-400 px-4 hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-700 focus:text-white"
          : "bg-gray-700 text-white hover:bg-black"
      } text-sm`}
      onClick={props.onClick}
      onMouseEnter={props.onHover}
      onMouseLeave={props.onMouseLeave}
    >
      <div className="flex">
        {props.text}
        {props.children}
      </div>
    </button>
  );
}

ActionButton.propTypes = {
  /**
   * The text that the button will display
   */
  text: PropTypes.string.isRequired,

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
};
