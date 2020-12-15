import { ACTION_TYPES } from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";

export const lifeJourneysData = function (
  state = {
    isFetching: false,
    fetchFailed: false,
    fetchFailedReason: "",
    fetchFailedObj: {},
    lifeJourneysMap: {},
    lifeJourneysKeyToIdMap: {},
  },
  action
) {
  switch (action.type) {
    case ACTION_TYPES.NETWORK_REQUEST:
      if (
        action.resourceType === RESOURCE_TYPES.LIFE_JOURNEYS ||
        action.resourceType === RESOURCE_TYPES.LIFE_JOURNEY
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
        action.resourceType === RESOURCE_TYPES.LIFE_JOURNEYS ||
        action.resourceType === RESOURCE_TYPES.LIFE_JOURNEY
      ) {
        let data = action.body;
        if (action.resourceType === RESOURCE_TYPES.LIFE_JOURNEY) {
          data = [data];
        }
        if (Array.isArray(data) && data.length > 0) {
          let newLifeJourneysMap = { ...state.lifeJourneysMap };
          let newLifeJourneysKeyToIdMap = { ...state.lifeJourneysKeyToIdMap };
          data.forEach((value) => {
            newLifeJourneysMap[value.id] = {
              ...newLifeJourneysMap[value.id],
              ...value,
              related_benefits: value["related_benefits"].map((value) => {
                return value.id;
              }),
            };
            newLifeJourneysKeyToIdMap[value.life_journey_key] = value.id;
          });

          return {
            ...state,
            isFetching: false,
            fetchFailed: false,
            fetchFailedReason: "",
            fetchFailedObj: {},
            lifeJourneysMap: newLifeJourneysMap,
            lifeJourneysKeyToIdMap: newLifeJourneysKeyToIdMap,
          };
        }
      }
      break;
    case ACTION_TYPES.NETWORK_REQUEST_FAILED:
      if (
        action.resourceType === RESOURCE_TYPES.LIFE_JOURNEYS ||
        action.resourceType === RESOURCE_TYPES.LIFE_JOURNEY
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
