import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { ActionButton } from "./ActionButton";

export function DropDown(props) {
  const { title, options, buttonBoolean, handleClick, buttonText } = props;

  return (
    <div>
      <p className="font-semibold mb-8">{title}</p>
      <Select className="w-2/4" options={options} />
      {buttonBoolean ? (
        <div className="mt-4">
          <ActionButton
            text={buttonText}
            className={"bg-bg-gray-dk text-white hover:bg-black"}
            onClick={handleClick}
          />
        </div>
      ) : undefined}
    </div>
  );
}

DropDown.prototype = {
  title: PropTypes.string,
  options: PropTypes.array,
  buttonBoolean: PropTypes.bool,
  handleClick: PropTypes.func,
  buttonText: PropTypes.string,
};
