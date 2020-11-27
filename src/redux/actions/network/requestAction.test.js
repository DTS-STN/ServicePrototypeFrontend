import { ACTION_TYPES } from "../actionTypes";
import { networkRequestActionCreator } from "./requestAction";

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

  const actionReturned = networkRequestActionCreator(
    "SOME_TYPE",
    "SOME_REQUEST",
    { some: "key" },
    { someOther: "value" }
  );

  expect(actionReturned).toEqual({
    type: ACTION_TYPES.NETWORK_REQUEST,
    resourceType: "SOME_TYPE",
    requestType: "SOME_REQUEST",
    requestParameters: { some: "key" },
    requestBody: { someOther: "value" },
    timestamp: 81217838127,
  });
});
