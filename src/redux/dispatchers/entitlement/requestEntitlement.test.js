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
import { CASESERVICE_URL } from "../../../variables";
import { getEntitlementAmount } from "./requestEntitlement";

const middlewares = [thunk];

describe("requestEntitlement", () => {
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

  it("fetches entitlement and dispatches the correct action", async () => {
    fetchMock.postOnce(CASESERVICE_URL + "/predictive_entitlement_amounts", {
      status: 200,
      body: {
        provinceCode: "ON",
        incomeRangeCode: "HFPIR2",
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer agshdajdgjagsdja",
        guid: "121212312",
      },
    });

    const store = mockStore({});

    await store.dispatch(
      getEntitlementAmount("ON", "HFPIR2", "121212312", "agshdajdgjagsdja")
    );

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.ENTITLEMENT,
        NETWORK_REQUEST_TYPES.POST,
        {
          provinceCode: "ON",
          incomeRangeCode: "HFPIR2",
        }
      ),
      networkReceivedActionCreator(
        RESOURCE_TYPES.ENTITLEMENT,
        NETWORK_REQUEST_TYPES.POST,
        {
          entitlement: {
            provinceCode: "ON",
            incomeRangeCode: "HFPIR2",
          },
        }
      ),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("handles fetch throwing an error due to no network", async () => {
    let errorObj = new Error("no network");
    fetchMock.postOnce(CASESERVICE_URL + "/predictive_entitlement_amounts", {
      throws: errorObj,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer agshdajdgjagsdja",
        guid: "121212312",
      },
    });

    const store = mockStore({});
    await store.dispatch(
      getEntitlementAmount("ON", "HFPIR2", "121212312", "agshdajdgjagsdja")
    );

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.ENTITLEMENT,
        NETWORK_REQUEST_TYPES.POST,
        {
          provinceCode: "ON",
          incomeRangeCode: "HFPIR2",
        }
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.ENTITLEMENT,
        NETWORK_REQUEST_TYPES.POST,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to curam to get the entitlement",
        }
      ),
    ]);
  });
});
