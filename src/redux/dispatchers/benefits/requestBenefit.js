import "cross-fetch/polyfill";
import {
  networkReceivedActionCreator,
  networkRequestActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_REQUEST_TYPES,
  NETWORK_FAILED_REASONS,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";
import { BENEFITSERVICE_URL } from "../../../variables";

async function fetchBenefit(dispatch, id) {
  let response;
  let responseFr;
  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFIT,
        NETWORK_REQUEST_TYPES.GET,
        {
          id: id,
        }
      )
    );

    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFIT_FR,
        NETWORK_REQUEST_TYPES.GET,
        {
          id: id,
        }
      )
    );

    response = await fetch(BENEFITSERVICE_URL + `/benefits/${id}`);
    responseFr = await fetch(BENEFITSERVICE_URL + `/benefits/${id}?lang=fr`);
  } catch (e) {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFIT,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to CMS to retrieve benefit",
        }
      )
    );
  }

  // get json if possible otherwise just get text
  let textData;
  let textDataFr;
  let data;
  let dataFr;

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

  if (response.ok && responseFr.ok) {
    dispatch(
      networkReceivedActionCreator(
        RESOURCE_TYPES.BENEFIT,
        NETWORK_REQUEST_TYPES.GET,
        data
      )
    );
    dispatch(
      networkReceivedActionCreator(
        RESOURCE_TYPES.BENEFIT_FR,
        NETWORK_REQUEST_TYPES.GET,
        dataFr
      )
    );
  } else {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFIT,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS[response.status] ||
          NETWORK_FAILED_REASONS.INTERNAL_SERVER_ERROR,
        typeof data === "string" ? { message: data } : data
      )
    );
  }
}

/**
 * dispatch function which gets a single benefit based on id
 * @param id - the id of the benefit
 */
export function getBenefit(id) {
  return (dispatch) => fetchBenefit(dispatch, id);
}
