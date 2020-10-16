import React from "react";
import PropTypes from "prop-types";

function Title(props) {
  console.log(props);
  return <h1>{props.title}</h1>;
}

Title.propTypes = {
  /**
   * Text area that displays the title on the page
   */
  title: PropTypes.string.isRequired,
};
