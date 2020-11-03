import React from "react";
import PropTypes from "prop-types";
import { EmailPrintButton } from "../atoms/EmailPrintButton";

/**
 * This component layout the email and print buttons
 */
export function EmailPrint(props) {
  const handleClick = (event) => props.onClick(event.currentTarget.id);
  return (
    <div className="md:flex">
      <EmailPrintButton
        id="email"
        icon="icon-envelop"
        text={props.emailText}
        onClick={handleClick}
      />
      <div className="md:m-6" />
      <EmailPrintButton
        id="print"
        icon="icon-printer"
        text={props.printText}
        onClick={handleClick}
      />
    </div>
  );
}

EmailPrint.propTypes = {
  /**
   * Button label for email button
   */
  emailText: PropTypes.string.isRequired,
  /**
   * Button lable for print button
   */
  printText: PropTypes.string.isRequired,
  /**
   * Event Handler when button clicked
   */
  onClick: PropTypes.func,
};
