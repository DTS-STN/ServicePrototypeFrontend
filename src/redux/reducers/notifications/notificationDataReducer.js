import { ACTION_TYPES } from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";

export const notificationsData = function (
  state = {
    isFetching: false,
    fetchFailed: false,
    fetchFailedReason: "",
    fetchFailedObj: {},
    notifications: [],
  },
  action
) {
  switch (action.type) {
    case ACTION_TYPES.NETWORK_REQUEST:
      if (action.resourceType === RESOURCE_TYPES.NOTIFICATIONS) {
        return {
          ...state,
          isFetching: true,
          fetchFailed: false,
          fetchFailedReason: "",
          fetchFailedObj: {},
        };
      }
      break;
    case ACTION_TYPES.NETWORK_RECEIVED:
      if (action.resourceType === RESOURCE_TYPES.NOTIFICATIONS) {
        let data = action.body;

        if (Array.isArray(data.data) && data.data.length > 0) {
          return {
            ...state,
            isFetching: false,
            fetchFailed: false,
            fetchFailedReason: "",
            fetchFailedObj: {},
            notifications: data.data,
          };
        }
      }
      break;
    case ACTION_TYPES.NETWORK_REQUEST_FAILED:
      if (action.resourceType === RESOURCE_TYPES.NOTIFICATIONS) {
        return {
          ...state,
          isFetching: false,
          fetchFailed: true,
          fetchFailedReason: action.networkRequestFailedReason,
          fetchFailedObj: { ...action.body } || {},
        };
      }
      break;
    default:
      return state;
  }
  return state;
};
