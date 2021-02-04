import React from "react";
import PropTypes from "prop-types";
import "./PrevNextBar.css";
import { ActionButton } from "../atoms/ActionButton";

/**
 * Previous, Next Buttons
 */
export function PrevNext(props) {
  const {
    id,
    onPrevClick,
    onNextClick,
    prevText,
    nextText,
    disabledPrev,
    disabledNext,
  } = props;

  return (
    <div id={id} className="flex p-2 bg-gray-300 justify-end">
      <div className="pr-4">
        <ActionButton
          invert
          id={id + "-Prev"}
          text={prevText}
          onClick={onPrevClick}
          className="rounded-b-none rounded-t-none px-8"
          disabled={disabledPrev}
        />
      </div>

      <div className="pl-20 pr-4">
        <ActionButton
          invert
          id={id + "-Next"}
          text={nextText}
          onClick={onNextClick}
          className="rounded-b-none rounded-t-none px-8"
          disabled={disabledNext}
        />
      </div>
    </div>
  );
}

PrevNext.propTypes = {
  /**
   * Text for Back link
   */
  prevText: PropTypes.string.isRequired,
  /**
   * Function to be called when the prev button was click
   */
  onPrevClick: PropTypes.func,
  /**
   * Flag disables the Previous button
   */
  disabledPrev: PropTypes.bool,
  /**
   * ID required for cypress testing must be unique within the page
   */
  id: PropTypes.string.isRequired,
  /**
   * Flag disables the Next button
   */
  disabledNext: PropTypes.bool,
  /**
   * Next button text
   */
  nextText: PropTypes.string.isRequired,
  /**
   * Function to be called when the next button was click
   */
  onNextClick: PropTypes.func,
};
