import React from "react";
import { GridPageNavButton } from "../atoms/GridPageNavButton";
import { PageNumber } from "../atoms/PageNumber";
import "../../tailwind.output.css";

import PropTypes from "prop-types";

/**
 * Component to navigate between pages of a grid
 */
export function GridNavBar(props) {
  const { currentPage, numberOfPages } = props;

  // initialize array that will contain the dynamic page elements according to the
  // currentPage and numberOfPages
  const pageElements = [];

  // there are more than 5 pages and we're 3 away from the first page or less
  // render first four pages followed by the last page
  if (numberOfPages > 5 && currentPage <= 3) {
    // create page elements
    for (let i = 1; i < 5; i++) {
      pageElements.push(
        <PageNumber
          key={`page-${i}`}
          number={i}
          onClick={props.onPageClick}
          isSelected={i === currentPage}
        />
      );
    }
    // push ellipses element
    pageElements.push(
      <span key="page-ellipses" className="p-auto h-2 w-4">
        ...
      </span>
    );

    pageElements.push(
      <PageNumber
        key={`page-${numberOfPages}`}
        number={numberOfPages}
        onClick={props.onPageClick}
      />
    );
  }
  // there are more than 5 pages and we're 4 away or less from the last page
  else if (numberOfPages > 5 && numberOfPages - currentPage <= 3) {
    pageElements.push(
      <PageNumber key="page-1" number={1} onClick={props.onPageClick} />
    );

    // push ellipses element
    pageElements.push(
      <span key="page-ellipses" className="p-auto h-2 w-4">
        ...
      </span>
    );

    // create the other page elements
    for (let i = numberOfPages - 3; i <= numberOfPages; i++) {
      pageElements.push(
        <PageNumber
          key={`page-${i}`}
          number={i}
          onClick={props.onPageClick}
          isSelected={i === currentPage}
        />
      );
    }
  }

  // there are less than or equal to 5 pages
  else if (numberOfPages <= 5) {
    for (let i = 1; i < 5; i++) {
      pageElements.push(
        <PageNumber
          key={`page-${i}`}
          number={i}
          onClick={props.onPageClick}
          isSelected={i === currentPage}
        />
      );
    }
  }
  // sanity check to make sure that the current page is less than the number of pages
  // however this is the final condition where we are in the middle
  else if (currentPage < numberOfPages) {
    pageElements.push(
      <PageNumber key="page-1" number={1} onClick={props.onPageClick} />
    );

    // push ellipses element
    pageElements.push(
      <span key="page-ellipses-1" className="p-auto h-2 w-4">
        ...
      </span>
    );

    //middle page elements
    pageElements.push(
      <PageNumber
        key={`page-${currentPage - 1}`}
        number={currentPage - 1}
        onClick={props.onPageClick}
      />
    );
    pageElements.push(
      <PageNumber
        key={`page-${currentPage}`}
        number={currentPage}
        onClick={props.onPageClick}
        isSelected={true}
      />
    );
    pageElements.push(
      <PageNumber
        key={`page-${currentPage + 1}`}
        number={currentPage + 1}
        onClick={props.onPageClick}
      />
    );

    // push ellipses element
    pageElements.push(
      <span key="page-ellipses-2" className="p-auto h-2 w-4">
        ...
      </span>
    );

    pageElements.push(
      <PageNumber
        key={`page-${numberOfPages}`}
        number={numberOfPages}
        onClick={props.onPageClick}
      />
    );
  }

  return (
    <div className="flex w-auto">
      <GridPageNavButton
        ariaLabel={props.previousPageButtonAriaLabel}
        isDisabled={currentPage === 1}
        onClick={props.onPagePrev}
      />
      {pageElements}
      <GridPageNavButton
        isNextButton={true}
        ariaLabel={props.nextPageButtonAriaLabel}
        isDisabled={currentPage === numberOfPages}
        onClick={props.onPageNext}
      />
    </div>
  );
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
   */
  onPageNext: PropTypes.func,

  /**
   * callback for when the previous button is clicked.
   */
  onPagePrev: PropTypes.func,

  /**
   * callback for when a page is clicked
   */
  onPageClick: PropTypes.func,
};
