import "cross-fetch/polyfill";
import {
  networkRequestActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_REQUEST_TYPES,
  NETWORK_FAILED_REASONS,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";
import { CURAM_PRESCREEN_LINK } from "../../../variables";

async function fetchClientDash(dispatch, keycloak, guid) {
  let response;
  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.REDIRECT_CLIENT_DASH,
        NETWORK_REQUEST_TYPES.GET
      )
    );
    response = await fetch(CURAM_PRESCREEN_LINK + "/redirect/dashboard", {
      method: "GET",
      redirect: "follow",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        guid: guid,
        Authorization: "Bearer " + keycloak.token,
      },
    });
  } catch (e) {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.REDIRECT_CLIENT_DASH,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to curam to redirect to client dash",
        }
      )
    );
  }
  if (response.status === 200) {
    window.location = response.url;
  } else {
    let textData;
    let data;
    try {
      textData = await response.text();
      data = JSON.parse(textData);
    } catch (e) {
      data = textData || "";
    }
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.REDIRECT_CLIENT_DASH,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS[response.status] ||
          NETWORK_FAILED_REASONS.INTERNAL_SERVER_ERROR,
        typeof data === "string" ? { message: data } : data
      )
    );
  }
}

/**
 * dispatch function which applies for a single benefit based on benefit type
 * @param keycloak
 * @param guid
 */
export function getClientDash(keycloak, guid) {
  return (dispatch) => fetchClientDash(dispatch, keycloak, guid);
}
