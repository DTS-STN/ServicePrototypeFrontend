import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 * plain link component
 */
export function BenefitApply(props) {
  const {
    id,
    number,
    textBenefitSelected,
    textSelectUpTo,
    textMoreInfo,
    onMoreInfoClick,
  } = props;

  // event handler for more information button
  function handleClick() {
    onMoreInfoClick();
  }

  return (
    <div
      id={id}
      className="pb-6 px-6 bg-bg-gray-dk bg-gray-dk w-2/5 on inline-block element"
    >
      <p data-testid={id + "-number"} className="text-white font-semibold">
        {number} {textBenefitSelected}
        <br />
        <span className="text-white text-xs font-semibold">
          {textSelectUpTo}
        </span>
      </p>

      <ActionButton
        id={id + "-MoreInfo"}
        text={textMoreInfo}
        onClick={handleClick}
        rounded={true}
        invert={true}
        className={"font-semibold"}
      />
    </div>
  );
}

BenefitApply.propTypes = {
  /**
   * ID required for cypress testing must be unique within the page
   */
  id: PropTypes.string.isRequired,
  /**
   * Number of benefits selected
   */
  number: PropTypes.number.isRequired,
  /**
   * text for benefits selected
   */
  textBenefitSelected: PropTypes.string.isRequired,
  /**
   * text "Selected up to # benefits that apply to ... "
   */
  textSelectUpTo: PropTypes.string.isRequired,
  /**
   * Text for "More Information on ... "
   */
  textMoreInfo: PropTypes.string.isRequired,
  /**
   * onClick function or something else it could be an  <a href=>  tag
   */
  onMoreInfoClick: PropTypes.func,
};
