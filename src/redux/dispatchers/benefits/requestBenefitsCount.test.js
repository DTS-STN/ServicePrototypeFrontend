import "cross-fetch/polyfill";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import {
  NETWORK_FAILED_REASONS,
  NETWORK_REQUEST_TYPES,
  networkRequestActionCreator,
  networkReceivedActionCreator,
  networkRequestFailedActionCreator,
} from "../../actions";

import { RESOURCE_TYPES } from "../resourceTypes";
import thunk from "redux-thunk";
import { STRAPI_URL } from "../../../variables";
import { getBenefitsCount } from "./requestBenefitsCount";

const middlewares = [thunk];

describe("requestBenefitsCount", () => {
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

  it("fetches benefit count and dispatches the correct actions", async () => {
    fetchMock.getOnce(STRAPI_URL + "/benefits/count", {
      status: 200,
      body: "4",
      headers: { "Content-Type": "application/json" },
    });

    const store = mockStore({});

    await store.dispatch(getBenefitsCount());

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkReceivedActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET,
        {
          count: 4,
        }
      ),
    ]);
  });
  it("handles fetch throwing an error due to no network", async () => {
    let errorObj = new Error("no network");
    fetchMock.getOnce(STRAPI_URL + "/benefits/count", {
      throws: errorObj,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getBenefitsCount());

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        errorObj
      ),
    ]);
  });
  it("handles non okay response", async () => {
    fetchMock.getOnce(STRAPI_URL + "/benefits/count", {
      status: 400,
      body: {
        some: "message",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getBenefitsCount());

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFITS_COUNT,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.BAD_REQUEST,
        {
          some: "message",
        }
      ),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
});
