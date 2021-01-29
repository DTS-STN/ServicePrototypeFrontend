import { ACTION_TYPES } from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";

export const questionsData = function (
  state = {
    // boolean flag to indicate whether a request is in progress
    isFetching: false,
    // boolean flag to indicate if a request has failed
    fetchFailed: false,
    // reason for failure of request
    fetchFailedReason: "",
    // object containing data of why the request failed
    fetchFailedObj: {},
    // map of questions data
    questionsMap: {},
    // map of french questions data
    questionsMapFr: {},
  },
  action
) {
  switch (action.type) {
    case ACTION_TYPES.NETWORK_REQUEST:
      if (
        action.resourceType === RESOURCE_TYPES.QUESTIONS ||
        action.resourceType === RESOURCE_TYPES.QUESTION
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
      // Questions EN
      if (
        action.resourceType === RESOURCE_TYPES.QUESTIONS ||
        action.resourceType === RESOURCE_TYPES.QUESTION
      ) {
        let data = action.body;
        if (action.resourceType === RESOURCE_TYPES.QUESTION) {
          data = [data];
        }
        if (Array.isArray(data) && data.length > 0) {
          let newQuestionsMap = { ...state.questionsMap };
          data.forEach((value) => {
            if (!newQuestionsMap[value.id]) {
              newQuestionsMap[value.id] = {
                isEligible: true,
                isSelected: false,
              };
            }
            newQuestionsMap[value.id] = {
              ...newQuestionsMap[value.id],
              ...value,
            };
          });

          return {
            ...state,
            isFetching: false,
            fetchFailed: false,
            fetchFailedReason: "",
            fetchFailedObj: {},
            questionsMap: newQuestionsMap,
          };
        }
      }
      // Questions FR
      if (
        action.resourceType === RESOURCE_TYPES.QUESTIONS_FR ||
        action.resourceType === RESOURCE_TYPES.QUESTION_FR
      ) {
        let data = action.body;
        if (action.resourceType === RESOURCE_TYPES.QUESTION_FR) {
          data = [data];
        }
        if (Array.isArray(data) && data.length > 0) {
          let newQuestionsMapFr = { ...state.questionsMapFr };
          data.forEach((value) => {
            if (!newQuestionsMapFr[value.id]) {
              newQuestionsMapFr[value.id] = {
                isEligible: true,
                isSelected: false,
              };
            }
            newQuestionsMapFr[value.id] = {
              ...newQuestionsMapFr[value.id],
              ...value,
            };
          });

          return {
            ...state,
            isFetching: false,
            fetchFailed: false,
            fetchFailedReason: "",
            fetchFailedObj: {},
            questionsMapFr: newQuestionsMapFr,
          };
        }
      }
      break;
    case ACTION_TYPES.NETWORK_REQUEST_FAILED:
      if (
        action.resourceType === RESOURCE_TYPES.QUESTIONS ||
        action.resourceType === RESOURCE_TYPES.QUESTION
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
