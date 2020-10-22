import React from "react";
import { GridPageNavButton } from "../atoms/GridPageNavButton";

import PropTypes from "prop-types";

/**
 * Component to navigate between pages of a grid
 */
export function GridNavBar(props) {
  const { currentPage, numberOfPages } = props;

  return <div></div>;
}

GridNavBar.propTypes = {
  /**
   * the current page
   */
  currentPage: PropTypes.number.isRequired,

  /**
   * number of pages
   */
  numberOfPages: PropTypes.number.isRequired,

  /**
   * aria label for next page button
   */
  nextPageButtonAriaLabel: PropTypes.string.isRequired,

  /**
   * aria label for previous page button
   */
  previousPageButtonAriaLabel: PropTypes.string.isRequired,

  /**
   * callback for when the next button is clicked.
   * This function should take a number which is the next page number
   */
  onPageNext: PropTypes.func,

  /**
   * callback for when the previous button is clicked.
   * This function should take a number which is the previous page number
   */
  onPagePrev: PropTypes.func,

  /**
   * callback for when a page is clicked
   */
  onPageClick: PropTypes.func,
};
