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
import { getClientDash } from "./requestClientDash";

const middlewares = [thunk];

describe("fetchClientDash", () => {
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
    fetchMock.getOnce(CURAM_PRESCREEN_LINK + "/redirect/dashboard", {
      status: 200,
    });

    const store = mockStore({});

    await store.dispatch(getClientDash(mockKeycloakFunc));

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.REDIRECT_CLIENT_DASH,
        NETWORK_REQUEST_TYPES.GET
      ),
    ]);
  });

  it("handles fetch throwing an error due to no network", async () => {
    let errorObj = new Error("no network");
    fetchMock.getOnce(CURAM_PRESCREEN_LINK + "/redirect/dashboard", {
      throws: errorObj,
    });

    const store = mockStore({});
    await store.dispatch(getClientDash(mockKeycloakFunc));

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.REDIRECT_CLIENT_DASH,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.REDIRECT_CLIENT_DASH,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to curam to redirect to client dash",
        }
      ),
    ]);
  });

  it("handles error response from fetch", async () => {
    fetchMock.getOnce(CURAM_PRESCREEN_LINK + "/redirect/dashboard", {
      status: 500,
      body: {
        Status: 500,
        ErrorMessage:
          '{"errors":[{"code":400,"message":"The value of sdfsdfdsf is not a valid value for the parameter in which it is being used. ","level":"error","message_id":"HTTP_400_PARAM_NOT_VALID"}]}',
      },
    });

    const store = mockStore({});
    await store.dispatch(getClientDash(mockKeycloakFunc));

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.REDIRECT_CLIENT_DASH,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.REDIRECT_CLIENT_DASH,
        NETWORK_REQUEST_TYPES.GET,
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
