import React from "react";
import PropTypes from "prop-types";

/**
 * Displays the title on the page
 */

export function Title(props) {
  return <h1>{props.children}</h1>;
}

Title.propTypes = {
  /**
   * Text area that displays the title for the page
   */
  children: PropTypes.string.isRequired,
};
