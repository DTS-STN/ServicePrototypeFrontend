import React from "react";
import PropTypes from "prop-types";

/**
 * plain link component using html a tag meant for out of the app navigation.
 */
export function Alink(props) {
  const { customClass, href, id, children } = props;
  return (
    <a
      className={`text-black underline ${customClass}`}
      href={href}
      id={id}
      data-cy={id}
    >
      {children}
    </a>
  );
}

Alink.propTypes = {
  /**
   * Address to where the link is going to
   */
  href: PropTypes.string.isRequired,
  /**
   * Optional overrides the default css
   */
  customClass: PropTypes.string,
  /**
   * Control ID required for testing must be unique within the page
   */
  id: PropTypes.string.isRequired,

  /**
   * Children of the element. This can either be a string, element ot array of elements
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
