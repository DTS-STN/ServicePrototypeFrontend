import React from "react";
import PropTypes from "prop-types";
import { Alink } from "../../atoms/Alink/Alink";
import { ActionButton } from "../../atoms/ActionButton";

/**
 * plain link component
 */
export function PrevNextBar(props) {
  const { customClass, hrefPrev, hrefSkip, id, nextButtonText } = props;

  // event handler for Next button
  function handleNextButton() {
    props.nextClick(props.benefitId);
  }

  // event handler for Prev link
  function handlePrevLink() {
    props.onMoreInfoClick(props.benefitId);
  }

  // event handler for Skip link
  function handleSkipLink() {
    props.onMoreInfoClick(props.benefitId);
  }

  return (
    <div id={id} className="flex p-2 inline-flex w-full">
      <div className="px-4">
        <Alink
          className={`text-black underline ${customClass ? customClass : ""}`}
          href={hrefPrev}
          id={id + "-Prev"}
          onClick={handlePrevLink}
          // {...rest}
        >
          Back
        </Alink>
      </div>

      <div className="pl-32 pr-4">
        <Alink
          className={`text-black underline ${customClass ? customClass : ""}`}
          href={hrefSkip}
          id={id + "-Skip"}
          onClick={handleSkipLink}
          // {...rest}
        >
          Skip
        </Alink>
      </div>

      <div className="px-4">
        <ActionButton
          id={id + "-Next"}
          text={nextButtonText}
          rounded={false}
          onClick={handleNextButton}
          customClass="rounded-b-none rounded-t-none px-8"
        />
      </div>
    </div>
  );
}

PrevNextBar.propTypes = {
  /**
   * Address to where the link is going to
   */
  hrefPrev: PropTypes.string.isRequired,
  /**
   * Address to where the link is going to
   */
  hrefSkip: PropTypes.string.isRequired,
  /**
   * Optional overrides the default css
   */
  customClass: PropTypes.string,
  /**
   * Control ID required for testing must be unique within the page
   */
  id: PropTypes.string.isRequired,
  /**
   * Next button text
   */
  nextButtonText: PropTypes.string.isRequired,
};
