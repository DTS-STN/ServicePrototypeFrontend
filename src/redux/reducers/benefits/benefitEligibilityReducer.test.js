import { benefitsEligibility } from "./benefitEligibilityReducer";
import {
  networkRequestActionCreator,
  networkReceivedActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_FAILED_REASONS,
  NETWORK_REQUEST_TYPES,
} from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";

describe("benefitEligibilityReducer", () => {
  it("has correct default state", () => {
    const result = benefitsEligibility(undefined, {});
    expect(result).toEqual({
      isFetching: false,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      benefits: [],
    });
  });
  it("handles network request action", () => {
    const result = benefitsEligibility(
      {
        isFetching: false,
        fetchFailed: true,
        fetchFailedReason: "fdsfdsfds",
        fetchFailedObj: {
          some: "key",
        },
        benefits: [2],
      },
      networkRequestActionCreator(
        RESOURCE_TYPES.ELIGIBILITY,
        NETWORK_REQUEST_TYPES.POST
      )
    );

    expect(result).toEqual({
      isFetching: true,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      benefits: [2],
    });
  });
  it("handles network receive action", () => {
    const result = benefitsEligibility(
      {
        isFetching: true,
        fetchFailed: true,
        fetchFailedReason: "fdsfdsfds",
        fetchFailedObj: {
          some: "key",
        },
        benefits: [2],
      },
      networkReceivedActionCreator(
        RESOURCE_TYPES.ELIGIBILITY,
        NETWORK_REQUEST_TYPES.POST,
        {
          benefits: [2],
        }
      )
    );

    expect(result).toEqual({
      isFetching: false,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      benefits: [2],
    });
  });
  it("handles network request failed action", () => {
    const result = benefitsEligibility(
      {
        isFetching: true,
        fetchFailed: false,
        fetchFailedReason: "",
        fetchFailedObj: {},
        benefits: [2],
      },
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.ELIGIBILITY,
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
      benefits: [2],
    });
  });
});
