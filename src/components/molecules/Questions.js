import React from "react";
import PropTypes from "prop-types";
import { RadioGroup } from "../molecules/RadioGroup";
import { PrevNext } from "../molecules/PrevNext";

export function Questions(props) {
  const {
    id,
    required,
    textRequired,
    legend,
    name,
    options,
    onChange,
    onPrevClick,
    onNextClick,
  } = props;

  function onChangeHandler(e) {
    onChange(e);
  }

  function onPrevHandler(e) {
    onPrevClick(e);
  }

  function onNextHandler(e) {
    onNextClick(e);
  }

  return (
    <div className="max-w-lg">
      <RadioGroup
        id={id}
        required={required}
        textRequired={textRequired}
        legend={legend}
        name={name}
        options={options}
        onChange={() => onChangeHandler()}
      />

      <PrevNext
        prevText={props.prevText}
        onPrevClick={() => onPrevHandler()}
        id={id}
        nextText={props.nextText}
        onNextClick={() => onNextHandler()}
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
   * Next button text
   */
  nextText: PropTypes.string.isRequired,

  /**
   * Function to be called when onClick on Next button
   */
  onNextClick: PropTypes.func,
};
