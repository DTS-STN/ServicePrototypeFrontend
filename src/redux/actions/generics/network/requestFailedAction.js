import { NETWORK_REQUEST_FAILED } from "./actionType";

export function networkRequestFailedActionCreator(
  resourceType,
  requestType,
  networkRequestFailedReason,
  responseBody = {}
) {
  return {
    type: NETWORK_REQUEST_FAILED,
    resourceType: resourceType,
    requestType: requestType,
    networkRequestFailedReason: networkRequestFailedReason,
    body: { ...responseBody },
    timestamp: Date.now(),
  };
}
