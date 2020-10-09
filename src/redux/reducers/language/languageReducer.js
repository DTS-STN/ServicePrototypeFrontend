import { ACTION_TYPES, LANGUAGES } from "../../actions";

export const language = function (state = "en", action) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_LANGUAGE:
      switch (action.lang) {
        case LANGUAGES.EN:
          return "en";
        case LANGUAGES.FR:
          return "fr";
        default:
          return state;
      }
    default:
      return state;
  }
};
