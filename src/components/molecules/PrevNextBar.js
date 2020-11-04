import React from "react";
import PropTypes from "prop-types";
import "./PrevNextBar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ActionButton } from "../atoms/ActionButton";

/**
 * plain link component
 */
export function PrevNextBar(props) {
  const {
    customClass,
    hrefPrev,
    hrefSkip,
    id,
    prevText,
    skipText,
    nextText,
  } = props;

  // event handler for Next button
  function handleNextButton() {
    props.nextOnClick(props.benefitId);
  }

  return (
    <div id={id} className="flex p-2 inline-flex w-full">
      <Router>
        <div className="px-4">
          <Link
            className={`text-black underline ${customClass ? customClass : ""}`}
            to={hrefPrev}
            data-cy={id + "-Prev"}
          >
            {prevText}
          </Link>
        </div>

        {/* on mobile Skip is not visible, tailwind's  sm: is not working. So I added a css file */}
        <div className="pl-32 pr-4 sm:display-none skipLink">
          <Link
            className={`text-black underline ${customClass ? customClass : ""}`}
            to={hrefSkip}
            data-cy={id + "-Skip"}
          >
            {skipText}
          </Link>
        </div>

        <div className="px-4">
          <ActionButton
            id={id + "-Next"}
            text={nextText}
            onClick={handleNextButton}
            className="rounded-b-none rounded-t-none px-8"
          />
        </div>
      </Router>
    </div>
  );
}

PrevNextBar.propTypes = {
  /**
   * Address to where the link is going to
   */
  hrefPrev: PropTypes.string.isRequired,
  /**
   * Text for Back link
   */
  prevText: PropTypes.string.isRequired,
  /**
   * Address to where the link is going to
   */
  hrefSkip: PropTypes.string.isRequired,
  /**
   * Text for Skip link
   */
  skipText: PropTypes.string.isRequired,
  /**
   * Optional overrides the default css
   */
  customClass: PropTypes.string,
  /**
   * ID required for cypress testing must be unique within the page
   */
  id: PropTypes.string.isRequired,
  /**
   * Next button text
   */
  nextText: PropTypes.string.isRequired,
};
