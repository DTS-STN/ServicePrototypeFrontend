import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import maternityBenefitImage from "../../assets/images/maternityBenefitImage.svg";

export function EligibleBenefit({ benefitId, benefitName, benefitOnCLick }) {
  const getMoreInfo = () => {
    benefitOnCLick(benefitId);
  };
  return (
    <div className="mt-4 w-1/3 flex flex-row bg-gray-light">
      <div>
        <img alt="" className="my-4" src={maternityBenefitImage}></img>
      </div>
      <div className="w-2/3 flex flex-col mr-8 mt-4">
        <p className="font-bold">{benefitName}</p>
        <ActionButton
          className=" my-4 bg-bg-gray-dk text-white hover:bg-black"
          id="ReadMore"
          text="Read More"
          onClick={getMoreInfo}
        />
      </div>
    </div>
  );
}
EligibleBenefit.propTypes = {
  /**
   * Id of Benefit
   */
  benefitId: PropTypes.string.isRequired,
  /**
   * Name of Benefit
   */
  benefitName: PropTypes.string.isRequired,
  /**
   * Show more information function
   */
  benefitOnCLick: PropTypes.func.isRequired,
};
