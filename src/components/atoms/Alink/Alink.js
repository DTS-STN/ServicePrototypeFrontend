import React from "react";
import PropTypes from "prop-types";

/**
 * plain link component
 */
export function Alink(props) {
  const { customClass, href, id, children, ...rest } = props;
  return (
    <a
      className={`text-black underline ${customClass}`}
      href={href}
      id={id}
      {...rest}
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
};
