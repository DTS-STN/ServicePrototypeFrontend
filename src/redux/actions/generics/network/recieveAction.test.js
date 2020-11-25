import { NETWORK_RECEIVED } from "./actionType";
import { networkReceivedActionCreator } from "./receiveAction";

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

  const actionReturned = networkReceivedActionCreator(
    "SOME_TYPE",
    "SOME_REQUEST",
    { some: "key" }
  );

  expect(actionReturned).toEqual({
    type: NETWORK_RECEIVED,
    resourceType: "SOME_TYPE",
    requestType: "SOME_REQUEST",
    body: {
      some: "key",
    },
    timestamp: 81217838127,
  });
});
