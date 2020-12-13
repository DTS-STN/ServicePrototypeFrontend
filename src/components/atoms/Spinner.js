import React from "react";
import PropTypes from "prop-types";

/**
 * Spinner component used as a placeholder for loading content
 */
export function Spinner(props) {
  return (
    <div
      className={`loader ease-linear rounded-full border-4 border-t-4 border-gray-200 ${
        props.size
          ? props.size === "large"
            ? "h-64 w-64"
            : props.size === "medium"
            ? "h-40 w-40"
            : "h-20 w-20"
          : "h-10 w-10"
      }`}
    />
  );
}

Spinner.propTypes = {
  /**
   * the size of the spinner, this should be either large, medium or small. Defaults to small
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
