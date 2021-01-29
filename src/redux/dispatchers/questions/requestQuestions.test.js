import "cross-fetch/polyfill";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import {
  NETWORK_FAILED_REASONS,
  NETWORK_REQUEST_TYPES,
  networkRequestFailedActionCreator,
  networkReceivedActionCreator,
  networkRequestActionCreator,
} from "../../actions";
import { RESOURCE_TYPES } from "../resourceTypes";
import thunk from "redux-thunk";
import { BENEFITSERVICE_URL } from "../../../variables";
import { getQuestions } from "./requestQuestions";

const middlewares = [thunk];

describe("requestQuestions", () => {
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

  it("fetches questions and dispatches the correct actions", async () => {
    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions", {
      status: 200,
      body: [
        {
          id: 1,
          text: "How much income have you earned in Canada the last year?",
        },
        {
          id: 2,
          text: "How long have you been out of work?",
        },
        {
          id: 3,
          text: "Are you able to work / look for work?",
        },
      ],
      headers: {
        "Content-Type": "application/json",
      },
    });

    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions?lang=fr", {
      status: 200,
      body: [
        {
          id: 1,
          text: "How much income have you earned in Canada the last year? [FR]",
        },
        {
          id: 2,
          text: "How long have you been out of work? [FR]",
        },
        {
          id: 3,
          text: "Are you able to work / look for work? [FR]",
        },
      ],
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getQuestions());

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS_FR,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkReceivedActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET,
        [
          {
            id: 1,
            text: "How much income have you earned in Canada the last year?",
          },
          {
            id: 2,
            text: "How long have you been out of work?",
          },
          {
            id: 3,
            text: "Are you able to work / look for work?",
          },
        ]
      ),
      networkReceivedActionCreator(
        RESOURCE_TYPES.QUESTIONS_FR,
        NETWORK_REQUEST_TYPES.GET,
        [
          {
            id: 1,
            text:
              "How much income have you earned in Canada the last year? [FR]",
          },
          {
            id: 2,
            text: "How long have you been out of work? [FR]",
          },
          {
            id: 3,
            text: "Are you able to work / look for work? [FR]",
          },
        ]
      ),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
  it("handles fetch throwing an error due to no network", async () => {
    let errorObj = new Error("no network");
    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions", {
      throws: errorObj,
      headers: {
        "Content-Type": "application/json",
      },
    });

    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions?lang=fr", {
      throws: errorObj,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getQuestions());

    expect(store.getActions()).toEqual([
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS_FR,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET,
        NETWORK_FAILED_REASONS.NO_NETWORK,
        {
          message: "Could not connect to CMS to retrieve questions",
        }
      ),
    ]);
  });
  it("handles parameters", async () => {
    fetchMock.getOnce(
      BENEFITSERVICE_URL + "/questions?_start=1&_limit=10&_sort=created_at:asc",
      {
        status: 200,
        body: [
          {
            id: 1,
            text: "How much income have you earned in Canada the last year?",
          },
          {
            id: 2,
            text: "How long have you been out of work?",
          },
          {
            id: 3,
            text: "Are you able to work / look for work?",
          },
        ],
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    fetchMock.getOnce(
      BENEFITSERVICE_URL +
        "/questions?_start=1&_limit=10&_sort=created_at:asc&lang=fr",
      {
        status: 200,
        body: [
          {
            id: 1,
            text:
              "How much income have you earned in Canada the last year? [FR]",
          },
          {
            id: 2,
            text: "How long have you been out of work? [FR]",
          },
          {
            id: 3,
            text: "Are you able to work / look for work? [FR]",
          },
        ],
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const store = mockStore({});
    await store.dispatch(getQuestions(1, 10, "created_at:asc"));
    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET,
        {
          start: 1,
          limit: 10,
          sort: "created_at:asc",
        }
      ),
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS_FR,
        NETWORK_REQUEST_TYPES.GET,
        {
          start: 1,
          limit: 10,
          sort: "created_at:asc",
        }
      ),
      networkReceivedActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET,
        [
          {
            id: 1,
            text: "How much income have you earned in Canada the last year?",
          },
          {
            id: 2,
            text: "How long have you been out of work?",
          },
          {
            id: 3,
            text: "Are you able to work / look for work?",
          },
        ]
      ),
      networkReceivedActionCreator(
        RESOURCE_TYPES.QUESTIONS_FR,
        NETWORK_REQUEST_TYPES.GET,
        [
          {
            id: 1,
            text:
              "How much income have you earned in Canada the last year? [FR]",
          },
          {
            id: 2,
            text: "How long have you been out of work? [FR]",
          },
          {
            id: 3,
            text: "Are you able to work / look for work? [FR]",
          },
        ]
      ),
    ];

    expect(store.getActions()).toEqual(expectedActions);
    expect(fetchMock.calls()[0][0]).toBe(
      BENEFITSERVICE_URL + "/questions?_start=1&_limit=10&_sort=created_at:asc"
    );
  });
  it("handles 400 response from api and dispatches the correct actions", async () => {
    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions", {
      status: 400,
      body: {
        some: "message",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions?lang=fr", {
      status: 400,
      body: {
        some: "message",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getBenefits());

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS_FR,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.QUESTIONS,
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
    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions", {
      status: 404,
      body: {
        some: "message",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions?lang=fr", {
      status: 404,
      body: {
        some: "message",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getBenefits());

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS_FR,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.QUESTIONS,
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
    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions", {
      status: 500,
      body: {
        some: "message",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions?lang=fr", {
      status: 500,
      body: {
        some: "message",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const store = mockStore({});

    await store.dispatch(getBenefits());

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS_FR,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.QUESTIONS,
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
    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions", {
      status: 500,
      body: "some message",
    });

    fetchMock.getOnce(BENEFITSERVICE_URL + "/questions?lang=fr", {
      status: 500,
      body: "some message",
    });

    const store = mockStore({});

    await store.dispatch(getBenefits());

    const expectedActions = [
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS_FR,
        NETWORK_REQUEST_TYPES.GET
      ),
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.QUESTIONS,
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
