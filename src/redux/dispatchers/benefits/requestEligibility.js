import "cross-fetch/polyfill";
import {
  networkRequestActionCreator,
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
  return [1];
}

/**
 * dispatch function which applies for a single benefit based on benefit type

 */
export function requestEligibility(answers) {
  return (dispatch) => getEligibility(dispatch, answers);
}
