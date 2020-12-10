import React, { createElement } from "react";
import { Page } from "./Page";
import ReactMarkdownWithHTML from "react-markdown/with-html";
import PropTypes from "prop-types";
import gfm from "remark-gfm";

function getCoreProps(props) {
  const source = props["data-sourcepos"];
  /* istanbul ignore next - nodes from plugins w/o position */
  return source ? { "data-sourcepos": source } : {};
}

const renders = {
  heading: (props) => {
    if (props.level === 1) {
      return (
        <h1
          {...props}
          className="w-full text-3xl border-b mt-2 mb-2 border-h1-underline-color"
        />
      );
    } else if (props.level === 2) {
      return <h2 {...props} className="text-3xl mb-2" />;
    }
    return createElement(
      `h${props.level}`,
      getCoreProps(props),
      props.children
    );
  },
};

/**
 * Component to render content pages in which content comes of the form of markdown
 */
export function ContentPage(props) {
  return (
    <Page>
      <main className="font-sans">
        <ReactMarkdownWithHTML
          plugins={[gfm]}
          renderers={renders}
          allowDangerousHtml
        >
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
