import "cross-fetch/polyfill";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import {
  NETWORK_FAILED_REASONS,
  NETWORK_REQUEST_TYPES,
  networkRequestFailedActionCreator,
  networkReceivedActionCreator,
  networkRequestActionCreator,
  setAnswerActionCreator,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";
import thunk from "redux-thunk";
import { USER_SERVICE_URL } from "../../../variables";
import { getUserData } from "./requestUserData";

const middlewares = [thunk];

const keycloak = {
  idTokenParsed: "some token",
};

describe("requestUserData", () => {
  let mockStore;
  let dateTimeSpy;
  beforeEach(() => {
    mockStore = configureMockStore(middlewares);
    dateTimeSpy = jest.spyOn(Date, "now");
    dateTimeSpy.mockImplementation((...args) => {
      return 1590801641073;
    });
  });
  afterEach(() => {
    fetchMock.restore();
    dateTimeSpy.mockRestore();
  });

  it("fetches user data and dispatches the correct actions", async () => {
    fetchMock.getOnce(USER_SERVICE_URL + "/account/v1beta1/profile/undefined", {
      status: 200,
      body: {
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
        personDateOfBirth: "1976-12-06",
        directDepositFiNumber: 999,
        guid: "31360512-2d79-4baa-8696-b612de6cbff5",
        personSin: 802435215,
        personLastName: "Andrew",
        personFirstName: "Elizabeth",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getUserData(keycloak));

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkReceivedActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET,
        {
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
          personDateOfBirth: "1976-12-06",
          directDepositFiNumber: 999,
          guid: "31360512-2d79-4baa-8696-b612de6cbff5",
          personSin: 802435215,
          personLastName: "Andrew",
          personFirstName: "Elizabeth",
        }
      ),
      setAnswerActionCreator("province", "NB"),
      setAnswerActionCreator("gender", "sx2"),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
  it("handles fetch throwing an error due to no network", async () => {
    let errorObj = new Error("no network");
    fetchMock.getOnce(USER_SERVICE_URL + "/account/v1beta1/profile/undefined", {
      throws: errorObj,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getUserData(keycloak));

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message:
            "Could not connect to user service to retrieve user information",
        }
      ),
    ]);
  });

  it("handles 400 response from api and dispatches the correct actions", async () => {
    fetchMock.getOnce(USER_SERVICE_URL + "/account/v1beta1/profile/undefined", {
      status: 400,
      body: {
        some: "message",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getUserData(keycloak));

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.BAD_REQUEST,
        {
          some: "message",
        }
      ),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
  it("handles 404 response from api and dispatches the correct actions", async () => {
    fetchMock.getOnce(USER_SERVICE_URL + "/account/v1beta1/profile/undefined", {
      status: 404,
      body: {
        some: "message",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getUserData(keycloak));

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NOT_FOUND,
        {
          some: "message",
        }
      ),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
  it("handles 500 response from api and dispatches the correct actions", async () => {
    fetchMock.getOnce(USER_SERVICE_URL + "/account/v1beta1/profile/undefined", {
      status: 500,
      body: {
        some: "message",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getUserData(keycloak));

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.INTERNAL_SERVER_ERROR,
        {
          some: "message",
        }
      ),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
  it("handles non application/json mime types", async () => {
    fetchMock.getOnce(USER_SERVICE_URL + "/account/v1beta1/profile/undefined", {
      status: 500,
      body: "some message",
    });

    const store = mockStore({});

    await store.dispatch(getUserData(keycloak));

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.USER_DATA,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.INTERNAL_SERVER_ERROR,
        {
          message: "some message",
        }
      ),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
});
