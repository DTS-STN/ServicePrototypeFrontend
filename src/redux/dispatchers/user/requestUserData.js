import "cross-fetch/polyfill";
import { USER_SERVICE_URL } from "../../../variables";
import {
  networkRequestActionCreator,
  networkReceivedActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_REQUEST_TYPES,
  NETWORK_FAILED_REASONS,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";

async function fetchUserData(dispatch, keycloak) {
  let response;
  let userInfoUrl = "/account/v1beta1/profile/";
  let userGuid = keycloak.idTokenParsed.guid;

  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET
      )
    );
    console.log(USER_SERVICE_URL + userInfoUrl + userGuid);
    response = await fetch(USER_SERVICE_URL + userInfoUrl + userGuid, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + keycloak.token,
      },
    });
  } catch (e) {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message:
            "Could not connect to user service to retrieve user information",
        }
      )
    );
  }

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
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET,
        data
      )
    );
  } else {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.USER_DATA,
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
export function getUserData(keycloak) {
  return (dispatch) => fetchUserData(dispatch, keycloak);
}
