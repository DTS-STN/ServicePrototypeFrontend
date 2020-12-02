import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the title on the page
 */

export function Title(props) {
  return (
    <h1
      className="w-full text-3xl border-b mt-2 mb-2 border-h1-underline-color"
      data-cy={props.dataCy}
    >
      {props.children}
    </h1>
  );
}

Title.propTypes = {
  /**
   * Text area that displays the title for the page
   */
  children: PropTypes.string.isRequired,

  /**
   * This is for adding an id for testing in cypress
   */
  dataCy: PropTypes.string,
};
