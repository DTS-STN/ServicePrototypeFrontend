import { ACTION_TYPES } from "../actionTypes";

export function removeAnswerActionCreator(key) {
  return {
    type: ACTION_TYPES.REMOVE_ANSWER,
    key,
  };
}
