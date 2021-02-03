import React from "react";
import PropTypes from "prop-types";

/**
 * A 'Label' title for Forms
 */
export function Legend(props) {
  const { customClass, required, strRequired, legend, id } = props;
  return (
    <legend className={customClass} data-cy={id}>
      {required ? <span className="text-red-700 font-bold">* </span> : ""}
      {legend}
      {required ? (
        <span className="text-red-800 font-bold"> {strRequired}</span>
      ) : (
        ""
      )}
    </legend>
  );
}

Legend.propTypes = {
  /**
   * Adds custom css
   */
  customClass: PropTypes.string,

  /**
   * Boolean flag to add an star and required text
   */
  required: PropTypes.bool,

  /**
   * text for Required
   */
  strRequired: PropTypes.string,

  /**
   * label string
   */
  legend: PropTypes.string.isRequired,

  /**
   * Element ID used for testing
   */
  id: PropTypes.number.isRequired,
};
