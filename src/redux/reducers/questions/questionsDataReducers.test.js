import {
  networkRequestActionCreator,
  networkReceivedActionCreator,
  networkRequestFailedActionCreator,
  NETWORK_FAILED_REASONS,
  NETWORK_REQUEST_TYPES,
} from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";
import { questionsData } from "./questionsDataReducer";
``;

describe("questionsData", () => {
  it("has correct default state", () => {
    const result = questionsData(undefined, {});
    expect(result).toEqual({
      isFetching: false,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      questionsMap: {},
      questionsMapFr: {},
    });
  });
  it("handles network request action", () => {
    const result = questionsData(
      {
        isFetching: false,
        fetchFailed: true,
        fetchFailedReason: "fwefwefwe",
        fetchFailedObj: {
          some: "key",
        },
        questionsMap: {
          some: "key",
        },
      },
      networkRequestActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET
      )
    );

    expect(result).toEqual({
      isFetching: true,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      questionsMap: {
        some: "key",
      },
    });
  });
  it("handles network receive action", () => {
    const result = questionsData(
      {
        isFetching: true,
        fetchFailed: true,
        fetchFailedReason: "sdfsdfsdfs",
        fetchFailedObj: {
          some: "key",
        },
        questionsMap: {
          1: {
            id: 1,
            text:
              "How much income have you earned in Canada the last year? [FR]",
            answers: [
              {
                id: "lt-30k",
                text: "Less than $30,000 [FR]",
              },
              {
                id: "30k-to-60k",
                text: "Between $30,000 & $60,000 [FR]",
              },
              {
                id: "gt-60k",
                text: "More than $60,000 [FR]",
              },
            ],
          },
        },
      },
      networkReceivedActionCreator(
        RESOURCE_TYPES.QUESTIONS,
        NETWORK_REQUEST_TYPES.GET,
        [
          {
            id: 2,
            text: "How long have you been out of work? [FR]",
            answers: [
              {
                id: "lt-2weeks",
                text: "Less than 2 weeks [FR]",
              },
              {
                id: "2weeks-3months",
                text: "More than 2 weeks but less than 3 months [FR]",
              },
              {
                id: "gt-3months",
                text: "More than 3 months [FR]",
              },
            ],
          },
        ]
      )
    );

    expect(result).toEqual({
      isFetching: false,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      questionsMap: {
        1: {
          id: 1,
          text: "How much income have you earned in Canada the last year? [FR]",
          answers: [
            {
              id: "lt-30k",
              text: "Less than $30,000 [FR]",
            },
            {
              id: "30k-to-60k",
              text: "Between $30,000 & $60,000 [FR]",
            },
            {
              id: "gt-60k",
              text: "More than $60,000 [FR]",
            },
          ],
        },
        2: {
          id: 2,
          text: "How long have you been out of work? [FR]",
          answers: [
            {
              id: "lt-2weeks",
              text: "Less than 2 weeks [FR]",
            },
            {
              id: "2weeks-3months",
              text: "More than 2 weeks but less than 3 months [FR]",
            },
            {
              id: "gt-3months",
              text: "More than 3 months [FR]",
            },
          ],
        },
      },
    });
  });
  it("handles network request failed action", () => {
    const result = questionsData(
      {
        isFetching: true,
        fetchFailed: false,
        fetchFailedReason: "",
        fetchFailedObj: {},
        questionsMap: {},
      },
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.QUESTIONS,
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
      questionsMap: {},
    });
  });
});
