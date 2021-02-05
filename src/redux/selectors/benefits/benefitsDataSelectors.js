import { createSelector } from "reselect";
import { languageSelector } from "../language";

// selector for raw benefits data
export const benefitsMapSelector = (state) =>
  state.benefits.benefitsData.benefitsMap;

export const benefitsMapSelectorFr = (state) =>
  state.benefits.benefitsData.benefitsMapFr;

export const benefitsEligibilitySelector = (state) =>
  state.benefits.benefitsEligibility.benefits;

export const benefitTransformer = (data, lang) => {
  return {
    benefitId: data.benefit_key,
    benefitTitle: data[`title`],
    benefitDescription: data[`description`],
    benefitContent: data[`long_description`],
    benefitType: data["benefit_type"],
    checkBoxAriaLabelBy:
      lang === "fr"
        ? `sélectionner ${data["title"]}`
        : `select ${data["title"]}`,
    isSelected: data.isSelected,
    isEligible: data.isEligible,
  };
};

// selector for one particular benefit
export const benefitSelectorFactory = (benefitId) => {
  return createSelector(
    languageSelector,
    benefitsMapSelector,
    benefitsMapSelectorFr,
    (lang, benefitsData, benefitsDataFr) => {
      if (lang === "fr") {
        return benefitsDataFr[benefitId]
          ? benefitTransformer(benefitsDataFr[benefitId], lang)
          : undefined;
      } else {
        return benefitsData[benefitId]
          ? benefitTransformer(benefitsData[benefitId], lang)
          : undefined;
      }
    }
  );
};

// selector that returns benefits data array in a transformed format
export const benefitsDataSelector = createSelector(
  languageSelector,
  benefitsMapSelector,
  benefitsMapSelectorFr,
  (lang, benefitsData, benefitsDataFr) => {
    if (lang === "fr") {
      return Object.keys(benefitsDataFr).map((id) => {
        return benefitTransformer(benefitsDataFr[id], lang);
      });
    } else {
      return Object.keys(benefitsData).map((id) => {
        return benefitTransformer(benefitsData[id], lang);
      });
    }
  }
);

export const eligibleBenefitsSelector = createSelector(
  languageSelector,
  benefitsMapSelector,
  benefitsMapSelectorFr,
  benefitsEligibilitySelector,
  (lang, benefitsData, benefitsDataFr, benefitsEligibility) => {
    if (lang === "fr") {
      return benefitsEligibility.map((value) =>
        benefitTransformer(benefitsDataFr[value])
      );
    } else {
      return benefitsEligibility.map((value) =>
        benefitTransformer(benefitsData[value])
      );
    }
  }
);
