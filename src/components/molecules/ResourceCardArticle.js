import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../atoms/ActionButton";

/**
 * Resource Article Card
 */
export function ResourceCardArticle(props) {
  const { articleImage, title, content } = props;

  return (
    <div className="mt-4 mr-8 rounded-lg shadow flex flex-col">
      <div>
        <img alt="" src={articleImage}></img>
      </div>
      <div className="flex flex-col mt-4 px-4">
        <p className="text-lg font-bold">{title}</p>
        <p>{content}</p>
        <ActionButton
          className="w-1/2 my-4 bg-bg-gray-dk text-white hover:bg-black"
          id="ReadMore"
          text="Read More"
        />
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
};
