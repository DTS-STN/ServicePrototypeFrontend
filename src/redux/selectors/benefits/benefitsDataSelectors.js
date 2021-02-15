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
    redirectUrl: data["redirect_url"],
    checkBoxAriaLabelBy:
      lang === "fr"
        ? `sélectionner ${data["title"]}`
        : `select ${data["title"]}`,
    isSelected: data.isSelected,
    isEligible: data.isEligible,
    serviceType: data["service_type"],
    benefitTag: data["service_type"],
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
    if (!benefitsEligibility) return [];
    let internalBenefits = [];
    if (lang === "fr") {
      benefitsEligibility.forEach(function (item) {
        if (benefitsData[item]["service_type"] === "Internal")
          internalBenefits.push(benefitTransformer(benefitsDataFr[item]));
      });
      return internalBenefits;
    } else {
      benefitsEligibility.forEach(function (item) {
        if (benefitsData[item]["service_type"] === "Internal")
          internalBenefits.push(benefitTransformer(benefitsData[item]));
      });
      return internalBenefits;
    }
  }
);

export const externalBenefitsDataSelector = createSelector(
  languageSelector,
  benefitsMapSelector,
  benefitsMapSelectorFr,
  benefitsEligibilitySelector,
  (lang, benefitsData, benefitsDataFr, eligibleBenefits) => {
    if (!eligibleBenefits) return [];
    let externalBenefits = [];
    if (lang === "fr") {
      eligibleBenefits.forEach(function (item) {
        if (benefitsData[item]["service_type"] === "External")
          externalBenefits.push(benefitTransformer(benefitsDataFr[item]));
      });
      return externalBenefits;
    } else {
      eligibleBenefits.forEach(function (item) {
        if (benefitsData[item]["service_type"] === "External")
          externalBenefits.push(benefitTransformer(benefitsData[item]));
      });
      return externalBenefits;
    }
  }
);
