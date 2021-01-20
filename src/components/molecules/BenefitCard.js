import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import { BenefitCardBox } from "../atoms/BenefitCardBox";

/**
 * Benefits card that users can use to see preliminarily information on the benefit.
 * Navigate to more information about the benefit or select the benefit to be evaluated
 * against
 */
export function BenefitCard(props) {
  function handleClick() {
    props.onMoreInfoClick(props.benefitId);
  }
  return (
    <BenefitCardBox
      dark={props.isEligible === false}
      dataTestId={props.benefitId}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col justify-start">
          <h3 className="text-l">{props.benefitTitle}</h3>
          {props.benefitTag ? <small>{props.benefitTag}</small> : undefined}
        </div>
      </div>
      <p className="m-auto truncate-4-lines w-full">
        {props.benefitDescription}
      </p>
      <ActionButton
        text={props.moreInfoButtonText}
        rounded={true}
        className={"bg-bg-gray-dk text-white hover:bg-black"}
        onClick={handleClick}
      />
    </BenefitCardBox>
  );
}

BenefitCard.propTypes = {
  /**
   * id of the benefit that will be passed into handlers when an event occurs
   */
  benefitId: PropTypes.string.isRequired,

  /**
   * title of the benefit
   */
  benefitTitle: PropTypes.string.isRequired,

  /**
   * description of the benefit
   */
  benefitDescription: PropTypes.string.isRequired,

  /**
   * More info button text
   */
  moreInfoButtonText: PropTypes.string.isRequired,

  /**
   * benefit tag
   */
  benefitTag: PropTypes.string,

  /**
   * boolean flag to specify whether the benefit is selected
   */
  isSelected: PropTypes.bool,

  /**
   * boolean flag to specify whether this is an eligible benefit card
   */
  isEligible: PropTypes.bool,

  /**
   * handler for when benefit is selected. This function takes to arguments.
   * The first is the benefitId that was passed into this component. The other is a boolean
   * which indicates whether or not it was selected
   */
  onBenefitSelect: PropTypes.func,

  /**
   * handler for when the more info button is clicked. This function takes one argument. This argument
   * is the benefitId that was passed into this component.
   */
  onMoreInfoClick: PropTypes.func,
};
