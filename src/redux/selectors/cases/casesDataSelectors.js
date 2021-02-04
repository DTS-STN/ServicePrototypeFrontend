import { createSelector } from "reselect";
import { languageSelector } from "../language";

// selector for raw case data
export const casesMapSelector = (state) => state.cases.casesData.casesMap;

export const caseTransformer = (data, lang) => {
  return {
    id: data.id,
    caseReferenceNumber: data.referenceNumber,
    caseStatus: data[`status`],
    caseBenefitType: data[`benefitType`],
  };
};

// selector for one particular case
export const caseSelectorFactory = (caseId) => {
  return createSelector(
    languageSelector,
    casesMapSelector,
    (lang, casesData, benefitsDataFr) => {
      return casesData[caseId]
        ? caseTransformer(casesData[caseId], lang)
        : undefined;
    }
  );
};

// selector that returns cases data array in a transformed format
export const casesDataSelector = createSelector(
  languageSelector,
  casesMapSelector,
  (lang, casesData, casesDataFr) => {
    if (lang === "fr") {
      return Object.keys(casesDataFr).map((id) => {
        return caseTransformer(casesDataFr[id], lang);
      });
    } else {
      return Object.keys(casesData).map((id) => {
        return caseTransformer(casesData[id], lang);
      });
    }
  }
);
