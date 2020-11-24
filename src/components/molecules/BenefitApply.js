import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 * apply for selected benefits section
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

  return (
    <div
      id={id}
      className="pb-6 px-6 bg-bg-gray-dk bg-gray-dk w-full on inline-block element"
    >
      <article
        data-testid={id + "-number"}
        className="text-white font-semibold"
      >
        <p>
          {number} {textBenefitSelected}
        </p>
        <p className="text-white text-xs font-semibold">{textSelectUpTo}</p>
      </article>

      <ActionButton
        id={id + "-MoreInfo"}
        text={textMoreInfo}
        onClick={onMoreInfoClick}
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
