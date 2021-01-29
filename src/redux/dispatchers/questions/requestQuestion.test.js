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
import { getQuestion } from "./requestQuestion";

const middlewares = [thunk];

describe("requestQuestion", () => {
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

  it("fetches question and dispatches the correct action", async () => {
    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions/1", {
      status: 200,
      body: {
        id: 1,
        text: "How much income have you earned in Canada the last year?",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions/1?lang=fr", {
      status: 200,
      body: {
        id: 1,
        text: "How much income have you earned in Canada the last year? [FR]",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getQuestion("1"));

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTION,
        NETWORK_REQUEST_TYPES.GET,
        {
          id: "1",
        }
      ),
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS_FR,
        NETWORK_REQUEST_TYPES.GET,
        {
          id: "1",
        }
      ),
      networkReceivedActionCreator(
        RESOURCE_TYPES.QUESTION,
        NETWORK_REQUEST_TYPES.GET,
        {
          id: 1,
          text: "How much income have you earned in Canada the last year?",
        }
      ),
      networkReceivedActionCreator(
        RESOURCE_TYPES.QUESTION_FR,
        NETWORK_REQUEST_TYPES.GET,
        {
          id: 1,
          text: "How much income have you earned in Canada the last year? [FR]",
        }
      ),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("handles fetch throwing an error due to no network", async () => {
    let errorObj = new Error("no network");
    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions/1", {
      throws: errorObj,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});
    await store.dispatch(getQuestion("1"));

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTION,
        NETWORK_REQUEST_TYPES.GET,
        {
          id: "1",
        }
      ),
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTION_FR,
        NETWORK_REQUEST_TYPES.GET,
        {
          id: "1",
        }
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.QUESTION,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to CMS to retrieve Question",
        }
      ),
    ]);
  });
});
