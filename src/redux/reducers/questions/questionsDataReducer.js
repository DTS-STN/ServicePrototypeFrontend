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
    // map of question OF keys to keys in questionsMap
    // questionsKeyToIdMap: {},
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
          //   let newQuestionsKeyToIdMap = { ...state.questionsKeyToIdMap };
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
            // newQuestionsKeyToIdMap[value.benefit_key] = value.id;
          });

          return {
            ...state,
            isFetching: false,
            fetchFailed: false,
            fetchFailedReason: "",
            fetchFailedObj: {},
            questionsMap: newQuestionsMap,
            // questionsKeyToIdMap: newQuestionsKeyToIdMap,
          };
        }
      }
      // Questions FR
      if (
        action.resourceType === RESOURCE_TYPES.QUESTIONS_FR ||
        action.resourceType === RESOURCE_TYPES.QUESTION_FR
      ) {
        let data = action.body;
        if (action.resourceType === RESOURCE_TYPES.BENEFIT_FR) {
          data = [data];
        }
        if (Array.isArray(data) && data.length > 0) {
          let newQuestionsMapFr = { ...state.questionsMapFr };
          //   let newQuestionsKeyToIdMap = { ...state.questionsKeyToIdMap };
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
            // newQuestionsKeyToIdMap[value.benefit_key] = value.id;
          });

          return {
            ...state,
            isFetching: false,
            fetchFailed: false,
            fetchFailedReason: "",
            fetchFailedObj: {},
            questionsMapFr: newQuestionsMapFr,
            // questionsKeyToIdMap: newQuestionsKeyToIdMap,
          };
        }
      }
      break;
    case ACTION_TYPES.NETWORK_REQUEST_FAILED:
      if (
        action.resourceType === RESOURCE_TYPES.BENEFITS ||
        action.resourceType === RESOURCE_TYPES.BENEFIT
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
    // case ACTION_TYPES.SELECT_BENEFIT:
    //   if (
    //     action.id &&
    //     (state.questionsMap[action.id] ||
    //       state.questionsMap[state.questionsKeyToIdMap[action.id]])
    //   ) {
    //     let benefit_id = state.questionsMap[action.id]
    //       ? action.id
    //       : state.questionsKeyToIdMap[action.id];
    //     return {
    //       ...state,
    //       questionsMap: {
    //         ...state.questionsMap,
    //         [benefit_id]: {
    //           ...state.questionsMap[benefit_id],
    //           isSelected: true,
    //         },
    //       },
    //     };
    //   }
    //   break;
    // case ACTION_TYPES.DESELECT_BENEFIT:
    //   if (
    //     action.id &&
    //     (state.questionsMap[action.id] ||
    //       state.questionsMap[state.questionsKeyToIdMap[action.id]])
    //   ) {
    //     let benefit_id = state.questionsMap[action.id]
    //       ? action.id
    //       : state.questionsKeyToIdMap[action.id];
    //     return {
    //       ...state,
    //       questionsMap: {
    //         ...state.questionsMap,
    //         [benefit_id]: {
    //           ...state.questionsMap[benefit_id],
    //           isSelected: false,
    //         },
    //       },
    //     };
    //   }
    //   break;
    default:
      return state;
  }
  return state;
};
