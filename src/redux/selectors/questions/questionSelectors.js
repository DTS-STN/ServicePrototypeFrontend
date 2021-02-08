import { createSelector } from "reselect";
import { languageSelector } from "../language";

//selector for raw question data
export const questionsMapSelector = (state) =>
  state.questions.questionsData.questionsMap;

export const questionsMapSelectorFr = (state) =>
  state.questions.questionsData.questionsMapFr;

export const questionTransformer = (data) => {
  return {
    questionId: data[`value`],
    questionText: data[`text`],
    questionOptions: data[`answers`],
  };
};

export const questionsSelector = createSelector(
  languageSelector,
  questionsMapSelector,
  questionsMapSelectorFr,
  (lang, questionsData, questionsDataFr) => {
    if (lang === "fr") {
      return Object.keys(questionsDataFr).map((id) => {
        return questionTransformer(questionsDataFr[id]);
      });
    } else {
      return Object.keys(questionsData).map((id) => {
        return questionTransformer(questionsData[id]);
      });
    }
  }
);
