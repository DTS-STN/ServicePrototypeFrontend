import React from "react";
import PropTypes from "prop-types";

export function PageDescription(props) {
  return <div>{props.children}</div>;
}

PageDescription.propTypes = {
  /**
   * Text area that displays the description
   */
  children: PropTypes.string.isRequired,
};
