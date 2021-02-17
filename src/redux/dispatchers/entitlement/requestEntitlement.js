import "cross-fetch/polyfill";
import {
  networkReceivedActionCreator,
  networkRequestActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_REQUEST_TYPES,
  NETWORK_FAILED_REASONS,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";
import { CASESERVICE_URL } from "../../../variables";

async function fetchEntitlement(
  dispatch,
  provinceCode,
  incomeRangeCode,
  token,
  guid
) {
  let response;

  try {
    dispatch(
      networkRequestActionCreator(
        RESOURCE_TYPES.ENTITLEMENT,
        NETWORK_REQUEST_TYPES.POST,
        {
          provinceCode: provinceCode,
          incomeRangeCode: incomeRangeCode,
        }
      )
    );

    response = await fetch(
      CASESERVICE_URL + `/predictive_entitlement_amounts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
          guid: guid,
        },
        body: JSON.stringify({
          provinceCode: provinceCode,
          incomeRangeCode: incomeRangeCode,
        }),
      }
    );
  } catch (e) {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.ENTITLEMENT,
        NETWORK_REQUEST_TYPES.POST,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to curam to get the entitlement",
        }
      )
    );
  }

  let textData;
  let data;

  try {
    textData = await response.text();
    data = JSON.parse(textData);
  } catch (e) {
    data = textData || "";
  }

  if (response.ok) {
    dispatch(
      networkReceivedActionCreator(
        RESOURCE_TYPES.ENTITLEMENT,
        NETWORK_REQUEST_TYPES.POST,
        { entitlement: data }
      )
    );
  } else {
    return dispatch(
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.ENTITLEMENT,
        NETWORK_REQUEST_TYPES.POST,
        NETWORK_FAILED_REASONS[response.status] ||
          NETWORK_FAILED_REASONS.INTERNAL_SERVER_ERROR,
        typeof data === "string" ? { message: data } : data
      )
    );
  }
}

/**
 * dispatch function which gets an entitlement amount, based on the province, income range and benefit
 * @param provinceCode - the id of the province
 * @param incomeRangeCode - the income range of the person requesting to know the amount
 * @param benefitType - the benefit type id,  --- TODO -- IT DOES NOT EXIST YET
 * @param token - keycloak.token
 * @param guid - keycloak.idTokenParsed.guid
 */
export function getEntitlementAmount(
  provinceCode,
  incomeRangeCode,
  token,
  guid
) {
  return (dispatch) =>
    fetchEntitlement(dispatch, provinceCode, incomeRangeCode, token, guid);
}
