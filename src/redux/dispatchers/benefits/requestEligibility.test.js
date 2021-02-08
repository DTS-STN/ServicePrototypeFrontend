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
import { BENEFITSERVICE_URL } from "../../../variables";
import { requestEligibility } from "./requestEligibility";

const middlewares = [thunk];

describe("requestEligibility", () => {
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

  it("fetches elgible benefits and dispatches the correct actions", async () => {
    fetchMock.postOnce(BENEFITSERVICE_URL + "/benefits/eligible", {
      status: 200,
    });

    const store = mockStore({});

    await store.dispatch(
      requestEligibility({
        ableToWork: "no",
        gender: "female",
        incomeDetails: "HFPIR2",
        outOfWork: "HFPOOW1",
        reasonForSeparation: "HFPRE3",
      })
    );

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.ELIGIBILITY,
        NETWORK_REQUEST_TYPES.POST,
        {},
        {
          answers: {
            ableToWork: "no",
            gender: "female",
            incomeDetails: "HFPIR2",
            outOfWork: "HFPOOW1",
            reasonForSeparation: "HFPRE3",
          },
        }
      ),
      networkReceivedActionCreator(
        RESOURCE_TYPES.ELIGIBILITY,
        NETWORK_REQUEST_TYPES.POST,
        {
          benefits: "",
        }
      ),
    ]);
  });
  it("handles fetch throwing an error due to no network", async () => {
    let errorObj = new Error("no network");
    fetchMock.postOnce(BENEFITSERVICE_URL + "/benefits/eligible", {
      throws: errorObj,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(
      requestEligibility({
        ableToWork: "no",
        gender: "female",
        incomeDetails: "HFPIR2",
        outOfWork: "HFPOOW1",
        reasonForSeparation: "HFPRE3",
      })
    );

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.ELIGIBILITY,
        NETWORK_REQUEST_TYPES.POST,
        undefined,
        {
          answers: {
            ableToWork: "no",
            gender: "female",
            incomeDetails: "HFPIR2",
            outOfWork: "HFPOOW1",
            reasonForSeparation: "HFPRE3",
          },
        }
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.ELIGIBILITY,
        NETWORK_REQUEST_TYPES.POST,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to benefit service to get eligibility",
        }
      ),
    ]);
  });
  it("handles non okay response", async () => {
    fetchMock.postOnce(BENEFITSERVICE_URL + "/benefits/eligible", {
      status: 400,
      body: {
        some: "message",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(
      requestEligibility({
        ableToWork: "no",
        gender: "female",
        incomeDetails: "HFPIR2",
        outOfWork: "HFPOOW1",
        reasonForSeparation: "HFPRE3",
      })
    );

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.ELIGIBILITY,
        NETWORK_REQUEST_TYPES.POST,
        undefined,
        {
          answers: {
            ableToWork: "no",
            gender: "female",
            incomeDetails: "HFPIR2",
            outOfWork: "HFPOOW1",
            reasonForSeparation: "HFPRE3",
          },
        }
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.ELIGIBILITY,
        NETWORK_REQUEST_TYPES.POST,
        NETWORK_FAILED_REASONS.BAD_REQUEST,
        {
          some: "message",
        }
      ),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
});
