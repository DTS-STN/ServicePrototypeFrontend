import React from "react";
import PropTypes from "prop-types";

/**
 * Case card that users can use to see preliminarily information on the case.
 */
export function CaseCard(props) {
  const statusColors = {
    Open: "#3A73D8",
    Active: "#3ab4d8",
    Approved: "#87c673",
    Submitted: "#1C3A5A",
    Suspended: "#8a4864",
    "Pending Closure": "#B0B5CA",
    Closed: "#6D7486",
  };

  return (
    <li className="mt-5 mb-5 p-5 bg-gray-100">
      <div className="grid grid-cols-2">
        <div className="">
          <span className="block">
            <span className="font-bold">{props.caseReferenceNumberLabel}</span>{" "}
            | {props.caseReferenceNumber}
          </span>
          <span className="block">
            <span className="font-bold">{props.caseBenefitTypeLabel}</span> |{" "}
            {props.caseBenefitType}
          </span>
        </div>
        <div className="text-right">
          <div
            className="inline-block p-2 text-center text-white rounded-lg p-3 w-px-180"
            style={{
              backgroundColor: statusColors[props.caseStatus],
              width: "180px",
            }}
          >
            {props.caseStatus}
          </div>
        </div>
      </div>
    </li>
  );
}

CaseCard.propTypes = {
  /**
   * Label for Reference Number of the Case
   */
  caseReferenceNumberLabel: PropTypes.string.isRequired,

  /**
   * Label for the benefit of the Case
   */
  caseBenefitTypeLabel: PropTypes.string.isRequired,

  /**
   * Reference Number of the Case
   */
  caseReferenceNumber: PropTypes.string.isRequired,

  /**
   * Status of the Case
   */
  caseStatus: PropTypes.string.isRequired,

  /**
   * description of the Case
   */
  caseBenefitType: PropTypes.string.isRequired,

  /**
   * This is for adding an id for testing in cypress
   */
  dataCy: PropTypes.string,
};
