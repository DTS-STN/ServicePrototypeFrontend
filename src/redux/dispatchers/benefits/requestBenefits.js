import "cross-fetch/polyfill";
import {
  networkRequestActionCreator,
  networkReceivedActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_REQUEST_TYPES,
  NETWORK_FAILED_REASONS,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";
import { BENEFITSERVICE_URL } from "../../../variables";

async function fetchBenefits(dispatch, start, limit, sort) {
  let response;
  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET,
        { start, limit, sort }
      )
    );

    let url = "/benefits";
    let paramBefore = false;
    if (Number.isInteger(start) && start >= 0) {
      url += `?_start=${start}`;
      paramBefore = true;
    }

    if (Number.isInteger(limit) && limit >= 0) {
      if (paramBefore) {
        url += "&";
      } else {
        url += "?";
        paramBefore = true;
      }
      url += `_limit=${limit}`;
    }

    if (sort) {
      if (paramBefore) {
        url += "&";
      } else {
        url += "?";
        paramBefore = true;
      }
      url += `_sort=${sort}`;
    }

    response = await fetch(BENEFITSERVICE_URL + url);
  } catch (e) {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to CMS to retrieve benefits",
        }
      )
    );
  }
  // data received and response is okay
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
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET,
        data
      )
    );
  } else {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS[response.status] ||
          NETWORK_FAILED_REASONS.INTERNAL_SERVER_ERROR,
        typeof data === "string" ? { message: data } : data
      )
    );
  }
}

/**
 * dispatch function which gets a list of benefits from the strapi api.
 * see strapi documentation on parameters
 * https://strapi.io/documentation/v3.x/content-api/parameters.html
 * @param start - the start index
 * @param limit - the limit of how much to return
 * @param sort - how to sort benefits
 * @returns {function(*=): Promise<void>}
 */
export function getBenefits(start, limit, sort) {
  return (dispatch) => fetchBenefits(dispatch, start, limit, sort);
}
