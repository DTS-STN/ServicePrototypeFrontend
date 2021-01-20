import { benefitsCount } from "./benefitsCountReducer";
import {
  networkRequestActionCreator,
  networkReceivedActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_FAILED_REASONS,
  NETWORK_REQUEST_TYPES,
} from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";

describe("benefitsCountReducer", () => {
  it("has correct default state", () => {
    const result = benefitsCount(undefined, {});
    expect(result).toEqual({
      isFetching: false,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      count: 0,
    });
  });
  it("handles network request action", () => {
    const result = benefitsCount(
      {
        isFetching: false,
        fetchFailed: true,
        fetchFailedReason: "fdsfdsfds",
        fetchFailedObj: {
          some: "key",
        },
        count: 10,
      },
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET
      )
    );

    expect(result).toEqual({
      isFetching: true,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      count: 10,
    });
  });
  it("handles network receive action", () => {
    const result = benefitsCount(
      {
        isFetching: true,
        fetchFailed: true,
        fetchFailedReason: "fdsfdsfds",
        fetchFailedObj: {
          some: "key",
        },
        count: 10,
      },
      networkReceivedActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET,
        {
          count: 10,
        }
      )
    );

    expect(result).toEqual({
      isFetching: false,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      count: 10,
    });
  });
  it("handles network request failed action", () => {
    const result = benefitsCount(
      {
        isFetching: true,
        fetchFailed: false,
        fetchFailedReason: "",
        fetchFailedObj: {},
        count: 10,
      },
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET,
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
      count: 10,
    });
  });
});
