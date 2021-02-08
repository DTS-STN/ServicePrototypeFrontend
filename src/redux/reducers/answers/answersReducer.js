import { ACTION_TYPES } from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";

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
    case ACTION_TYPES.NETWORK_RECEIVED:
      if (action.resourceType === RESOURCE_TYPES.USER_DATA) {
        let newState = {
          ...state,
          person: {},
        };
        for (let [key, value] of Object.entries(action.body)) {
          key = key.replace("person", "");
          key = key.charAt(0).toLowerCase() + key.slice(1);
          newState.person[key] = value;
        }
        return newState;
      } else {
        return state;
      }
    default:
      return state;
  }
};
