import { ACTION_TYPES } from "../actionTypes";

export function setAnswerActionCreator(key, value) {
  return {
    type: ACTION_TYPES.SET_ANSWER,
    key,
    value,
  };
}
