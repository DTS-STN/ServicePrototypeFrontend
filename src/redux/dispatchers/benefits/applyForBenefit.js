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
  answers,
  userProfile
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
          person: {
            //NOTE: do not use toString, if the value is undefined this will produce an error
            sin: `${userProfile.personSin ? userProfile.personSin : ""}`,
            firstName: userProfile.personFirstName,
            lastName: userProfile.personLastName,
            dateOfBirth: userProfile.personDateOfBirth,
            gender: userProfile.personGender,
            emailAddress: userProfile.personEmailAddress,
            phoneNumber: `${
              userProfile.personPhoneNumber ? userProfile.personPhoneNumber : ""
            }`,
            address: {
              lineItem1: userProfile.personAddressLineItem1,
              lineItem2:
                userProfile.personAddressLineItem2 === "NULL"
                  ? ""
                  : userProfile.personAddressLineItem2,
              city: userProfile.personAddressCity,
              province: userProfile.personAddressProvince,
              postalcode: userProfile.personAddressPostalcode,
            },
          },
          bankingInfo: {
            directDepositTransitNumber: userProfile.directDepositTransitNumber.toString(),
            directDepositFiNumber: userProfile.directDepositFiNumber.toString(),
            directDepositAccountNumber: userProfile.directDepositAccountNumber.toString(),
          },
        }
      )
    );
    response = await fetch(
      CURAM_PRESCREEN_LINK + "/redirect/prescreen/intake",
      {
        method: "POST",
        redirect: "follow",
        credentials: "include",
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
          person: {
            sin: userProfile.personSin.toString(),
            firstName: userProfile.personFirstName,
            lastName: userProfile.personLastName,
            dateOfBirth: userProfile.personDateOfBirth,
            gender: userProfile.personGender,
            emailAddress: userProfile.personEmailAddress,
            phoneNumber: userProfile.personPhoneNumber,
            address: {
              lineItem1: userProfile.personAddressLineItem1,
              lineItem2:
                userProfile.personAddressLineItem2 === "NULL"
                  ? ""
                  : userProfile.personAddressLineItem2,
              city: userProfile.personAddressCity,
              province: userProfile.personAddressProvince,
              postalcode: userProfile.personAddressPostalcode,
            },
          },
          bankingInfo: {
            directDepositTransitNumber: userProfile.directDepositTransitNumber.toString(),
            directDepositFiNumber: userProfile.directDepositFiNumber.toString(),
            directDepositAccountNumber: userProfile.directDepositAccountNumber.toString(),
          },
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
    console.log(response);
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
 * @param userProfile
 */
export function applyForBenefit(
  benefitType,
  keycloak,
  guid,
  answers,
  userProfile
) {
  return (dispatch) =>
    postApplyForBenefit(
      dispatch,
      benefitType,
      keycloak,
      guid,
      answers,
      userProfile
    );
}
