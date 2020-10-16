import React from "react";
import PropTypes from "prop-types";

/**
 * Check box input component
 */
export function CheckBox(props) {
  // this function wraps around the provided onChange handler and passes in to it whether
  // the checkbox is checked or not
  function onChangeHandler(e) {
    console.log(e.target.checked);
    props.onChange(e.target.checked);
  }

  return (
    <div className="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
      <input
        type="checkbox"
        className="opacity-0 absolute"
        onChange={onChangeHandler}
        checked={props.checked === true}
        aria-label={props.ariaLabel}
        aria-labelledby={props.ariaLabeledBy}
      />
      <svg
        className={`fill-current${
          props.checked ? " block " : " hidden "
        }w-4 h-4 text-black pointer-events-none`}
        viewBox="0 0 20 20"
      >
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
    </div>
  );
}

CheckBox.propTypes = {
  /**
   * boolean flag to specify whether the CheckBox is checked
   */
  checked: PropTypes.bool,

  /**
   * function to call when a change has happened i.e. someone checked or unchecked the check box
   */
  onChange: PropTypes.func,

  /**
   * aria-label for accessibility purposes
   */
  ariaLabel: PropTypes.string,

  /**
   * aria-labelled-by for accessibility purposes
   */
  ariaLabeledBy: PropTypes.string,
};
