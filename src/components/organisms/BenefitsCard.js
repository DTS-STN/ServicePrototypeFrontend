import React from "react";
import PropTypes from "prop-types";
import { EligibleBenefit } from "../molecules/EligibleBenefit";

export function BenefitsCard({
  questionnaireCompleted,
  foundBenefits,
  failedFetch,
}) {
  const eligibleBenefits = [];
  for (let i = 0; i < foundBenefits.length; i++) {
    const benefit = foundBenefits[i];
    eligibleBenefits.push(
      <EligibleBenefit benefitName={benefit.title} key={benefit.title} />
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
