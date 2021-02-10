import React, { createElement } from "react";
import { Page } from "./Page";
import ReactMarkdownWithHTML from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import PropTypes from "prop-types";
import gfm from "remark-gfm";
import { ActionButton } from "../atoms/ActionButton";

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

  list: (props) => {
    const attrs = getCoreProps(props);
    if (
      props.start !== null &&
      props.start !== 1 &&
      props.start !== undefined
    ) {
      attrs.start = props.start.toString();
    }

    return props.ordered ? (
      <ol {...attrs} className="list-decimal m-6">
        {props.children}
      </ol>
    ) : (
      <ul {...attrs} className="list-disc m-6">
        {props.children}
      </ul>
    );
  },
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={atomDark}
        language={language}
        children={value}
      />
    );
  },
};

/**
 * Component to render content pages in which content comes of the form of markdown
 */
export function ContentPage(props) {
  return (
    <Page dataCy={"benefit-details"}>
      <main className="font-sans">
        {props.beforeContent}
        <ReactMarkdownWithHTML
          plugins={[gfm]}
          renderers={renders}
          allowDangerousHtml
        >
          {props.content}
        </ReactMarkdownWithHTML>
        {props.afterContent}
      </main>
      <div className="container inline-flex justify-between">
        {props.GoBackButtonText ? (
          <div className="mt-6 justify-start" data-cy={"goBack-button"}>
            <ActionButton
              text={props.GoBackButtonText}
              className={
                "bg-bg-white-dk text-black hover:bg-bg-gray-dk hover:text-white mb-4 py-2 px-16 border-solid border-2 border-black"
              }
              onClick={props.onGoBackButtonClick}
            />
          </div>
        ) : null}

        {props.ApplyButtonText ? (
          <div className="mt-6 justify-end" data-cy={props.dataCy}>
            <ActionButton
              text={props.ApplyButtonText}
              className={
                "bg-bg-gray-dk text-white hover:bg-black mb-4 py-2 px-16"
              }
              onClick={props.onApplyButtonClick}
            />
          </div>
        ) : null}
      </div>
    </Page>
  );
}

ContentPage.propTypes = {
  /**
   * Go back button text
   */
  GoBackButtonText: PropTypes.string.isRequired,

  /**
   * Go back button handler
   */
  onGoBackButtonClick: PropTypes.func,

  /**
   * Apply button text
   */
  ApplyButtonText: PropTypes.string.isRequired,

  /**
   * Apply button handler
   */
  onApplyButtonClick: PropTypes.func,

  /**
   * items before any actual content
   */
  beforeContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),

  /**
   * content in the form of markdown passed as a string
   */
  content: PropTypes.string.isRequired,

  /**
   * items after any content
   */
  afterContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  /**
   * This is for adding an id for testing in cypress
   */
  dataCy: PropTypes.string,
};
