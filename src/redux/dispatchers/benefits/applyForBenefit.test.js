import "cross-fetch/polyfill";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import {
  NETWORK_REQUEST_TYPES,
  NETWORK_FAILED_REASONS,
  networkRequestFailedActionCreator,
  networkRequestActionCreator,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";
import thunk from "redux-thunk";
import { CURAM_PRESCREEN_LINK } from "../../../variables";
import { applyForBenefit } from "./applyForBenefit";

const middlewares = [thunk];

describe("applyForBenefit", () => {
  let mockStore;
  let dateTimeSpy;
  let mockKeycloakFunc;
  beforeEach(() => {
    mockStore = configureMockStore(middlewares);
    dateTimeSpy = jest.spyOn(Date, "now");
    dateTimeSpy.mockImplementation((...args) => {
      return 1590801641073;
    });
    mockKeycloakFunc = {
      token: "some-token",
      login: jest.fn(),
    };
  });
  afterEach(() => {
    fetchMock.restore();
    dateTimeSpy.mockRestore();
  });

  it("posts to apply benefit route and dispatches the correct", async () => {
    fetchMock.postOnce(CURAM_PRESCREEN_LINK + "/redirect/prescreen/intake", {
      status: 200,
    });

    const store = mockStore({});

    await store.dispatch(
      applyForBenefit(
        "HFP111",
        mockKeycloakFunc,
        "cc6e16b0-db92-459a-91df-f8144befdda9",
        {},
        {
          guid: "31360512-2d79-4baa-8696-b612de6cbff5",
          personAddressLineItem2: "NULL",
          personPhoneNumber: 4259012345,
          personAddressLineItem1: "218 BIGGS ST",
          personEmailAddress: "Elizabeth.Andrew@fakemail.ca",
          personAddressCity: "Fredericton",
          personGender: "SX2",
          directDepositAccountNumber: 9999999,
          directDepositTransitNumber: 99999,
          personAddressPostalcode: "E3B6J6",
          personAddressProvince: "NB",
          personDateOfBirth: "06/12/1976",
          directDepositFiNumber: 999,
          personSin: 802435215,
          personLastName: "Andrew",
          personFirstName: "Elizabeth",
        }
      )
    );

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.APPLY_FOR_BENEFIT,
        NETWORK_REQUEST_TYPES.POST,
        undefined,
        {
          benefitType: "HFP111",
          person: {
            sin: 802435215,
            firstName: "Elizabeth",
            lastName: "Andrew",
            dateOfBirth: "06/12/1976",
            gender: "SX2",
            emailAddress: "Elizabeth.Andrew@fakemail.ca",
            phoneNumber: 4259012345,
            address: {
              lineItem1: "218 BIGGS ST",
              lineItem2: "NULL",
              city: "Fredericton",
              province: "NB",
              postalCode: "E3B6J6",
            },
          },
          bankingInfo: {
            directDepositTransitNumber: "99999",
            directDepositFiNumber: "999",
            directDepositAccountNumber: "9999999",
          },
        }
      ),
    ]);
  });

  it("handles fetch throwing an error due to no network", async () => {
    let errorObj = new Error("no network");
    fetchMock.postOnce(CURAM_PRESCREEN_LINK + "/redirect/prescreen/intake", {
      throws: errorObj,
    });

    const store = mockStore({});
    await store.dispatch(
      applyForBenefit(
        "HFP111",
        mockKeycloakFunc,
        "cc6e16b0-db92-459a-91df-f8144befdda9",
        {},
        {
          guid: "31360512-2d79-4baa-8696-b612de6cbff5",
          personAddressLineItem2: "NULL",
          personPhoneNumber: 4259012345,
          personAddressLineItem1: "218 BIGGS ST",
          personEmailAddress: "Elizabeth.Andrew@fakemail.ca",
          personAddressCity: "Fredericton",
          personGender: "SX2",
          directDepositAccountNumber: 9999999,
          directDepositTransitNumber: 99999,
          personAddressPostalcode: "E3B6J6",
          personAddressProvince: "NB",
          personDateOfBirth: "06/12/1976",
          directDepositFiNumber: 999,
          personSin: 802435215,
          personLastName: "Andrew",
          personFirstName: "Elizabeth",
        }
      )
    );

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.APPLY_FOR_BENEFIT,
        NETWORK_REQUEST_TYPES.POST,
        undefined,
        {
          benefitType: "HFP111",
          person: {
            sin: 802435215,
            firstName: "Elizabeth",
            lastName: "Andrew",
            dateOfBirth: "06/12/1976",
            gender: "SX2",
            emailAddress: "Elizabeth.Andrew@fakemail.ca",
            phoneNumber: 4259012345,
            address: {
              lineItem1: "218 BIGGS ST",
              lineItem2: "NULL",
              city: "Fredericton",
              province: "NB",
              postalCode: "E3B6J6",
            },
          },
          bankingInfo: {
            directDepositTransitNumber: "99999",
            directDepositFiNumber: "999",
            directDepositAccountNumber: "9999999",
          },
        }
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.APPLY_FOR_BENEFIT,
        NETWORK_REQUEST_TYPES.POST,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to curam to apply for benefit",
        }
      ),
    ]);
  });

  it("handles error response from fetch", async () => {
    fetchMock.postOnce(CURAM_PRESCREEN_LINK + "/redirect/prescreen/intake", {
      status: 500,
      body: {
        Status: 500,
        ErrorMessage:
          '{"errors":[{"code":400,"message":"The value of sdfsdfdsf is not a valid value for the parameter in which it is being used. ","level":"error","message_id":"HTTP_400_PARAM_NOT_VALID"}]}',
      },
    });

    const store = mockStore({});
    await store.dispatch(
      applyForBenefit(
        "HFP111",
        mockKeycloakFunc,
        "cc6e16b0-db92-459a-91df-f8144befdda9",
        {},
        {
          guid: "31360512-2d79-4baa-8696-b612de6cbff5",
          personAddressLineItem2: "NULL",
          personPhoneNumber: 4259012345,
          personAddressLineItem1: "218 BIGGS ST",
          personEmailAddress: "Elizabeth.Andrew@fakemail.ca",
          personAddressCity: "Fredericton",
          personGender: "SX2",
          directDepositAccountNumber: 9999999,
          directDepositTransitNumber: 99999,
          personAddressPostalcode: "E3B6J6",
          personAddressProvince: "NB",
          personDateOfBirth: "06/12/1976",
          directDepositFiNumber: 999,
          personSin: 802435215,
          personLastName: "Andrew",
          personFirstName: "Elizabeth",
        }
      )
    );

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.APPLY_FOR_BENEFIT,
        NETWORK_REQUEST_TYPES.POST,
        undefined,
        {
          benefitType: "HFP111",
          person: {
            sin: 802435215,
            firstName: "Elizabeth",
            lastName: "Andrew",
            dateOfBirth: "06/12/1976",
            gender: "SX2",
            emailAddress: "Elizabeth.Andrew@fakemail.ca",
            phoneNumber: 4259012345,
            address: {
              lineItem1: "218 BIGGS ST",
              lineItem2: "NULL",
              city: "Fredericton",
              province: "NB",
              postalCode: "E3B6J6",
            },
          },
          bankingInfo: {
            directDepositTransitNumber: "99999",
            directDepositFiNumber: "999",
            directDepositAccountNumber: "9999999",
          },
        }
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.APPLY_FOR_BENEFIT,
        NETWORK_REQUEST_TYPES.POST,
        NETWORK_FAILED_REASONS.INTERNAL_SERVER_ERROR,
        {
          Status: 500,
          ErrorMessage:
            '{"errors":[{"code":400,"message":"The value of sdfsdfdsf is not a valid value for the parameter in which it is being used. ","level":"error","message_id":"HTTP_400_PARAM_NOT_VALID"}]}',
        }
      ),
    ]);
  });
});
