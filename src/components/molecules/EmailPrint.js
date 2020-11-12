import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 * This component layout the email and print buttons
 */
export function EmailPrint(props) {
  const handleClick = (event) => props.onClick(event.currentTarget.id);
  return (
    <div className="flex text-gray-700">
      <ActionButton
        className={"shadow-none hover:text-black"}
        id="email"
        icon="icon-envelop p-1"
        text={props.emailText}
        onClick={handleClick}
        dataTestId="envelopIcon"
      />
      <ActionButton
        className={"shadow-none hover:text-black"}
        id="print"
        icon="icon-printer p-1"
        text={props.printText}
        onClick={handleClick}
        dataTestId="printerIcon"
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
