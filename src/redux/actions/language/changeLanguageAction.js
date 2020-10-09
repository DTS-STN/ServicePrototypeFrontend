import { CHANGE_LANGUAGE } from "./actionTypes";

export const LANGUAGES = {
  EN: "EN",
  FR: "FR",
};

export const changeLanguageCreator = function (lang) {
  return {
    type: CHANGE_LANGUAGE,
    lang,
  };
};
