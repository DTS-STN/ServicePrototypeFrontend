import { ACTION_TYPES } from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";

export const userData = function (
  state = {
    // boolean flag to indicate whether a request is in progress
    isFetching: false,
    // boolean flag to indicate if a request has failed
    fetchFailed: false,
    // reason for failure of request
    fetchFailedReason: "",
    // object containing data of why the request failed
    fetchFailedObj: {},
    // object containing user data received from User Service
    user: {},
  },
  action
) {
  switch (action.type) {
    case ACTION_TYPES.NETWORK_REQUEST:
      if (action.resourceType === RESOURCE_TYPES.USER_DATA) {
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
      if (action.resourceType === RESOURCE_TYPES.USER_DATA) {
        return {
          ...state,
          isFetching: false,
          fetchFailed: false,
          fetchFailedReason: "",
          user: action.body,
        };
      }
      break;

    case ACTION_TYPES.NETWORK_REQUEST_FAILED:
      if (action.resourceType === RESOURCE_TYPES.USER_DATA) {
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
