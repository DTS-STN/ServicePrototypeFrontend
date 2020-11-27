import { ACTION_TYPES } from "../actionTypes";

/**
 * generic action for when a network request is sent in the form of an http call
 * @param resourceType - the type of resource being requested i.e. BENEFIT, QUESTION
 * @param requestType - the type of request sent
 * @param requestParameters - request parameters if any
 * @param requestBody - request body if any
 * @returns {{requestType: *, requestBody: {}, requestParameters: {}, type: string, resourceType: *, timestamp: number}}
 */
export function networkRequestActionCreator(
  resourceType,
  requestType,
  requestParameters = {},
  requestBody = {}
) {
  return {
    type: ACTION_TYPES.NETWORK_REQUEST,
    resourceType: resourceType,
    requestType: requestType,
    requestParameters: {
      ...requestParameters,
    },
    requestBody: {
      ...requestBody,
    },
    timestamp: Date.now(),
  };
}
