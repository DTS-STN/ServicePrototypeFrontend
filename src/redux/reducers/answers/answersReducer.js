import { ACTION_TYPES } from "../../actions";

export const answers = function (state = {}, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_ANSWER:
      return {
        ...state,
        [action.key]: action.value,
      };
    case ACTION_TYPES.REMOVE_ANSWER:
      const data = {
        ...state,
      };
      delete data[action.key];
      return data;
    default:
      return state;
  }
};
