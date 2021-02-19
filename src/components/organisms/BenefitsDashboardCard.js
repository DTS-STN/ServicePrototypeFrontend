import React from "react";
import PropTypes from "prop-types";
import { EligibleBenefit } from "../molecules/EligibleBenefit";

export function BenefitsDashboardCard({
  questionnaireCompleted,
  foundBenefits,
  failedFetch,
  benefitOnClick,
}) {
  const eligibleBenefits = [];
  for (let i = 0; i < foundBenefits.length; i++) {
    const benefit = foundBenefits[i];
    eligibleBenefits.push(
      <EligibleBenefit
        benefitName={benefit.benefitTitle}
        key={benefit.benefitTitle}
        benefitId={benefit.benefitId}
        benefitOnClick={benefitOnClick}
      />
    );
  }
  return (
    <div className="mt-8 flex flex-col">
      <p className="text-xl font-bold">Your Benefits</p>
      {questionnaireCompleted ? (
        foundBenefits.length === 0 ? (
          <p className="mt-4 text-red-800 font-bold text-lg">No benefits</p>
        ) : (
          <div>{eligibleBenefits}</div>
        )
      ) : failedFetch ? (
        <p className="mt-4 text-red-800 font-bold text-lg">
          Something went wrong
        </p>
      ) : (
        <p className="mt-4 text-red-800 font-bold text-lg">
          Customize your profile below to find your eligible benefits
        </p>
      )}
    </div>
  );
}
BenefitsDashboardCard.propTypes = {
  /**
   * Bool to check questions are complete
   */
  questionnaireCompleted: PropTypes.bool.isRequired,
  /**
   * Array of found eligible benefits
   */
  foundBenefits: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  /**
   * Bool if returning the results fails
   */
  failedFetch: PropTypes.bool.isRequired,
  /**
   * Show more information function
   */
  benefitOnClick: PropTypes.func.isRequired,
};
