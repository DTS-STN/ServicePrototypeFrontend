import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { ActionButton } from "../atoms/ActionButton";

export function QuestionCard(props) {
  const {
    id,
    questionTitle,
    textRequired,
    options,
    questionOnChange,
    prevText,
    onPrevClick,
    disabledPrev,
    nextText,
    onNextClick,
    disabledNext,
  } = props;
  const selectOptions = options.map((option) => ({
    value: option.id,
    label: option.text,
  }));
  return (
    <div className=" mt-8 flex- flex-col">
      <p className="text-xl font-bold">Let's Customize your profile</p>
      <div className="mt-2 rounded-lg shadow">
        <div className="mt-4 mx-8">
          <div className="flex flex-row">
            <p className="text-3xl">{questionTitle}</p>
            <p className="pl-2 text-red-800 text-3xl font-bold">
              {textRequired}
            </p>
          </div>
          <Select
            id={id}
            options={selectOptions}
            onChange={questionOnChange}
            isSearchable={false}
            className="w-2/3 mt-4"
          ></Select>
          <div className="py-8 w-2/3 flex flex-row">
            <ActionButton
              id={id + "-Prev"}
              text={prevText}
              onClick={onPrevClick}
              className="mr-4 bg-bg-gray-dk text-white hover:bg-black"
              disabled={disabledPrev}
            />
            <ActionButton
              id={id + "-Next"}
              text={nextText}
              onClick={onNextClick}
              className="mr-4 bg-bg-gray-dk text-white hover:bg-black"
              disabled={disabledNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
QuestionCard.propTypes = {
  /**
   * text used mostly for testing, to identify each of the controls must be unique within the page
   */
  id: PropTypes.string,

  /**
   * Main Label for question
   */
  questionTitle: PropTypes.string,
  /**
   * Required text (either french or english)
   */
  textRequired: PropTypes.string,

  /**
   * Array that contains [id, value, label] for each of the radio buttons
   */
  options: PropTypes.array,

  /**
   * Function this could update the state with the user selection, or something else.
   */
  questionOnChange: PropTypes.func,

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
};
