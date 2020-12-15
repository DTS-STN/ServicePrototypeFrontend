import React from "react";
import PropTypes from "prop-types";

import { LifeJourneyCard } from "../molecules/LifeJourneyCard";

/**
 * Mobile first flex grid component for life journey cards
 */
export function LifeJourneyGrid(props) {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div
        className="flex flex-col md:flex-row flex-wrap justify-center items-center"
        style={{
          maxWidth: 900,
        }}
      >
        {props.lifeJourneys.map((value) => {
          return (
            <LifeJourneyCard
              key={value.lifeJourneyId}
              lifeJourneyId={value.lifeJourneyId}
              lifeJourneyTitle={value.lifeJourneyTitle}
              lifeJourneyDescription={value.lifeJourneyDescription}
              onLifeJourneyClick={props.onLifeJourneyClick}
            />
          );
        })}
      </div>
    </div>
  );
}

LifeJourneyGrid.propTypes = {
  /**
   * life journey array which contains the unique
   * dynamic information for each card
   */
  lifeJourneys: PropTypes.arrayOf(
    PropTypes.shape({
      lifeJourneyId: PropTypes.string.isRequired,
      lifeJourneyTitle: PropTypes.string.isRequired,
      lifeJourneyDescription: PropTypes.string.isRequired,
    })
  ),

  /**
   * event handler for when a life journey card was clicked
   */
  onLifeJourneyClick: PropTypes.func,
};
