import { createSelector } from "reselect";
import { languageSelector } from "../language";

// selector for raw benefits data
export const benefitsMapSelector = (state) =>
  state.benefits.benefitsData.benefitsMap;

export const benefitTransformer = (data, lang) => {
  return {
    benefitId: data.benefit_key,
    benefitTag: data.benefit_tags.reduce((accumulator, item, index, array) => {
      if (accumulator === "") {
        return accumulator + item[`tag_${lang}`];
      }
      return accumulator + ", " + item[`tag_${lang}`];
    }, ""),
    benefitTitle: data[`title_${lang}`],
    benefitDescription: data[`benefit_description_${lang}`],
    benefitContent: data[`benefit_content_${lang}`],
    checkBoxAriaLabelBy:
      lang === "fr"
        ? `sélectionner ${data["title_fr"]}`
        : `select ${data["title_en"]}`,
    isSelected: data.isSelected,
    isEligible: data.isEligible,
  };
};

// selector for one particular benefit
export const benefitSelectorFactory = (benefitID) => {
  return createSelector(
    languageSelector,
    benefitsMapSelector,
    (lang, benefitsData) => {
      return benefitsData[benefitID]
        ? benefitTransformer(benefitsData[benefitID], lang)
        : undefined;
    }
  );
};

// selector that returns benefits data array in a transformed format
export const benefitsDataSelector = createSelector(
  languageSelector,
  benefitsMapSelector,
  (lang, benefitsData) => {
    return Object.keys(benefitsData).map((id) => {
      return benefitTransformer(benefitsData[id], lang);
    });
  }
);
