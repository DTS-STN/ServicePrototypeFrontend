import React from "react";
import PropTypes from "prop-types";

/**
 * This component displays the discription on the home page
 */
export function PageDescription(props) {
  return <p data-cy={props.dataCy}>{props.children}</p>;
}

PageDescription.propTypes = {
  /**
   * Text area that displays the description
   */
  children: PropTypes.string.isRequired,
  /**
   * This is for adding an id for testing in cypress
   */
  dataCy: PropTypes.string,
};
