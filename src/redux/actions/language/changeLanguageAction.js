import { ACTION_TYPES } from "../actionTypes";

export const changeLanguageCreator = function (lang) {
  return {
    type: ACTION_TYPES.CHANGE_LANGUAGE,
    lang,
  };
};
