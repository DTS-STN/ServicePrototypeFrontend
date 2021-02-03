import "cross-fetch/polyfill";
import {
  networkRequestActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_REQUEST_TYPES,
  NETWORK_FAILED_REASONS,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";
import { CURAM_PRESCREEN_LINK } from "../../../variables";

async function postApplyForBenefit(dispatch, benefitType, keycloak, guid) {
  let response;
  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.APPLY_FOR_BENEFIT,
        NETWORK_REQUEST_TYPES.POST,
        undefined,
        {
          benefitType,
        }
      )
    );
    response = await fetch(CURAM_PRESCREEN_LINK, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        guid: guid,
        Authorization: "Bearer " + keycloak.token,
      },
      body: JSON.stringify({
        benefitType,
      }),
    });
  } catch (e) {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.APPLY_FOR_BENEFIT,
        NETWORK_REQUEST_TYPES.POST,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to benefit service to apply for benefit",
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
        RESOURCE_TYPES.APPLY_FOR_BENEFIT,
        NETWORK_REQUEST_TYPES.POST,
        NETWORK_FAILED_REASONS[response.status] ||
          NETWORK_FAILED_REASONS.INTERNAL_SERVER_ERROR,
        typeof data === "string" ? { message: data } : data
      )
    );
  }
}

/**
 * dispatch function which applies for a single benefit based on benefit type
 * @param benefitType
 * @param keycloak
 * @param guid
 */
export function applyForBenefit(benefitType, keycloak, guid) {
  return (dispatch) =>
    postApplyForBenefit(dispatch, benefitType, keycloak, guid);
}
