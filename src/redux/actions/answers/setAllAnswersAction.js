import { ACTION_TYPES } from "../actionTypes";

export function setAllAnswersActionCreator(answers) {
  return {
    type: ACTION_TYPES.SET_ALL_ANSWERS,
    answers,
  };
}
