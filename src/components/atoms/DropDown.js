import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { ActionButton } from "./ActionButton";

export function DropDown(props) {
  const {
    title,
    options,
    buttonBoolean,
    handleClick,
    buttonText,
    autoFillProv,
  } = props;

  return (
    <div>
      <p className="font-semibold mb-8">{title}</p>

      <div className="flex flex-col">
        <Select
          className="w-2/4"
          options={options}
          defaultValue={options[autoFillProv]}
        />
        {buttonBoolean ? (
          <div className=" w-2/4 mt-4 flex justify-end ">
            <ActionButton
              text={buttonText}
              className={"bg-bg-gray-dk text-white hover:bg-black"}
              onClick={handleClick}
            />
          </div>
        ) : undefined}
      </div>
    </div>
  );
}

DropDown.prototype = {
  autoFillProv: PropTypes.number,
  title: PropTypes.string,
  options: PropTypes.array,
  buttonBoolean: PropTypes.bool,
  handleClick: PropTypes.func,
  buttonText: PropTypes.string,
};
