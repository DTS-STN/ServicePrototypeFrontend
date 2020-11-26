import { ACTION_TYPES } from "../../actionTypes";
import { networkRequestFailedActionCreator } from "./requestFailedAction";

let dateSpy;
beforeEach(() => {
  dateSpy = jest.spyOn(Date, "now");
});

afterEach(() => {
  dateSpy.mockRestore();
});

it("creates proper action object", () => {
  dateSpy.mockImplementationOnce(() => {
    return 81217838127;
  });

  const actionReturned = networkRequestFailedActionCreator(
    "SOME_TYPE",
    "SOME_REQUEST",
    "SOME_REASON",
    { response: "value" }
  );

  expect(actionReturned).toEqual({
    type: ACTION_TYPES.NETWORK_REQUEST_FAILED,
    resourceType: "SOME_TYPE",
    requestType: "SOME_REQUEST",
    networkRequestFailedReason: "SOME_REASON",
    body: {
      response: "value",
    },
    timestamp: 81217838127,
  });
});
