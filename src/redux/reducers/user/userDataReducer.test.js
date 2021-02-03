import {
  networkRequestActionCreator,
  networkReceivedActionCreator,
  networkRequestFailedActionCreator,
  selectBenefitActionCreator,
  deselectBenefitActionCreator,
  NETWORK_FAILED_REASONS,
  NETWORK_REQUEST_TYPES,
} from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";
import { userData } from "./userDataReducer";

describe("userData", () => {
  it("has correct default state", () => {
    const result = userData(undefined, {});
    expect(result).toEqual({
      isFetching: false,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      user: {},
    });
  });
  it("handles network request action", () => {
    const result = userData(
      {
        isFetching: false,
        fetchFailed: false,
        fetchFailedReason: "fwefwefwe",
        fetchFailedObj: {
          some: "key",
        },
        user: {},
      },
      networkRequestActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET
      )
    );

    expect(result).toEqual({
      isFetching: true,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      user: {},
    });
  });
  it("handles network receive action", () => {
    const result = userData(
      {
        isFetching: true,
        fetchFailed: true,
        fetchFailedReason: "sdfsdfsdfs",
        fetchFailedObj: {},
        user: {},
      },
      networkReceivedActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET,
        {
          personAddressLineItem2: "NULL",
          personPhoneNumber: 4259012345,
          personAddressLineItem1: "218 BIGGS ST",
          personEmailAddress: "Elizabeth.Andrew@fakemail.ca",
          personAddressCity: "Fredericton",
          personGender: "Female",
          directDepositAccountNumber: 9999999,
          directDepositTransitNumber: 99999,
          personAddressPostalcode: "E3B6J6",
          personAddressProvince: "NB",
          personDateOfBirth: "1976-12-06",
          directDepositFiNumber: 999,
          guid: "31360512-2d79-4baa-8696-b612de6cbff5",
          personSin: 802435215,
          personLastName: "Andrew",
          personFirstName: "Elizabeth",
        }
      )
    );

    expect(result).toEqual({
      isFetching: false,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      user: {
        personAddressLineItem2: "NULL",
        personPhoneNumber: 4259012345,
        personAddressLineItem1: "218 BIGGS ST",
        personEmailAddress: "Elizabeth.Andrew@fakemail.ca",
        personAddressCity: "Fredericton",
        personGender: "Female",
        directDepositAccountNumber: 9999999,
        directDepositTransitNumber: 99999,
        personAddressPostalcode: "E3B6J6",
        personAddressProvince: "NB",
        personDateOfBirth: "1976-12-06",
        directDepositFiNumber: 999,
        guid: "31360512-2d79-4baa-8696-b612de6cbff5",
        personSin: 802435215,
        personLastName: "Andrew",
        personFirstName: "Elizabeth",
      },
    });
  });
  it("handles network request failed action", () => {
    const result = userData(
      {
        isFetching: true,
        fetchFailed: false,
        fetchFailedReason: "",
        fetchFailedObj: {},
        user: {},
      },
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.USER_DATA,
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
      user: {},
    });
  });
});
