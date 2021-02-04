import React from "react";
import PropTypes from "prop-types";
import "./Radio.css";

export function Radio(props) {
  const { id, name, value, label, onChange } = props;

  return (
    <div className="RadioContainer">
      <label htmlFor={id} data-cy={id + "-label"} className="RadioLabel">
        <span>{label}</span>
        <input
          type="radio"
          name={name}
          id={id}
          data-testid={id}
          value={value}
          onChange={onChange}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

Radio.propTypes = {
  /**
   * text used mostly for testing, to identify each control must be unique within the page
   */
  id: PropTypes.string,

  /**
   * Name of the radio button (when used in a group of radio buttons must be the same name for all)
   */
  name: PropTypes.string,

  /**
   * Radio button value
   */
  value: PropTypes.string,

  /**
   * Label to identify what this button is for
   */
  label: PropTypes.string,

  /**
   * Function this could update the state with the user selection, or something else.
   */
  onChange: PropTypes.func,
};
