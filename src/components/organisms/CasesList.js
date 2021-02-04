import React, { useState } from "react";
import PropTypes from "prop-types";
import { LoadingCard } from "../molecules/LoadingCard";
import { CaseCard } from "../molecules/CaseCard";

/**
 * Mobile first flex grid component for cases.
 */
export function CasesList(props) {
  // calculate the number of rows (TODO eventually expanded this to handle multiple page)
  const numberOfElementsPerPage = 1 * props.cases.length;

  // elements have not loaded yet if this is the case
  const casesCards = [];
  if (props.cases.length <= 0) {
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
      </div>
    );
  } else {
    for (let i = 0; i < props.cases.length; i++) {
      const caseItem = props.cases[i];
      casesCards.push(
        <CaseCard
          key={caseItem.caseReferenceNumber}
          caseReferenceNumberLabel={props.caseReferenceNumberLabel}
          caseBenefitTypeLabel={props.caseBenefitTypeLabel}
          caseReferenceNumber={caseItem.caseReferenceNumber}
          caseBenefitType={caseItem.caseBenefitType}
          caseStatus={caseItem.caseStatus}
        />
      );
    }
  }
  return <ul>{casesCards}</ul>;
}

CasesList.propTypes = {
  /**
   * cases array which contains the unique
   * dynamic information for each card
   */
  cases: PropTypes.arrayOf(
    PropTypes.shape({
      caseReferenceNumber: PropTypes.string.isRequired,
      caseBenefitType: PropTypes.string,
      caseStatus: PropTypes.string.isRequired,
    })
  ),
  /**
   * Label for Reference Number of the Case
   */
  caseReferenceNumberLabel: PropTypes.string.isRequired,
  /**
   * Label for the benefit of the Case
   */
  caseBenefitTypeLabel: PropTypes.string.isRequired,
  /**
   * the number of pages
   */
  numberOfPages: PropTypes.number.isRequired,
  /**
   * This is for adding an id for testing in cypress
   */
  dataCy: PropTypes.string,
};
