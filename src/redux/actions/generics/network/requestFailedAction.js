import { ACTION_TYPES } from "../../actionTypes";

export function networkRequestFailedActionCreator(
  resourceType,
  requestType,
  networkRequestFailedReason,
  responseBody = {}
) {
  return {
    type: ACTION_TYPES.NETWORK_REQUEST_FAILED,
    resourceType: resourceType,
    requestType: requestType,
    networkRequestFailedReason: networkRequestFailedReason,
    body: { ...responseBody },
    timestamp: Date.now(),
  };
}
