import * as langSelectors from "../language";
import * as benefitsSelectors from "./benefitsDataSelectors";

it("transforms data properly en", () => {
  let data = benefitsSelectors.benefitsDataSelector.resultFunc("en", {
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
      benefit_tags: [],
      isSelected: false,
      isEligible: false,
    },
    3: {
      id: 3,
      title_en: "New Parents Benefit (EN)",
      title_fr: "New Parents Benefit (FR)",
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
      created_at: "2020-11-24T16:26:52.646Z",
      updated_at: "2020-11-24T16:26:52.661Z",
      benefit_key: "new_parents_benefit",
      benefit_description_en:
        "The new parent benefits supplies supplemental income from the government during parental leave (EN)",
      benefit_description_fr:
        "The new parent benefits supplies supplemental income from the government during parental leave (FR)",
      benefit_content_en: null,
      benefit_content_fr: null,
      benefit_link_en: null,
      benefit_link_fr: null,
      benefit_tags: [],
      isSelected: false,
      isEligible: false,
    },
    4: {
      id: 4,
      title_en: "Newcomers Benefit (EN) ",
      title_fr: "Newcomers Benefit (FR) ",
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
      created_at: "2020-11-24T16:32:25.836Z",
      updated_at: "2020-11-24T16:32:25.854Z",
      benefit_key: "new_commers_benefit",
      benefit_description_en:
        "Newcomers benefit to help assist in the settling of new immigrants and refuges to Canada (EN)",
      benefit_description_fr:
        "Newcomers benefit to help assist in the settling of new immigrants and refuges to Canada (FR)",
      benefit_content_en: null,
      benefit_content_fr: null,
      benefit_link_en: null,
      benefit_link_fr: null,
      benefit_tags: [],
      isSelected: false,
      isEligible: false,
    },
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
      updated_at: "2020-11-29T23:52:46.231Z",
      benefit_key: "ei_benefit",
      benefit_description_en:
        "This benefit lays out what employment insurance looks like (EN)",
      benefit_description_fr:
        "This benefit lays out what employment insurance looks like (FR)",
      benefit_content_en: null,
      benefit_content_fr: null,
      benefit_link_en: null,
      benefit_link_fr: null,
      benefit_tags: [
        {
          id: 1,
          tag_en: "employment_insurance",
          tag_fr: "employment_insurance_(fr)",
          created_by: 1,
          updated_by: 1,
          created_at: "2020-11-29T23:52:39.281Z",
          updated_at: "2020-11-29T23:52:39.300Z",
        },
      ],
      isSelected: false,
      isEligible: false,
    },
  });
  expect(data).toEqual([
    {
      benefitId: "ei_benefit",
      benefitTag: "employment_insurance",
      benefitTitle: "Employment Insurance (EN)",
      benefitDescription:
        "This benefit lays out what employment insurance looks like (EN)",
      checkBoxAriaLabelBy: "select Employment Insurance (EN)",
      isSelected: false,
      isEligible: false,
    },
    {
      benefitId: "provincial_social_security",
      benefitTag: "",
      benefitTitle: "Provincial Social Security (EN)",
      benefitDescription:
        "Provincial Social Security benefit which hands out a check every month at retirement (en)",
      checkBoxAriaLabelBy: "select Provincial Social Security (EN)",
      isSelected: false,
      isEligible: false,
    },
    {
      benefitId: "new_parents_benefit",
      benefitTag: "",
      benefitTitle: "New Parents Benefit (EN)",
      benefitDescription:
        "The new parent benefits supplies supplemental income from the government during parental leave (EN)",
      checkBoxAriaLabelBy: "select New Parents Benefit (EN)",
      isSelected: false,
      isEligible: false,
    },
    {
      benefitId: "new_commers_benefit",
      benefitTag: "",
      benefitTitle: "Newcomers Benefit (EN) ",
      benefitDescription:
        "Newcomers benefit to help assist in the settling of new immigrants and refuges to Canada (EN)",
      checkBoxAriaLabelBy: "select Newcomers Benefit (EN) ",
      isSelected: false,
      isEligible: false,
    },
  ]);
});

