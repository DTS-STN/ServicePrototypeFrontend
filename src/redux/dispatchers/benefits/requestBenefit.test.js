import "cross-fetch/polyfill";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import {
  NETWORK_REQUEST_TYPES,
  NETWORK_FAILED_REASONS,
  networkRequestFailedActionCreator,
  networkReceivedActionCreator,
  networkRequestActionCreator,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";
import thunk from "redux-thunk";
import { BENEFITSERVICE_URL } from "../../../variables";
import { getBenefit } from "./requestBenefit";

const middlewares = [thunk];

describe("requestBenefit", () => {
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

  it("fetches benefit and dispatches the correct action", async () => {
    fetchMock.getOnce(BENEFITSERVICE_URL + "/benefits/1", {
      status: 200,
      body: {
        id: 1,
        title: "Employment Insurance",
        created_by: {
          id: 1,
          firstname: "admin",
          lastname: "user",
          username: null,
        },
        updated_by: {
          id: 1,
          firstname: "admin",
          lastname: "user",
          username: null,
        },
        created_at: "2020-11-24T16:21:56.055Z",
        updated_at: "2020-11-24T16:21:56.090Z",
        benefit_key: "ei_benefit",
        description:
          "This benefit lays out what employment insurance looks like",
        long_description: null,
        benefit_link: null,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getBenefit("1"));

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFIT,
        NETWORK_REQUEST_TYPES.GET,
        {
          id: "1",
        }
      ),
      networkReceivedActionCreator(
        RESOURCE_TYPES.BENEFIT,
        NETWORK_REQUEST_TYPES.GET,
        {
          id: 1,
          title: "Employment Insurance",
          created_by: {
            id: 1,
            firstname: "admin",
            lastname: "user",
            username: null,
          },
          updated_by: {
            id: 1,
            firstname: "admin",
            lastname: "user",
            username: null,
          },
          created_at: "2020-11-24T16:21:56.055Z",
          updated_at: "2020-11-24T16:21:56.090Z",
          benefit_key: "ei_benefit",
          description:
            "This benefit lays out what employment insurance looks like",
          long_description: null,
          benefit_link: null,
        }
      ),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("handles fetch throwing an error due to no network", async () => {
    let errorObj = new Error("no network");
    fetchMock.getOnce(BENEFITSERVICE_URL + "/benefits/1", {
      throws: errorObj,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});
    await store.dispatch(getBenefit("1"));

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFIT,
        NETWORK_REQUEST_TYPES.GET,
        {
          id: "1",
        }
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFIT,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to CMS to retrieve benefit",
        }
      ),
    ]);
  });
});
