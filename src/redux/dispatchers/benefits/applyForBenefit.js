import "cross-fetch/polyfill";
import {
  networkRequestActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_REQUEST_TYPES,
  NETWORK_FAILED_REASONS,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";
import { CURAM_PRESCREEN_LINK } from "../../../variables";

async function postApplyForBenefit(
  dispatch,
  benefitType,
  keycloak,
  guid,
  answers
) {
  let response;
  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.APPLY_FOR_BENEFIT,
        NETWORK_REQUEST_TYPES.POST,
        undefined,
        {
          benefitType,
          reasonForSeparation: answers["reasonForSeparation"],
          incomeDetails: answers["incomeDetails"],
          outOfWork: answers["outOfWork"],
        }
      )
    );
    response = await fetch(
      CURAM_PRESCREEN_LINK + "/redirect/prescreen/intake",
      {
        method: "POST",
        redirect: "follow",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          guid: guid,
          Authorization: "Bearer " + keycloak.token,
        },
        body: JSON.stringify({
          benefitType,
          reasonForSeparation: answers["reasonForSeparation"],
          incomeDetails: answers["incomeDetails"],
          outOfWork: answers["outOfWork"],
        }),
      }
    );
  } catch (e) {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.APPLY_FOR_BENEFIT,
        NETWORK_REQUEST_TYPES.POST,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to curam to apply for benefit",
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
 * @param answers
 */
export function applyForBenefit(benefitType, keycloak, guid, answers) {
  return (dispatch) =>
    postApplyForBenefit(dispatch, benefitType, keycloak, guid, answers);
}
