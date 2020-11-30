import React from "react";
import PropTypes from "prop-types";
import footerImage from "../../assets/images/wmms-blk.svg";

/**
 * container for footer navigation
 */
export function FooterBox(props) {
  return (
    <footer className="w-full">
      <div className="w-full h-48 flex flex-col md:flex-row justify-center items-center bg-footer-blue bg-footer-parliament-image bg-no-repeat bg-right-bottom text-white">
        {props.children}
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center bg-footer-white">
        <nav className="w-auto flex flex-col md:flex-row">
          <a
            href={props.contactLink}
            className="text-canada-ca-link-colour p-2 md:p-4 hover:underline"
          >
            {props.contactText}
          </a>
          <a
            href={props.termsAndConditionsLink}
            className="text-canada-ca-link-colour p-2 md:p-4 hover:underline"
          >
            {props.termsAndConditionsText}
          </a>
          <a
            href={props.privacyLink}
            className="text-canada-ca-link-colour p-2 md:p-4 hover:underline"
          >
            {props.privacyText}
          </a>
        </nav>
        <img
          className="ml-0 md:ml-32"
          src={footerImage}
          width={200}
          height={200}
          alt={props.footerCanadaCaAltText}
        />
      </div>
    </footer>
  );
}

FooterBox.propTypes = {
  /**
   * children elements of the box
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  /**
   * contact link href
   */
  contactLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for contact link
   */
  contactText: PropTypes.string.isRequired,

  /**
   * terms and conditions href
   */
  termsAndConditionsLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for terms and conditions link
   */
  termsAndConditionsText: PropTypes.string.isRequired,

  /**
   * privacy link href
   */
  privacyLink: PropTypes.string.isRequired,

  /**
   * text that is displayed for privacy link
   */
  privacyText: PropTypes.string.isRequired,

  /**
   * alt text for footer canada-ca logo
   */
  footerCanadaCaAltText: PropTypes.string.isRequired,
};
