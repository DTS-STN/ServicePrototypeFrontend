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
  const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });

  return (
    <div className="sm:bg-gray-md flex items-center p-2 px-4">
      <p className="hidden sm:flex mr-6">{props.text}</p>
      <div className="w-full sm:w-1/2 flex m-auto">
        <i
          className="icon-search absolute p-2 text-text-gray-dk"
          data-testid="searchIcon"
        />
        <input
          className="w-full sm:w-56 md:w-72 lg:w-96 rounded-l-full text-center focus:outline-none border-t border-b border-l border-gray-md"
          type="text"
          value={props.value}
          placeholder={props.placeholder}
          data-testid="inputField"
        />
        <ActionButton
          text={isMobile ? "" : props.buttonText}
          halfRound={true}
          className="lg:w-48 shadow-none bg-gray-light border border-gray-md"
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
   * Input value of text field
   */
  value: PropTypes.string,
  /**
   * Handler when search button clicked
   */
  onSearch: PropTypes.func,
};
