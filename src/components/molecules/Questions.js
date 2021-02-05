import React from "react";
import PropTypes from "prop-types";
import { RadioGroup } from "../molecules/RadioGroup";
import { PrevNext } from "../molecules/PrevNext";

/**
 *  This component is meant to display:
 *   A question with a set of radio buttons to select answer, and
 *     previous and next buttons for navigation
 */
export function Questions(props) {
  const {
    id,
    required,
    textRequired,
    legend,
    name,
    options,
    onChange,
    prevText,
    onPrevClick,
    disabledPrev,
    nextText,
    onNextClick,
    disabledNext,
    answer,
  } = props;

  return (
    <div className="max-w-lg">
      <RadioGroup
        id={id}
        required={required}
        textRequired={textRequired}
        legend={legend}
        name={name}
        options={options}
        onChange={(value) => onChange({ key: id, value })}
        answer={answer}
      />

      <PrevNext
        prevText={prevText}
        onPrevClick={onPrevClick}
        disabledPrev={disabledPrev}
        id={id}
        nextText={nextText}
        onNextClick={onNextClick}
        disabledNext={disabledNext}
      />
    </div>
  );
}

Questions.propTypes = {
  /**
   * text used mostly for testing, to identify each of the controls must be unique within the page
   */
  id: PropTypes.string,

  /**
   * Main Label for group of Radio buttons
   */
  legend: PropTypes.string,

  /**
   * Required boolean adds a (required)
   */
  required: PropTypes.bool,

  /**
   * Required text (either french or english)
   */
  textRequired: PropTypes.string,

  /**
   * Identifies the group of radio buttons
   */
  name: PropTypes.string,

  /**
   * Array that contains [id, value, label] for each of the radio buttons
   */
  options: PropTypes.array,

  /**
   * Function this could update the state with the user selection, or something else.
   */
  onChange: PropTypes.func,

  /**
   * Text for Back link
   */
  prevText: PropTypes.string.isRequired,

  /**
   * Function to be called when onClick on Previous button
   */
  onPrevClick: PropTypes.func,

  /**
   * Flag disables the Previous button
   */
  disabledPrev: PropTypes.bool,

  /**
   * Next button text
   */
  nextText: PropTypes.string.isRequired,

  /**
   * Function to be called when onClick on Next button
   */
  onNextClick: PropTypes.func,

  /**
   * Flag disables the Next button
   */
  disabledNext: PropTypes.bool,

  /**
   * Sets the checked attrib when answer == id of one of the radio options
   */
  answer: PropTypes.string,
};
