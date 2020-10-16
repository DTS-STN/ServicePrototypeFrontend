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
      } shadow-lg bg-gray-700 text-white text-sm hover:bg-black hover:bg-black`}
      onClick={props.onClick}
      onMouseEnter={props.onHover}
      onMouseLeave={props.onMouseLeave}
    >
      {props.text}
    </button>
  );
}

ActionButton.propTypes = {
  /**
   * The text that the button will display
   */
  text: PropTypes.string.isRequired,

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
