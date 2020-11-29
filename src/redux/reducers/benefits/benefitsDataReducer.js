import { ACTION_TYPES } from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";
import { benefits } from "./index";

export const benefitsData = function (
  state = {
    // boolean flag to indicate whether a request is in progress
    isFetching: false,
    // boolean flag to indicate if a request has failed
    fetchFailed: false,
    // reason for failure of request
    fetchFailedReason: "",
    // object containing data of why the request failed
    fetchFailedObj: {},
    // map of benefits data
    benefitsMap: {},
    // map of benefit OF keys to keys in benefitsMap
    benefitsKeyToIdMap: {},
  },
  action
) {
  switch (action.type) {
    case ACTION_TYPES.NETWORK_REQUEST:
      if (action.resourceType === RESOURCE_TYPES.BENEFITS) {
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
      if (action.resourceType === RESOURCE_TYPES.BENEFITS) {
        const data = action.body;
        if (Array.isArray(data) && data.length > 0) {
          let newBenefitsMap = { ...state.benefitsMap };
          let newBenefitsKeyToIdMap = { ...state.benefitsKeyToIdMap };
          data.forEach((value) => {
            if (!newBenefitsMap[value.id]) {
              newBenefitsMap[value.id] = {
                isEligible: false,
                isSelected: false,
              };
            }
            newBenefitsMap[value.id] = {
              ...newBenefitsMap[value.id],
              ...value,
            };
            newBenefitsKeyToIdMap[value.benefit_key] = value.id;
          });

          return {
            ...state,
            isFetching: false,
            fetchFailed: false,
            fetchFailedReason: "",
            fetchFailedObj: {},
            benefitsMap: newBenefitsMap,
            benefitsKeyToIdMap: newBenefitsKeyToIdMap,
          };
        }
      }
      break;
    case ACTION_TYPES.NETWORK_REQUEST_FAILED:
      if (action.resourceType === RESOURCE_TYPES.BENEFITS) {
        return {
          ...state,
          isFetching: false,
          fetchFailed: true,
          fetchFailedReason: action.networkRequestFailedReason,
          fetchFailedObj: { ...action.body } || {},
        };
      }
      break;
    case ACTION_TYPES.SELECT_BENEFIT:
      if (
        action.id &&
        (state.benefitsMap[action.id] ||
          state.benefitsMap[state.benefitsKeyToIdMap[action.id]])
      ) {
        let benefit_id = state.benefitsMap[action.id]
          ? action.id
          : state.benefitsKeyToIdMap[action.id];
        return {
          ...state,
          benefitsMap: {
            ...state.benefitsMap,
            [benefit_id]: {
              ...state.benefitsMap[benefit_id],
              isSelected: true,
            },
          },
        };
      }
      break;
    case ACTION_TYPES.DESELECT_BENEFIT:
      if (
        action.id &&
        (state.benefitsMap[action.id] ||
          state.benefitsMap[state.benefitsKeyToIdMap[action.id]])
      ) {
        let benefit_id = state.benefitsMap[action.id]
          ? action.id
          : state.benefitsKeyToIdMap[action.id];
        return {
          ...state,
          benefitsMap: {
            ...state.benefitsMap,
            [benefit_id]: {
              ...state.benefitsMap[benefit_id],
              isSelected: false,
            },
          },
        };
      }
      break;
    default:
      return state;
  }
};
