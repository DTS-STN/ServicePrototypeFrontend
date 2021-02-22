import {
  networkRequestActionCreator,
  networkReceivedActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_FAILED_REASONS,
  NETWORK_REQUEST_TYPES,
} from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";
import { entitlementData } from "./entitlementAmountReducer";
describe("entitlementData", () => {
  it("has correct default state", () => {
    const result = entitlementData(undefined, {});
    expect(result).toEqual({
      isFetching: false,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      entitlement: [],
    });
  });
  //
  it("handles network request action", () => {
    const result = entitlementData(
      {
        isFetching: false,
        fetchFailed: true,
        fetchFailedReason: "LPTA generation failed",
        fetchFailedObj: {
          someKey: "someError",
        },
        entitlement: [{ key1: "value1" }],
      },
      networkRequestActionCreator(
        RESOURCE_TYPES.ENTITLEMENT,
        NETWORK_REQUEST_TYPES.POST
      )
    );
    expect(result).toEqual({
      isFetching: true,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      entitlement: [{ key1: "value1" }],
    });
  });
  //
  it("handles network receive action, with data", () => {
    const result = entitlementData(
      {
        isFetching: true,
        fetchFailed: true,
        fetchFailedReason: "Some reason",
        fetchFailedObj: {
          some: "key",
        },
        entitlement: [
          {
            baseRate: "20.0",
            provincialRate: "10.0",
            entitlementGrant: "30.0",
          },
        ],
      },
      networkReceivedActionCreator(
        RESOURCE_TYPES.ENTITLEMENT,
        NETWORK_REQUEST_TYPES.POST,
        {
          entitlement: [
            {
              baseRate: "200.0",
              provincialRate: "100.0",
              entitlementGrant: "300.0",
            },
          ],
        }
      )
    );
    expect(result).toEqual({
      isFetching: false,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      entitlement: [
        {
          baseRate: "20.0",
          provincialRate: "10.0",
          entitlementGrant: "30.0",
        },
        [
          {
            baseRate: "200.0",
            provincialRate: "100.0",
            entitlementGrant: "300.0",
          },
        ],
      ],
    });
  });
  //
  it("handles network request failed action", () => {
    const result = entitlementData(
      {
        isFetching: true,
        fetchFailed: false,
        fetchFailedReason: "",
        fetchFailedObj: {},
        entitlement: {},
      },
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.ENTITLEMENT,
        NETWORK_REQUEST_TYPES.POST,
        NETWORK_FAILED_REASONS.INTERNAL_SERVER_ERROR,
        {
          some: "key",
        }
      )
    );
    expect(result).toEqual({
      isFetching: false,
      fetchFailed: true,
      fetchFailedReason: NETWORK_FAILED_REASONS.INTERNAL_SERVER_ERROR,
      fetchFailedObj: {
        some: "key",
      },
      entitlement: {},
    });
  });
});
