import "cross-fetch/polyfill";
import {
  networkRequestActionCreator,
  networkReceivedActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_FAILED_REASONS,
  NETWORK_REQUEST_TYPES,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";
import { STRAPI_URL } from "../../../variables";

async function fetchBenefitsCount(dispatch) {
  let response;
  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET
      )
    );

    response = await fetch(STRAPI_URL + "/benefits/count");
  } catch (e) {
    dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        e
      )
    );
  }

  // data received and response is good
  const data = await response.text();

  if (response.ok) {
    dispatch(
      networkReceivedActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET,
        {
          count: parseInt(data),
        }
      )
    );
  } else if (response.status === 400) {
    dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET
      )
    );
  }
}

export function getBenefitsCount() {
  return (dispatch) => fetchBenefitsCount(dispatch);
}
