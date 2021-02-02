import { createSelector } from "reselect";
import { languageSelector } from "../language";

// selector for raw case data
export const casesMapSelector = (state) =>
  state.benefits.benefitsData.benefitsMap;

export const casesMapSelectorFr = (state) =>
  state.benefits.benefitsData.benefitsMapFr;

export const caseTransformer = (data, lang) => {
  return {
    benefitId: data.benefit_key,
    benefitTitle: data[`title`],
    benefitDescription: data[`description`],
    benefitContent: data[`long_description`],
    checkBoxAriaLabelBy:
      lang === "fr"
        ? `sélectionner ${data["title"]}`
        : `select ${data["title"]}`,
    isSelected: data.isSelected,
    isEligible: data.isEligible,
  };
};

// selector for one particular case
export const caseSelectorFactory = (benefitId) => {
  return createSelector(
    languageSelector,
    casesMapSelector,
    casesMapSelectorFr,
    (lang, benefitsData, benefitsDataFr) => {
      if (lang === "fr") {
        return benefitsDataFr[benefitId]
          ? caseTransformer(benefitsDataFr[benefitId], lang)
          : undefined;
      } else {
        return benefitsData[benefitId]
          ? caseTransformer(benefitsData[benefitId], lang)
          : undefined;
      }
    }
  );
};

// selector that returns cases data array in a transformed format
export const casesDataSelector = createSelector(
  languageSelector,
  casesMapSelector,
  casesMapSelectorFr,
  (lang, benefitsData, benefitsDataFr) => {
    if (lang === "fr") {
      return Object.keys(benefitsDataFr).map((id) => {
        return caseTransformer(benefitsDataFr[id], lang);
      });
    } else {
      return Object.keys(benefitsData).map((id) => {
        return caseTransformer(benefitsData[id], lang);
      });
    }
  }
);
