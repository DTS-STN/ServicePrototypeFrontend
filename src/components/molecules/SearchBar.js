import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

export function SearchBar(props) {
  return (
    <div className="md:flex items-center bg-gray-md p-2 px-4">
      <p className="text-lg">{props.text}</p>
      <div className="md:ml-8 w-auto flex">
        <input
          type="text"
          placeholder={props.placeholder}
          className="md:w-62 lg:w-72 rounded-l-full text-center focus:outline-none"
        />
        <ActionButton
          text={props.buttonText}
          halfRound={true}
          className="shadow-none bg-gray-light"
        />
      </div>
    </div>
  );
}
