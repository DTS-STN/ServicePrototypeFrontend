import "cross-fetch/polyfill";
import {
  networkReceivedActionCreator,
  networkRequestActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_REQUEST_TYPES,
  NETWORK_FAILED_REASONS,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";
import { STRAPI_URL } from "../../../variables";

async function fetchLifeJourney(dispatch, id) {
  let response;
  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.LIFE_JOURNEY,
        NETWORK_REQUEST_TYPES.GET,
        {
          id: id,
        }
      )
    );
    response = await fetch(STRAPI_URL + `/life-journeys/${id}`);
  } catch (e) {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.LIFE_JOURNEY,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to CMS to retrieve life journey",
        }
      )
    );
  }

  // get json if possible otherwise just get text
  let textData;
  let data;
  try {
    textData = await response.text();
    data = JSON.parse(textData);
  } catch (e) {
    data = textData || "";
  }

  if (response.ok) {
    return dispatch(
      networkReceivedActionCreator(
        RESOURCE_TYPES.LIFE_JOURNEY,
        NETWORK_REQUEST_TYPES.GET,
        data
      )
    );
  } else {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.LIFE_JOURNEY,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS[response.status] ||
          NETWORK_FAILED_REASONS.INTERNAL_SERVER_ERROR,
        typeof data === "string" ? { message: data } : data
      )
    );
  }
}

/**
 * dispatch function which gets a single life journey based on id
 * @param id - the id of the benefit
 */
export function getLifeJourney(id) {
  return (dispatch) => fetchLifeJourney(dispatch, id);
}
