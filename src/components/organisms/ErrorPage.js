import React from "react";
import { Page } from "./Page";
import PropTypes from "prop-types";

/**
 * page component for errors
 */
export function ErrorPage(props) {
  return (
    <Page>
      <main className="w-full h-full flex flex-col justify-center items-center font-sans">
        <h2 className="text-3xl md:text-6xl">{props.errorTitle}</h2>
        <pre className="w-full h-auto bg-gray-500 rounded-lg border border-red-400 whitespace-pre-wrap">
          {typeof props.error === "object"
            ? JSON.stringify(props.error, null, 2)
            : props.error}
        </pre>
      </main>
    </Page>
  );
}

ErrorPage.propTypes = {
  /**
   * title for the error page
   */
  errorTitle: PropTypes.string.isRequired,

  /**
   * error object or string to display. Objects will be converted to JSON and then displayed to the user
   */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};
