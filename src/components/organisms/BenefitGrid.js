import React, { useState } from "react";
import PropTypes from "prop-types";
import { BenefitCard } from "../molecules/BenefitCard";
import { GridNavBar } from "../molecules/GridNavBar";

/**
 * Mobile first flex grid component for benefit cards with pagination.
 */
export function BenefitGrid(props) {
  // keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // page navigation handler
  const pageNavigationHandler = (operation) => {
    if (operation === "previous" && currentPage > 1) {
      // if the call back exists call it and pass the new page number
      if (props.onPagePrev) {
        props.onPagePrev(currentPage - 1);
      }
      // set the new state
      setCurrentPage(currentPage - 1);
    } else if (currentPage < props.numberOfPages) {
      if (props.onPageNext) {
        props.onPageNext(currentPage + 1);
      }
      setCurrentPage(currentPage + 1);
    } else if (
      Number.isInteger(operation) &&
      operation >= 1 &&
      operation <= props.numberOfPages
    ) {
      if (props.onPageSelect) {
        props.onPageSelect(operation);
      }
      setCurrentPage(operation);
    }
  };

  // calculate the number of
  const numberOfElementsPerPage = 3 * props.numberOfRows;
}

BenefitGrid.propTypes = {
  /**
   * benefits array which contains the unique
   * dynamic information for each card
   */
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      benefitId: PropTypes.string.isRequired,
      benefitTag: PropTypes.string,
      benefitTitle: PropTypes.string.isRequired,
      benefitDescription: PropTypes.string.isRequired,
      checkBoxAriaLabelBy: PropTypes.string.isRequired,
      isSelected: PropTypes.bool,
      isEligible: PropTypes.bool,
    })
  ),
  /**
   * text for the more info button on each card
   */
  benefitMoreInfoButtonText: PropTypes.string.isRequired,
  /**
   * aria label for the next page button
   */
  nextPageButtonAriaLabel: PropTypes.string.isRequired,
  /**
   * aria label for the previous page button
   */
  previousPageButtonAriaLabel: PropTypes.string.isRequired,
  /**
   * the number of pages
   */
  numberOfPages: PropTypes.number.isRequired,
  /**
   * number of rows of three cards
   */
  numberOfRows: PropTypes.number.isRequired,
  /**
   * call back for when benefit is selected
   */
  onBenefitSelect: PropTypes.func,
  /**
   * call back for when the more info button is clicked
   */
  onMoreInfoClick: PropTypes.func,
  /**
   * optional call back for when the next page button is clicked
   */
  onPageNext: PropTypes.func,
  /**
   * optional call back for when the previous page button is clicked
   */
  onPagePrev: PropTypes.func,
  /**
   * optional call back for when a page is clicked
   */
  onPageSelect: PropTypes.func,
};
