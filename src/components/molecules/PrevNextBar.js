import React from "react";
import PropTypes from "prop-types";
import "./PrevNextBar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ActionButton } from "../atoms/ActionButton";

/**
 * Previous, Skip (fulll size only), Next link/buttons
 */
export function PrevNextBar(props) {
  const {
    customClass,
    hrefPrev,
    hrefSkip,
    skipFlag,
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
    <div id={id} className="flex p-2 bg-gray-300 justify-end">
      <Router>
        <div className="pr-4">
          <Link
            className={`text-black underline ${customClass ? customClass : ""}`}
            to={hrefPrev}
            data-testid={id + "-Prev"}
          >
            {prevText}
          </Link>
        </div>

        {/* on mobile Skip is not visible, tailwind's  sm: is not working. So I added a css file */}
        {skipFlag ? (
          <div className="pl-32 pr-4 sm:display-none skipLink">
            <Link
              className={`text-black underline ${
                customClass ? customClass : ""
              }`}
              to={hrefSkip}
              data-testid={id + "-Skip"}
            >
              {skipText}
            </Link>
          </div>
        ) : (
          ""
        )}

        <div className="pl-20 pr-4">
          <ActionButton
            invert
            data-testid={id + "-Next"}
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
   * Flag it display or not the skip link
   */
  skipFlag: PropTypes.bool,
  /**
   * Address to where the link is going to
   */
  hrefSkip: PropTypes.string,
  /**
   * Text for Skip link
   */
  skipText: PropTypes.string,
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
