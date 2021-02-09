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

async function fetchCases(dispatch, start, limit, sort, keycloak) {
  let response;
  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.CASES,
        NETWORK_REQUEST_TYPES.GET,
        { start, limit, sort }
      )
    );
    let url = "/casedetails";
    response = await fetch(CASESERVICE_URL + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + keycloak.token,
        guid: keycloak.idTokenParsed.guid,
      },
    });
  } catch (e) {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.CASES,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to CMS to retrieve cases",
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
    dispatch(
      networkReceivedActionCreator(
        RESOURCE_TYPES.CASES,
        NETWORK_REQUEST_TYPES.GET,
        data
      )
    );
  } else {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.CASES,
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
 * @param keycloak - keycloak token
 * @returns {function(*=): Promise<void>}
 */
export function getCases(start, limit, sort, keycloak) {
  return (dispatch) => fetchCases(dispatch, start, limit, sort, keycloak);
}

/*
//TO DO extract this to utility function and make it available everywhere
const tokenDecoder = (token) => { 
  console.log('this test');
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}; 
*/
