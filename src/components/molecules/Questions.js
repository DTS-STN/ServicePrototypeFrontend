import React from "react";
import PropTypes from "prop-types";
import { Legend } from "../atoms/Legend";
import { Radio } from "../atoms/Radio";
import { PrevNextBar } from "../molecules/PrevNextBar";

export function Questions(props) {
  const { id, required, textRequired, legend, name, options, onChange } = props;

  function onChangeHandler(value) {
    console.log(value);
    onChange(value);
  }

  return (
    <div className="max-w-lg">
      <fieldset>
        <Legend
          id={id}
          required={required}
          strRequired={textRequired}
          legend={legend}
        />

        {options.map(({ id, value, label }) => (
          <Radio
            id={id}
            key={id}
            value={value}
            label={label}
            name={name}
            onChange={() => onChangeHandler(value)}
          />
        ))}
      </fieldset>

      <PrevNextBar
        hrefPrev={props.hrefPrev}
        prevText={props.prevText}
        skipFlag={false}
        customClass={props.customClass}
        id={id}
        nextText={props.nextText}
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
   * Address to where the link is going to
   */
  hrefPrev: PropTypes.string.isRequired,

  /**
   * Text for Back link
   */
  prevText: PropTypes.string.isRequired,

  /**
   * Optional overrides the default css
   */
  customClass: PropTypes.string,

  /**
   * Next button text
   */
  nextText: PropTypes.string.isRequired,
};
