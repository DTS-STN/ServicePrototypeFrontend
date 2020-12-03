import React, { useState } from "react";
import PropTypes from "prop-types";
import { BenefitCard } from "../molecules/BenefitCard";
import { LoadingCard } from "../molecules/LoadingCard";
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
    } else if (operation === "next" && currentPage < props.numberOfPages) {
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

  // the top index for the slice
  const topIndex = numberOfElementsPerPage * currentPage - 1;
  const bottomIndex = topIndex - (numberOfElementsPerPage - 1);

  // elements have not loaded yet if this is the case
  const benefitsCards = [];
  if (bottomIndex > props.benefits.length - 1) {
    const loadingCards = [];
    for (let i = 0; i < numberOfElementsPerPage; i++) {
      loadingCards.push(
        <LoadingCard
          key={`loading-card-${i}`}
          isDark={props.isNonEligibleGrid === true}
        />
      );
    }
    return (
      <div
        className="w-full flex flex-col items-center md:items-start"
        data-cy={props.dataCy}
      >
        <div className="flex flex-wrap w-full mb-5">{loadingCards}</div>
        <GridNavBar
          currentPage={currentPage}
          numberOfPages={props.numberOfPages}
          nextPageButtonAriaLabel={props.nextPageButtonAriaLabel}
          previousPageButtonAriaLabel={props.previousPageButtonAriaLabel}
          onPageNext={pageNavigationHandler}
          onPagePrev={pageNavigationHandler}
          onPageClick={pageNavigationHandler}
        />
      </div>
    );
  } else {
    for (
      let i = bottomIndex;
      i <
      (topIndex > props.benefits.length - 1
        ? props.benefits.length
        : topIndex + 1);
      i++
    ) {
      const benefitData = props.benefits[i];
      benefitsCards.push(
        <BenefitCard
          key={benefitData.benefitId}
          benefitId={benefitData.benefitId}
          benefitTitle={benefitData.benefitTitle}
          benefitTag={benefitData.benefitTag}
          benefitDescription={benefitData.benefitDescription}
          isSelected={benefitData.isSelected}
          isEligible={benefitData.isEligible}
          moreInfoButtonText={props.benefitMoreInfoButtonText}
          onMoreInfoClick={props.onMoreInfoClick}
          onBenefitSelect={props.onBenefitSelect}
          checkBoxAriaLabelBy={benefitData.checkBoxAriaLabelBy}
        />
      );
    }
  }

  return (
    <div
      className="w-full flex flex-col items-center md:items-start"
      data-cy={props.dataCy}
    >
      <div className="w-full flex flex-wrap mb-5">{benefitsCards}</div>
      <GridNavBar
        currentPage={currentPage}
        numberOfPages={props.numberOfPages}
        nextPageButtonAriaLabel={props.nextPageButtonAriaLabel}
        previousPageButtonAriaLabel={props.previousPageButtonAriaLabel}
        onPageNext={pageNavigationHandler}
        onPagePrev={pageNavigationHandler}
        onPageClick={pageNavigationHandler}
      />
    </div>
  );
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
   * boolean flag to specify that the grid only contains non-eligible benefits
   */
  isNonEligibleGrid: PropTypes.bool,
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
  /**
   * This is for adding an id for testing in cypress
   */
  dataCy: PropTypes.string,
};
