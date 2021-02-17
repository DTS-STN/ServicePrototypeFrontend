import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 * Resource Article Card
 */
export function ResourceCardArticle(props) {
  const { articleImage, title, content, buttonText } = props;

  return (
    <div classname="flex flex-col">
      <div>
        <img alt="" src={articleImage}></img>
      </div>
      <div className="flex flex-col">
        <p>{title}</p>
        <p>{content}</p>
      </div>
      <div>
        <ActionButton invert text={buttonText} />
      </div>
    </div>
  );
}
ResourceCardArticle.propTypes = {
  /**
   * Image associated with Article
   */
  articleImage: PropTypes.string.isRequired,
  /**
   * Title of Article
   */
  title: PropTypes.string.isRequired,
  /**
   * Content of Article
   */
  content: PropTypes.string.isRequired,
  /**
   * Button Text
   */
  buttonText: PropTypes.string.isRequired,
};
