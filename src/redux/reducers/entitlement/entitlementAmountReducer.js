import { ACTION_TYPES } from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";

export const entitlementData = function (
  state = {
    isFetching: false,
    fetchFailed: false,
    fetchFailedReason: "",
    fetchFailedObj: {},
    entitlement: [],
  },
  action
) {
  switch (action.type) {
    case ACTION_TYPES.NETWORK_REQUEST:
      if (action.resourceType === RESOURCE_TYPES.ENTITLEMENT) {
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
      if (action.resourceType === RESOURCE_TYPES.ENTITLEMENT) {
        return {
          ...state,
          isFetching: false,
          fetchFailed: false,
          fetchFailedReason: "",
          fetchFailedObj: {},
          entitlement: [...state.entitlement, action.body.entitlement],
        };
      }
      break;
    case ACTION_TYPES.NETWORK_REQUEST_FAILED:
      if (action.resourceType === RESOURCE_TYPES.ENTITLEMENT) {
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
