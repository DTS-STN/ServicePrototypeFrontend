import React from "react";
import PropTypes from "prop-types";

/**
 * card component for life journey
 */
export function LifeJourneyCard(props) {
  return (
    <div
      className="flex w-64 h-24 m-2 bg-lifejourney-gray hover:bg-lifejourney-gray-hover rounded-md"
      role="button"
      onClick={() => {
        props.onLifeJourneyClick(props.lifeJourneyId);
      }}
      data-testid={props.lifeJourneyId + "-lifejourney"}
    >
      <div className="flex-grow p-2">
        <h3>{props.lifeJourneyTitle}</h3>
        <p className="m-1 text-xs truncate-3-lines-sm">
          {props.lifeJourneyDescription}
        </p>
      </div>
      <div className="h-full flex justify-center items-center p-4">
        <span
          className="icon-angle-right"
          style={{
            fontSize: "5em",
          }}
        />
      </div>
    </div>
  );
}

LifeJourneyCard.propTypes = {
  /**
   * id of the life journey that will be passed into handlers when an event occurs
   */
  lifeJourneyId: PropTypes.string.isRequired,

  /**
   * title of the life journey
   */
  lifeJourneyTitle: PropTypes.string.isRequired,

  /**
   * description of the life journey
   */
  lifeJourneyDescription: PropTypes.string.isRequired,

  /**
   * life journey click event
   */
  onLifeJourneyClick: PropTypes.func.isRequired,
};
