import "cross-fetch/polyfill";
import {
  networkRequestActionCreator,
  networkReceivedActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_FAILED_REASONS,
  NETWORK_REQUEST_TYPES,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";
import { STRAPI_URL } from "../../../variables";

async function fetchBenefitsCount(dispatch) {
  let response;
  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET
      )
    );

    response = await fetch(STRAPI_URL + "/benefits/count");
  } catch (e) {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        e
      )
    );
  }

  // data received and response is good
  let textData;
  let data;

  // get json if possible otherwise just get text
  try {
    textData = await response.text();
    data = JSON.parse(textData);
  } catch (e) {
    data = textData || "";
  }

  if (response.ok) {
    return dispatch(
      networkReceivedActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET,
        {
          count: parseInt(data),
        }
      )
    );
  } else {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS[response.status] ||
          NETWORK_FAILED_REASONS.INTERNAL_SERVER_ERROR,
        typeof data === "string" ? { message: data } : data
      )
    );
  }
}

/**
 * dispatcher to fetch benefits count from strapi
 * @returns {function(*=): Promise<*>}
 */
export function getBenefitsCount() {
  return (dispatch) => fetchBenefitsCount(dispatch);
}
