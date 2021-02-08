import { ACTION_TYPES } from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";

export const benefitsEligibility = function (
  state = {
    isFetching: false,
    fetchFailed: false,
    fetchFailedReason: "",
    fetchFailedObj: {},
    benefits: [],
  },
  action
) {
  switch (action.type) {
    case ACTION_TYPES.NETWORK_REQUEST:
      if (action.resourceType === RESOURCE_TYPES.ELIGIBILITY) {
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
      if (action.resourceType === RESOURCE_TYPES.ELIGIBILITY) {
        return {
          ...state,
          isFetching: false,
          fetchFailed: false,
          fetchFailedReason: "",
          fetchFailedObj: {},
          benefits: action.body.benefits,
        };
      }
      break;
    case ACTION_TYPES.NETWORK_REQUEST_FAILED:
      if (action.resourceType === RESOURCE_TYPES.ELIGIBILITY) {
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
