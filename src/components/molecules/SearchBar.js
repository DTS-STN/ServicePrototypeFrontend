import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";
import { useMediaQuery } from "react-responsive";

/**
 * The search bar component that allow user to search keyword to show matching result of benefits
 */
export function SearchBar(props) {
  const handleClick = () => props.onSearch();
  /**
   * Check if screen size is mobile
   */
  const isMobile = useMediaQuery({ query: `(max-width: 516px)` });

  return (
    <div className="md:bg-gray-md md:flex items-center p-2 px-4">
      <p className="hidden md:flex text-lg">{props.text}</p>
      <div className="md:ml-8 flex w-auto">
        {/**
         <i className="icon-search p-2" />
         */}
        <input
          className="w-full md:w-72 rounded-l-full text-center focus:outline-none border-t border-b border-l border-gray-md"
          type="text"
          value={props.value}
          placeholder={props.placeholder}
        />
        <ActionButton
          text={isMobile ? "" : props.buttonText}
          halfRound={true}
          className="shadow-none bg-gray-light border border-gray-md"
          icon2="icon-cheveron-down p-1"
          onClick={handleClick}
          dataTestId="searchButton"
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  /**
   * Discription beside the search bar, hidden in mobile view
   */
  text: PropTypes.string,
  /**
   * Text on the search button
   */
  buttonText: PropTypes.string,
  /**
   * Placeholder text inside the search bar
   */
  placeholder: PropTypes.string,
  /**
   * Handler when search button clicked
   */
  onSearch: PropTypes.func,
};
