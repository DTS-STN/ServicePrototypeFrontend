import React from "react";
import { Page } from "./Page";
import ReactMarkdownWithHTML from "react-markdown/with-html";
import PropTypes from "prop-types";

/**
 * Component to render content pages in which content comes of the form of markdown
 */
export function ContentPage(props) {
  return (
    <Page>
      <main className="font-sans">
        <ReactMarkdownWithHTML allowDangerousHtml>
          {props.content}
        </ReactMarkdownWithHTML>
      </main>
    </Page>
  );
}

ContentPage.propTypes = {
  /**
   * content in the form of markdown passed as a string
   */
  content: PropTypes.string.isRequired,
};