it("transforms data properly fr", () => {
  let data = benefitsSelectors.benefitsDataSelector.resultFunc("fr", {
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
      benefit_tags: [],
      isSelected: false,
      isEligible: false,
    },
    3: {
      id: 3,
      title_en: "New Parents Benefit (EN)",
      title_fr: "New Parents Benefit (FR)",
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
      created_at: "2020-11-24T16:26:52.646Z",
      updated_at: "2020-11-24T16:26:52.661Z",
      benefit_key: "new_parents_benefit",
      benefit_description_en:
        "The new parent benefits supplies supplemental income from the government during parental leave (EN)",
      benefit_description_fr:
        "The new parent benefits supplies supplemental income from the government during parental leave (FR)",
      benefit_content_en: null,
      benefit_content_fr: null,
      benefit_link_en: null,
      benefit_link_fr: null,
      benefit_tags: [],
      isSelected: false,
      isEligible: false,
    },
    4: {
      id: 4,
      title_en: "Newcomers Benefit (EN) ",
      title_fr: "Newcomers Benefit (FR) ",
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
      created_at: "2020-11-24T16:32:25.836Z",
      updated_at: "2020-11-24T16:32:25.854Z",
      benefit_key: "new_commers_benefit",
      benefit_description_en:
        "Newcomers benefit to help assist in the settling of new immigrants and refuges to Canada (EN)",
      benefit_description_fr:
        "Newcomers benefit to help assist in the settling of new immigrants and refuges to Canada (FR)",
      benefit_content_en: null,
      benefit_content_fr: null,
      benefit_link_en: null,
      benefit_link_fr: null,
      benefit_tags: [],
      isSelected: false,
      isEligible: false,
    },
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
      updated_at: "2020-11-29T23:52:46.231Z",
      benefit_key: "ei_benefit",
      benefit_description_en:
        "This benefit lays out what employment insurance looks like (EN)",
      benefit_description_fr:
        "This benefit lays out what employment insurance looks like (FR)",
      benefit_content_en: null,
      benefit_content_fr: null,
      benefit_link_en: null,
      benefit_link_fr: null,
      benefit_tags: [
        {
          id: 1,
          tag_en: "employment_insurance",
          tag_fr: "employment_insurance_(fr)",
          created_by: 1,
          updated_by: 1,
          created_at: "2020-11-29T23:52:39.281Z",
          updated_at: "2020-11-29T23:52:39.300Z",
        },
      ],
      isSelected: false,
      isEligible: false,
    },
  });
  expect(data).toEqual([
    {
      benefitId: "ei_benefit",
      benefitTag: "employment_insurance_(fr)",
      benefitTitle: "Employment Insurance Benefit (FR)",
      benefitDescription:
        "This benefit lays out what employment insurance looks like (FR)",
      checkBoxAriaLabelBy: "sélectionner Employment Insurance Benefit (FR)",
      isSelected: false,
      isEligible: false,
    },
    {
      benefitId: "provincial_social_security",
      benefitTag: "",
      benefitTitle: "Provincial Social Security (FR)",
      benefitDescription:
        "Provincial Social Security benefit which hands out a check every month at retirement (fr)",
      checkBoxAriaLabelBy: "sélectionner Provincial Social Security (FR)",
      isSelected: false,
      isEligible: false,
    },
    {
      benefitId: "new_parents_benefit",
      benefitTag: "",
      benefitTitle: "New Parents Benefit (FR)",
      benefitDescription:
        "The new parent benefits supplies supplemental income from the government during parental leave (FR)",
      checkBoxAriaLabelBy: "sélectionner New Parents Benefit (FR)",
      isSelected: false,
      isEligible: false,
    },
    {
      benefitId: "new_commers_benefit",
      benefitTag: "",
      benefitTitle: "Newcomers Benefit (FR) ",
      benefitDescription:
        "Newcomers benefit to help assist in the settling of new immigrants and refuges to Canada (FR)",
      checkBoxAriaLabelBy: "sélectionner Newcomers Benefit (FR) ",
      isSelected: false,
      isEligible: false,
    },
  ]);
});
