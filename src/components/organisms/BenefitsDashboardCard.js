import React from "react";
import PropTypes from "prop-types";
import { EligibleBenefit } from "../molecules/EligibleBenefit";

export function BenefitsDashboardCard({
  fetchedCases,
  foundCases,
  failedFetch,
  benefitsData,
  benefitOnClick,
}) {
  const eligibleBenefits = [];
  for (let i = 0; i < foundCases.length; i++) {
    for (let j = 0; j < benefitsData.length; j++) {
      const usercase = foundCases[i];
      const benefit = benefitsData[j];
      const title = benefit.benefitTitle.replace(" EI Benefit", "");
      if (title === usercase.caseBenefitType) {
        eligibleBenefits.push(
          <EligibleBenefit
            benefitName={benefit.benefitTitle}
            key={benefit.benefitTitle}
            benefitId={benefit.benefitId}
            benefitOnClick={benefitOnClick}
          />
        );
      }
    }
  }
  return (
    <div className="mt-8 flex flex-col">
      <p className="text-xl font-bold">Your Benefits</p>
      {fetchedCases ? (
        failedFetch ? (
          <p id="failed-fetch" className="mt-4 text-red-800 font-bold text-lg">
            Something went wrong
          </p>
        ) : foundCases.length === 0 || eligibleBenefits.length === 0 ? (
          <p id="length-zero" className="mt-4 text-red-800 font-bold text-lg">
            No benefits
          </p>
        ) : (
          <div>{eligibleBenefits}</div>
        )
      ) : (
        <p
          id="currently-fetching"
          className="mt-4 text-red-800 font-bold text-lg"
        >
          Fetching Cases
        </p>
      )}
    </div>
  );
}
BenefitsDashboardCard.propTypes = {
  /**
   * Bool to check questions are complete
   */
  fetchedCases: PropTypes.bool.isRequired,
  /**
   * Array of cases
   */
  foundCases: PropTypes.arrayOf(PropTypes.shape()).isRequired,

  /**
   * Bool if returning the results fails
   */
  failedFetch: PropTypes.bool.isRequired,
  /**
   * Array of benefits
   */
  benefitsData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  /**
   * Show more information function
   */
  benefitOnClick: PropTypes.func.isRequired,
};
