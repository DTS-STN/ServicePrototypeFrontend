import React from "react";
import PropTypes from "prop-types";

/**
 * links for footer
 */
export function FooterLinks(props) {
  return (
    <div className="w-full pl-2 md:p-8 md:w-2/3 h-full flex flex-col flex-no-wrap md:flex-wrap">
      {props.links.map((value, index) => {
        return (
          <a
            className="text-white hover:underline"
            key={index}
            href={value.link}
            style={{
              height: "33%",
            }}
          >
            {value.linkText}
          </a>
        );
      })}
    </div>
  );
}

FooterLinks.propTypes = {
  /**
   * array of objects containing the link text and link
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
    })
  ),
};
