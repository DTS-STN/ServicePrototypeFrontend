import {
  networkRequestActionCreator,
  networkReceivedActionCreator,
  networkRequestFailedActionCreator,
  selectBenefitActionCreator,
  deselectBenefitActionCreator,
  NETWORK_FAILED_REASONS,
  NETWORK_REQUEST_TYPES,
} from "../../actions";
import { RESOURCE_TYPES } from "../../dispatchers";
import { benefitsData } from "./benefitsDataReducer";

describe("benefitsData", () => {
  it("has correct default state", () => {
    const result = benefitsData(undefined, {});
    expect(result).toEqual({
      isFetching: false,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      benefitsMap: {},
      benefitsKeyToIdMap: {},
    });
  });
  it("handles network request action", () => {
    const result = benefitsData(
      {
        isFetching: false,
        fetchFailed: true,
        fetchFailedReason: "fwefwefwe",
        fetchFailedObj: {
          some: "key",
        },
        benefitsMap: {
          some: "key",
        },
        benefitsKeyToIdMap: {
          some: "key",
        },
      },
      networkRequestActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET
      )
    );

    expect(result).toEqual({
      isFetching: true,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      benefitsMap: {
        some: "key",
      },
      benefitsKeyToIdMap: {
        some: "key",
      },
    });
  });
  it("handles network receive action", () => {
    const result = benefitsData(
      {
        isFetching: true,
        fetchFailed: true,
        fetchFailedReason: "sdfsdfsdfs",
        fetchFailedObj: {
          some: "key",
        },
        benefitsMap: {
          1: {
            id: 1,
            title_en: "Employment Insurance (EN)",
            title_fr: "Employment Insurance Benefit (FR)",
            title_es: null,
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
            benefit_description_en:
              "This benefit lays out what employment insurance looks like (EN)",
            benefit_description_fr:
              "This benefit lays out what employment insurance looks like (FR)",
            benefit_content_en: null,
            benefit_content_fr: null,
            benefit_link_en: null,
            benefit_link_fr: null,
            life_journeys: [],
            isEligible: true,
            isSelected: false,
          },
        },
        benefitsKeyToIdMap: {
          ei_benefit: 1,
        },
      },
      networkReceivedActionCreator(
        RESOURCE_TYPES.BENEFITS,
        NETWORK_REQUEST_TYPES.GET,
        [
          {
            id: 1,
            title_en: "Employment Insurance Hello (EN)",
            title_fr: "Employment Insurance Benefit Hello (FR)",
            title_es: null,
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
            benefit_description_en:
              "This benefit lays out what employment insurance looks like (EN)",
            benefit_description_fr:
              "This benefit lays out what employment insurance looks like (FR)",
            benefit_content_en: null,
            benefit_content_fr: null,
            life_journeys: [],
            benefit_link_en: null,
            benefit_link_fr: null,
          },
          {
            id: 2,
            title_en: "Provincial Social Security (EN)",
            title_fr: "Provincial Social Security (FR)",
            title_es: null,
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
            created_at: "2020-11-24T16:23:55.819Z",
            updated_at: "2020-11-24T16:23:55.836Z",
            benefit_key: "provincial_social_security",
            benefit_description_en:
              "Provincial Social Security benefit which hands out a check every month at retirement (en)",
            benefit_description_fr:
              "Provincial Social Security benefit which hands out a check every month at retirement (fr)",
            benefit_content_en: null,
            benefit_content_fr: null,
            life_journeys: [],
            benefit_link_en: null,
            benefit_link_fr: null,
          },
        ]
      )
    );

    expect(result).toEqual({
      isFetching: false,
      fetchFailed: false,
      fetchFailedReason: "",
      fetchFailedObj: {},
      benefitsMap: {
        1: {
          id: 1,
          title_en: "Employment Insurance Hello (EN)",
          title_fr: "Employment Insurance Benefit Hello (FR)",
          title_es: null,
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
          benefit_description_en:
            "This benefit lays out what employment insurance looks like (EN)",
          benefit_description_fr:
            "This benefit lays out what employment insurance looks like (FR)",
          benefit_content_en: null,
          benefit_content_fr: null,
          benefit_link_en: null,
          benefit_link_fr: null,
          life_journeys: [],
          isEligible: true,
          isSelected: false,
        },
        2: {
          id: 2,
          title_en: "Provincial Social Security (EN)",
          title_fr: "Provincial Social Security (FR)",
          title_es: null,
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
          created_at: "2020-11-24T16:23:55.819Z",
          updated_at: "2020-11-24T16:23:55.836Z",
          benefit_key: "provincial_social_security",
          benefit_description_en:
            "Provincial Social Security benefit which hands out a check every month at retirement (en)",
          benefit_description_fr:
            "Provincial Social Security benefit which hands out a check every month at retirement (fr)",
          benefit_content_en: null,
          benefit_content_fr: null,
          benefit_link_en: null,
          benefit_link_fr: null,
          life_journeys: [],
          isEligible: true,
          isSelected: false,
        },
      },
      benefitsKeyToIdMap: {
        ei_benefit: 1,
        provincial_social_security: 2,
      },
    });
  });
  it("handles network request failed action", () => {
    const result = benefitsData(
      {
        isFetching: true,
        fetchFailed: false,
        fetchFailedReason: "",
        fetchFailedObj: {},
        benefitsMap: {},
        benefitsKeyToIdMap: {},
      },
      networkRequestFailedActionCreator(
        RESOURCE_TYPES.BENEFITS,
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
      benefitsMap: {},
      benefitsKeyToIdMap: {},
    });
  });
  it("handles benefit select action", () => {
    const result = benefitsData(
      {
        isFetching: true,
        fetchFailed: true,
        fetchFailedReason: "sdfsdfsdfs",
        fetchFailedObj: {
          some: "key",
        },
        benefitsMap: {
          1: {
            id: 1,
            title_en: "Employment Insurance (EN)",
            title_fr: "Employment Insurance Benefit (FR)",
            title_es: null,
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
            benefit_description_en:
              "This benefit lays out what employment insurance looks like (EN)",
            benefit_description_fr:
              "This benefit lays out what employment insurance looks like (FR)",
            benefit_content_en: null,
            benefit_content_fr: null,
            benefit_link_en: null,
            benefit_link_fr: null,
            isEligible: false,
            isSelected: false,
          },
        },
        benefitsKeyToIdMap: {
          ei_benefit: 1,
        },
      },
      selectBenefitActionCreator(1)
    );

    expect(result).toEqual({
      isFetching: true,
      fetchFailed: true,
      fetchFailedReason: "sdfsdfsdfs",
      fetchFailedObj: {
        some: "key",
      },
      benefitsMap: {
        1: {
          id: 1,
          title_en: "Employment Insurance (EN)",
          title_fr: "Employment Insurance Benefit (FR)",
          title_es: null,
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
          benefit_description_en:
            "This benefit lays out what employment insurance looks like (EN)",
          benefit_description_fr:
            "This benefit lays out what employment insurance looks like (FR)",
          benefit_content_en: null,
          benefit_content_fr: null,
          benefit_link_en: null,
          benefit_link_fr: null,
          isEligible: false,
          isSelected: true,
        },
      },
      benefitsKeyToIdMap: {
        ei_benefit: 1,
      },
    });

    const resultForOFKey = benefitsData(
      {
        isFetching: true,
        fetchFailed: true,
        fetchFailedReason: "sdfsdfsdfs",
        fetchFailedObj: {
          some: "key",
        },
        benefitsMap: {
          1: {
            id: 1,
            title_en: "Employment Insurance (EN)",
            title_fr: "Employment Insurance Benefit (FR)",
            title_es: null,
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
            benefit_description_en:
              "This benefit lays out what employment insurance looks like (EN)",
            benefit_description_fr:
              "This benefit lays out what employment insurance looks like (FR)",
            benefit_content_en: null,
            benefit_content_fr: null,
            benefit_link_en: null,
            benefit_link_fr: null,
            isEligible: false,
            isSelected: false,
          },
        },
        benefitsKeyToIdMap: {
          ei_benefit: 1,
        },
      },
      selectBenefitActionCreator("ei_benefit")
    );

    expect(result).toEqual({
      isFetching: true,
      fetchFailed: true,
      fetchFailedReason: "sdfsdfsdfs",
      fetchFailedObj: {
        some: "key",
      },
      benefitsMap: {
        1: {
          id: 1,
          title_en: "Employment Insurance (EN)",
          title_fr: "Employment Insurance Benefit (FR)",
          title_es: null,
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
          benefit_description_en:
            "This benefit lays out what employment insurance looks like (EN)",
          benefit_description_fr:
            "This benefit lays out what employment insurance looks like (FR)",
          benefit_content_en: null,
          benefit_content_fr: null,
          benefit_link_en: null,
          benefit_link_fr: null,
          isEligible: false,
          isSelected: true,
        },
      },
      benefitsKeyToIdMap: {
        ei_benefit: 1,
      },
    });
  });
  it("handles benefit deselect action", () => {
    const result = benefitsData(
      {
        isFetching: true,
        fetchFailed: true,
        fetchFailedReason: "sdfsdfsdfs",
        fetchFailedObj: {
          some: "key",
        },
        benefitsMap: {
          1: {
            id: 1,
            title_en: "Employment Insurance (EN)",
            title_fr: "Employment Insurance Benefit (FR)",
            title_es: null,
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
            benefit_description_en:
              "This benefit lays out what employment insurance looks like (EN)",
            benefit_description_fr:
              "This benefit lays out what employment insurance looks like (FR)",
            benefit_content_en: null,
            benefit_content_fr: null,
            benefit_link_en: null,
            benefit_link_fr: null,
            isEligible: false,
            isSelected: true,
          },
        },
        benefitsKeyToIdMap: {
          ei_benefit: 1,
        },
      },
      deselectBenefitActionCreator(1)
    );

    expect(result).toEqual({
      isFetching: true,
      fetchFailed: true,
      fetchFailedReason: "sdfsdfsdfs",
      fetchFailedObj: {
        some: "key",
      },
      benefitsMap: {
        1: {
          id: 1,
          title_en: "Employment Insurance (EN)",
          title_fr: "Employment Insurance Benefit (FR)",
          title_es: null,
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
          benefit_description_en:
            "This benefit lays out what employment insurance looks like (EN)",
          benefit_description_fr:
            "This benefit lays out what employment insurance looks like (FR)",
          benefit_content_en: null,
          benefit_content_fr: null,
          benefit_link_en: null,
          benefit_link_fr: null,
          isEligible: false,
          isSelected: false,
        },
      },
      benefitsKeyToIdMap: {
        ei_benefit: 1,
      },
    });

    const resultForOFKey = benefitsData(
      {
        isFetching: true,
        fetchFailed: true,
        fetchFailedReason: "sdfsdfsdfs",
        fetchFailedObj: {
          some: "key",
        },
        benefitsMap: {
          1: {
            id: 1,
            title_en: "Employment Insurance (EN)",
            title_fr: "Employment Insurance Benefit (FR)",
            title_es: null,
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
            benefit_description_en:
              "This benefit lays out what employment insurance looks like (EN)",
            benefit_description_fr:
              "This benefit lays out what employment insurance looks like (FR)",
            benefit_content_en: null,
            benefit_content_fr: null,
            benefit_link_en: null,
            benefit_link_fr: null,
            isEligible: false,
            isSelected: true,
          },
        },
        benefitsKeyToIdMap: {
          ei_benefit: 1,
        },
      },
      deselectBenefitActionCreator("ei_benefit")
    );

    expect(result).toEqual({
      isFetching: true,
      fetchFailed: true,
      fetchFailedReason: "sdfsdfsdfs",
      fetchFailedObj: {
        some: "key",
      },
      benefitsMap: {
        1: {
          id: 1,
          title_en: "Employment Insurance (EN)",
          title_fr: "Employment Insurance Benefit (FR)",
          title_es: null,
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
          benefit_description_en:
            "This benefit lays out what employment insurance looks like (EN)",
          benefit_description_fr:
            "This benefit lays out what employment insurance looks like (FR)",
          benefit_content_en: null,
          benefit_content_fr: null,
          benefit_link_en: null,
          benefit_link_fr: null,
          isEligible: false,
          isSelected: false,
        },
      },
      benefitsKeyToIdMap: {
        ei_benefit: 1,
      },
    });
  });
});
