import React from "react";
import PropTypes from "prop-types";
import { Legend } from "../atoms/Legend";
import { Radio } from "../atoms/Radio";

export function RadioGroup(props) {
  const { id, required, textRequired, legend, name, options, onChange } = props;

  function onChangeHandler(e) {
    console.log(e);
    onChange(e);
  }

  return (
    <fieldset>
      <Legend
        id={id}
        required={required}
        strRequired={textRequired}
        legend={legend}
      />

      {options.map(({ id, value, label }) => (
        <Radio
          id={id}
          key={id}
          value={value}
          label={label}
          name={name}
          onChange={() => onChangeHandler(value)}
        />
      ))}
    </fieldset>
  );
}

RadioGroup.propTypes = {
  /**
   * text used mostly for testing, to identify each of the controls must be unique within the page
   */
  id: PropTypes.string,

  /**
   * Main Label for group of Radio buttons
   */
  legend: PropTypes.string,

  /**
   * Required boolean adds a (required)
   */
  required: PropTypes.bool,

  /**
   * Required text (either french or english)
   */
  textRequired: PropTypes.string,

  /**
   * Identifies the group of radio buttons
   */
  name: PropTypes.string,

  /**
   * Array that contains [id, value, label] for each of the radio buttons
   */
  options: PropTypes.array,

  /**
   * Function this could update the state with the user selection, or something else.
   */
  onChange: PropTypes.func,
};
