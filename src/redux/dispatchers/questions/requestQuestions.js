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

async function fetchQuestions(dispatch, start, limit, sort) {
  let response;
  let responseFr;
  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET,
        { start, limit, sort }
      )
    );

    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS_FR,
        NETWORK_REQUEST_TYPES.GET,
        { start, limit, sort }
      )
    );

    let url = "/questions";
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

    paramBefore
      ? (responseFr = await fetch(BENEFITSERVICE_URL + url + "&lang=fr"))
      : (responseFr = await fetch(BENEFITSERVICE_URL + url + "?lang=fr"));
  } catch (e) {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to CMS to retrieve questions.",
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

  if (response.ok & responseFr.ok) {
    dispatch(
      networkReceivedActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET,
        data
      )
    );
    dispatch(
      networkReceivedActionCreator(
        RESOURCE_TYPES.QUESTIONS_FR,
        NETWORK_REQUEST_TYPES.GET,
        dataFr
      )
    );
  } else {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS[response.status] ||
          NETWORK_FAILED_REASONS.INTERNAL_SERVER_ERROR,
        typeof data === "string" ? { message: data } : data
      )
    );
  }
}

/**
 * dispatch function which gets a list of questions from the strapi api.
 * see strapi documentation on parameters
 * https://strapi.io/documentation/v3.x/content-api/parameters.html
 * @param start - the start index
 * @param limit - the limit of how much to return
 * @param sort - how to sort questions
 * @returns {function(*=): Promise<void>}
 */
export function getQuestions(start, limit, sort) {
  return (dispatch) => fetchQuestions(dispatch, start, limit, sort);
}
