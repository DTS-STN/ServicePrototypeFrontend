import { ACTION_TYPES } from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";

export const casesData = function (
  state = {
    isFetching: false,
    fetchFailed: false,
    fetchFailedReason: "",
    fetchFailedObj: {},
    casesMap: {},
    casesKeyToIdMap: {},
  },
  action
) {
  switch (action.type) {
    case ACTION_TYPES.NETWORK_REQUEST:
      if (
        action.resourceType === RESOURCE_TYPES.CASES ||
        action.resourceType === RESOURCE_TYPES.CASE
      ) {
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
      if (
        action.resourceType === RESOURCE_TYPES.CASES ||
        action.resourceType === RESOURCE_TYPES.CASE
      ) {
        let data = action.body;
        if (action.resourceType === RESOURCE_TYPES.CASE) {
          data = [data];
        }
        if (Array.isArray(data) && data.length > 0) {
          let newCasesMap = { ...state.casesMap };
          let newCasesKeyToIdMap = { ...state.casesKeyToIdMap };
          data.forEach((value) => {
            newCasesMap[value.id] = {
              ...newCasesMap[value.id],
              ...value,
            };
            newCasesKeyToIdMap[value.id] = value.id;
          });

          return {
            ...state,
            isFetching: false,
            fetchFailed: false,
            fetchFailedReason: "",
            fetchFailedObj: {},
            casesMap: newCasesMap,
            casesKeyToIdMap: newCasesKeyToIdMap,
          };
        }
      }
      break;
    case ACTION_TYPES.NETWORK_REQUEST_FAILED:
      if (
        action.resourceType === RESOURCE_TYPES.CASES ||
        action.resourceType === RESOURCE_TYPES.CASE
      ) {
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
