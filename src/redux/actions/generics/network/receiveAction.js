import { NETWORK_RECEIVED } from "./actionType";

/**
 * generic action creator for when a response to an http call is received by the app
 * @param resourceType - the type of resource being received i.e. BENEFIT, QUESTION ect
 * @param requestType - the type of request which was sent to produce the response
 * @param body - the body of the response
 * @returns {{type: string, body: *, resourceType: *, timestamp: number}}
 */
export function networkReceivedActionCreator(
  resourceType,
  requestType,
  body = {}
) {
  return {
    type: NETWORK_RECEIVED,
    resourceType: resourceType,
    requestType: requestType,
    body: { ...body },
    timestamp: Date.now(),
  };
}
