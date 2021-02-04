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

async function getEligibility(dispatch, answers) {
  let response;
  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.ELIGIBILITY,
        NETWORK_REQUEST_TYPES.POST,
        undefined,
        {
          answers,
        }
      )
    );
    response = await fetch(BENEFITSERVICE_URL + "/benefits/eligible", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answers,
      }),
    });
  } catch (e) {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.ELIGIBILITY,
        NETWORK_REQUEST_TYPES.POST,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to benefit service to get eligibility",
        }
      )
    );
  }
  if (true) {
    dispatch(
      networkReceivedActionCreator(
        RESOURCE_TYPES.ELIGIBILITY,
        NETWORK_REQUEST_TYPES.POST,
        {
          benefits: [1, 2],
        }
      )
    );
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
        RESOURCE_TYPES.ELIGIBILITY,
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

 */
export function requestEligibility(answers) {
  return (dispatch) => getEligibility(dispatch, answers);
}
