import React, { createElement, useState } from "react";
import { Page } from "./Page";
import ReactMarkdownWithHTML from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import PropTypes from "prop-types";
import gfm from "remark-gfm";
import { ActionButton } from "../atoms/ActionButton";
import { TableComponent } from "../atoms/TableComponent";

// i18n imports
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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

      {props.entitlementVisible && props.TableContent.length != 0 ? (
        <TableComponent
          title={t("estimatedDollar")}
          title1={t("lessThan30000")}
          value1={props.TableContent[0].entitlementGrant}
          title2={t("between30000and60000")}
          value2={props.TableContent[1].entitlementGrant}
          title3={t("moreThan60000")}
          value3={props.TableContent[2].entitlementGrant}
        />
      ) : props.DisplayEntitlementButtonText ? (
        <div
          className="mt-6 container inline-flex justify-between border-b border-t items-center"
          data-cy={props.dataCy}
        >
          <span className="font-bold">{props.estimateText}</span>
          <ActionButton
            text={props.DisplayEntitlementButtonText}
            className={
              "bg-bg-gray-dk text-white hover:bg-black mt-6 mb-4 py-2 px-16 float-right"
            }
            onClick={props.displayEntitlementTable}
          />
        </div>
      ) : null}

      <div className="container inline-flex justify-between">
        {props.GoBackButtonText ? (
          <div className="mt-6 justify-start" data-cy={"goBack-button"}>
            <ActionButton
              text={props.GoBackButtonText}
              className={
                "bg-bg-white-dk text-black hover:bg-bg-gray-dk hover:text-white mb-4 py-2 px-16 border-solid border-2 border-black"
              }
              onClick={props.goBackHomeClickHandler}
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
   * Bool if entitlement is visible
   */
  entitlementVisible: PropTypes.bool,

  /**
   * Entitlement buttom handler
   */
  estimateText: PropTypes.string,

  /**
   * Entitlement buttom handler
   */
  displayEntitlementTable: PropTypes.func,

  /**
   * Go back button text
   */
  GoBackButtonText: PropTypes.string.isRequired,

  /**
   * Go back button handler
   */
  goBackHomeClickHandler: PropTypes.func,

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
