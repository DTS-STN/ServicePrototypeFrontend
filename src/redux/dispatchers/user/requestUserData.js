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

export async function getUserData(dispatch) {
  let response;
  let userInfoUrl = "/account/v1beta1/profile/";

  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET
      )
    );

    response = await fetch(USER_SERVICE_URL + userInfoUrl);
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
