import React from "react";
import PropTypes from "prop-types";
import { ResourceCardArticle } from "../molecules/ResourceCardArticle";

/**
 * Resource Grid
 */

export function ResourceGrid(props) {
  const { header, resources } = props;

  return (
    <div className="flex flex-col">
      <h3>{header}</h3>
      <div className="flex flex-row">
        {resources.map((resource) => (
          <ResourceCardArticle
            image={resource.image}
            title={resource.title}
            content={resource.content}
            buttonText={resource.buttonText}
          />
        ))}
      </div>
    </div>
  );
}
ResourceGrid.propTypes = {
  /**
   * Header of Component
   */
  header: PropTypes.string.isRequired,
  /**
   * Array of Resources Available
   */
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Image associated with Article
       */
      image: PropTypes.string.isRequired,
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
    })
  ),
};
