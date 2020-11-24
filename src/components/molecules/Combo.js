import React from "react";
import PropTypes from "prop-types";

/**
 * combo (label / drop-down) component
 */
export function Combo(props) {
  const {
    customDivClass,
    customLabelClass,
    customSelClass,
    id,
    labelText,
    required,
    textRequired,
    options,
    onChange,
  } = props;

  return (
    <form
      className={`p-4 w-full flex flex-col justify-center content-center ${
        customDivClass ? customDivClass : ""
      }`}
    >
      <label
        className={`text-black font-semibold ${
          customLabelClass ? customLabelClass : ""
        } `}
        id={id + "-label"}
        htmlFor={id + "-select"}
        data-cy={id + "-label"}
      >
        {required ? <span className="text-red-700 font-bold">* </span> : ""}
        {labelText}
        {required ? (
          <span className="text-red-800 font-bold"> {textRequired} </span>
        ) : (
          ""
        )}
      </label>
      <select
        id={id + "-select"}
        className={`w-full rounded  ${customSelClass}`}
        data-testid={id + "-select"}
        name={id + "-select"}
        onChange={onChange}
      >
        {options.map(({ id, name, disabled }) => (
          <option key={id} value={name} disabled={disabled}>
            {name}
          </option>
        ))}
      </select>
    </form>
  );
}

Combo.propTypes = {
  /**
   * Text for the label
   */
  labelText: PropTypes.string.isRequired,
  /**
   * Optional overrides the default css for the DIV that surronds the control
   */
  customDivClass: PropTypes.string,
  /**
   * Optional overrides the default css for the label
   */
  customLabelClass: PropTypes.string,
  /**
   * Optional overrides the default css for the select
   */
  customSelectClass: PropTypes.string,
  /**
   * Control ID required for testing must be unique within the page
   */
  id: PropTypes.string.isRequired,
  /**
   * Mark the Control as a mandatory adds star and 'required' text
   */
  required: PropTypes.bool,
  /**
   * thsi will be the required text i.e.: (required) or (requis) must include the brackets
   */
  textRequired: PropTypes.string,
  /**
   * Object containing a pair {key, value} for each option of the select, the options must be sorted
   */
  options: PropTypes.array.isRequired,
  /**
   * Callback for a onChange event
   */
  onChange: PropTypes.func,
};
