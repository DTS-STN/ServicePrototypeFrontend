import "cross-fetch/polyfill";
import {
  networkRequestActionCreator,
  networkReceivedActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_REQUEST_TYPES,
  NETWORK_FAILED_REASONS,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";
import { CASESERVICE_URL } from "../../../variables";

async function fetchCases(dispatch, start, limit, sort) {
  let response;
  let responseFr;
  console.log('dispatch is ******', dispatch, start, limit, sort);
  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET,
        { start, limit, sort }
      )
    );

    //get parameters from URL
    let url = "/benlocals";
    // let paramBefore = false;
    // if (Number.isInteger(start) && start >= 0) {
    //   url += `?_start=${start}`;
    //   paramBefore = true;
    // }

    // if (Number.isInteger(limit) && limit >= 0) {
    //   if (paramBefore) {
    //     url += "&";
    //   } else {
    //     url += "?";
    //     paramBefore = true;
    //   }
    //   url += `_limit=${limit}`;
    // }

    // if (sort) {
    //   if (paramBefore) {
    //     url += "&";
    //   } else {
    //     url += "?";
    //     paramBefore = true;
    //   }
    //   url += `_sort=${sort}`;
    // }

    response = await fetch(CASESERVICE_URL + url);
    console.log('respoonse being returend is ******', response);
    // paramBefore
    //   ? (responseFr = await fetch(CASESERVICE_URL + url + "&lang=fr"))
    //   : (responseFr = await fetch(CASESERVICE_URL + url + "?lang=fr"));
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
  let textDataFr;
  let data;
  let dataFr;

  // get json if possible otherwise just get text
  try {
    textData = await response.text();
    data = JSON.parse(textData);
  } catch (e) {
    data = textData || "";
  }

  try {
    textDataFr = await responseFr.text();
    dataFr = JSON.parse(textDataFr);
  } catch (e) {
    dataFr = textDataFr || "";
  }

  if (response.ok) {
    dispatch(
      networkReceivedActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET,
        data
      )
    );
    dispatch(
      networkReceivedActionCreator(
        RESOURCE_TYPES.BENEFITS_FR,
        NETWORK_REQUEST_TYPES.GET,
        dataFr
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
 * dispatch function which gets a list of cases from the curam api.
 * @param start - the start index
 * @param limit - the limit of how much to return
 * @param sort - how to sort cases
 * @returns {function(*=): Promise<void>}
 */
export function getCases(start, limit, sort) {
  return (dispatch) => fetchCases(dispatch, start, limit, sort);
}
