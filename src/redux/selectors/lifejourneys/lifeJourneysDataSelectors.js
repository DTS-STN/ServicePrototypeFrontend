import { createSelector } from "reselect";
import { languageSelector } from "../language";
import {
  benefitsMapSelector,
  benefitTransformer,
} from "../benefits/benefitsDataSelectors";

export const lifeJourneysMapSelector = (state) => {
  return state.lifejourneys.lifeJourneysData.lifeJourneysMap;
};

export const lifeJourneyTransformer = (data, lang) => {
  return {
    lifeJourneyId: data.life_journey_key,
    lifeJourneyTitle: data[`title_${lang}`],
    lifeJourneyDescription: data[`description_${lang}`],
    lifeJourneyContent: data[`content_${lang}`],
  };
};

// selector for one particular lifejourney
export const lifeJourneySelectorFactory = (lifeJourneyID) => {
  return createSelector(
    languageSelector,
    lifeJourneysMapSelector,
    (lang, lifeJourneysData) => {
      return lifeJourneysData[lifeJourneyID]
        ? lifeJourneyTransformer(lifeJourneysData[lifeJourneyID], lang)
        : undefined;
    }
  );
};

// selector that returns life journeys data array in a transformed format
export const lifeJourneysDataSelector = createSelector(
  languageSelector,
  lifeJourneysMapSelector,
  (lang, lifeJourneysData) => {
    return Object.keys(lifeJourneysData).map((id) => {
      return lifeJourneyTransformer(lifeJourneysData[id], lang);
    });
  }
);

// selector that returns benefit for life journey
export const benefitForLifeJourney = (lifeJourneyID) => {
  return createSelector(
    languageSelector,
    lifeJourneysMapSelector,
    benefitsMapSelector,
    (lang, lifeJourneysData, benefitsData) => {
      return lifeJourneysData[lifeJourneyID]
        ? lifeJourneysData[lifeJourneyID].related_benefits.map((id) => {
            return benefitsData[id]
              ? benefitTransformer(benefitsData[id], lang)
              : id;
          })
        : [];
    }
  );
};
