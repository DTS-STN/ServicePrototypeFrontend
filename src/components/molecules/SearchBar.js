import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

export function SearchBar(props) {
  return (
    <div className="flex w-full h-10 items-center bg-gray-300 px-4">
      <p className="text-lg">{props.text}</p>
      <div className="flex ml-6">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-l-full text-center"
        />
        <ActionButton
          text={props.buttonText}
          halfRound={true}
          className="shadow-none bg-gray-200"
        />
      </div>
    </div>
  );
}
