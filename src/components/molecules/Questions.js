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
    radioGroupId,
    required,
    textRequired,
    text,
    name,
    answers,
    onChange,
    onPrevClick,
    onNextClick,
  } = props;
  function onChangeHandler(e) {
    onChange(e);
  }
  return (
    <div className="max-w-lg">
      <RadioGroup
        id={radioGroupId}
        required={required}
        textRequired={textRequired}
        text={text}
        name={name}
        answers={answers}
        onChange={onChangeHandler}
      />

      <PrevNext
        prevText={props.prevText}
        id={props.prevNextBarId}
        onPrevClick={onPrevClick}
        nextText={props.nextText}
        onNextClick={onNextClick}
      />
    </div>
  );
}

Questions.propTypes = {
  /**
   * text used mostly for testing, to identify each of the controls must be unique within the page
   */
  radioGroupId: PropTypes.string,

  /**
   * Main Label for group of Radio buttons
   */
  text: PropTypes.string,

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
  answers: PropTypes.array,

  /**
   * Function this could update the state with the user selection, or something else.
   */
  onChange: PropTypes.func,

  /**
   * text used mostly for testing, to identify each of the controls must be unique within the page
   */
  prevNextBarId: PropTypes.string,

  /**
   * Address to where the link is going to
   */
  hrefPrev: PropTypes.string.isRequired,

  /**
   * Text for Back link
   */
  prevText: PropTypes.string.isRequired,

  /**
   * Function to be called when onClick on Previous button
   */
  onPrevClick: PropTypes.func,

  /**
   * Next button text
   */
  nextText: PropTypes.string.isRequired,

  /**
   * Function to be called when onClick on Next button
   */
  onNextClick: PropTypes.func,
};
