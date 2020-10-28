import React from "react";
import PropTypes from "prop-types";

/**
 * combo (label / drop-down) component
 */
export function Combo(props) {
  const {
    customClass,
    customLabelClass,
    customSelClass,
    id,
    lblText,
    required,
    reqText,
    options,
    onChange,
  } = props;

  return (
    <div
      className={`p-4 w-full flex justify-center content-center ${customClass} ? customClass : '' `}
    >
      <div>
        <label
          className={`text-black font-semibold ${
            customLabelClass ? customLabelClass : ""
          } `}
          id={id + "-label"}
          htmlFor={id + "-select"}
          data-cy={id + "-label"}
          // {...rest}
        >
          {required ? <span className="text-red-700 font-bold">* </span> : ""}
          {lblText}
          {required ? (
            <span className="text-red-800 font-bold"> ({reqText}) </span>
          ) : (
            ""
          )}
        </label>
        <select
          className={`w-full rounded  ${customSelClass}`}
          id={id + "-select"}
          data-cy={id + "-label"}
          name={id + "-Select"}
          onChange={onChange}
        >
          {options.map(({ id, name }) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

Combo.propTypes = {
  /**
   * Text for the label
   */
  lblText: PropTypes.string.isRequired,
  /**
   * Optional overrides the default css for the control
   */
  customClass: PropTypes.string,
  /**
   * Optional overrides the default css for the label
   */
  customLabelClass: PropTypes.string,
  /**
   * Optional overrides the default css for the select
   */
  customSelClass: PropTypes.string,
  /**
   * Control ID required for testing must be unique within the page
   */
  id: PropTypes.string.isRequired,
  /**
   * Mark the Control as a mandatory adds star and 'required' text
   */
  required: PropTypes.bool,
  /**
   * thsi will be the required text i.e.: required or requis
   */
  reqText: PropTypes.string,
  /**
   * Object containing a pair {key, value} for each option of the select, the options must be sorted
   */
  options: PropTypes.object.isRequired,
  /**
   * Callback for a onChange event
   */
  onChange: PropTypes.func,
};
