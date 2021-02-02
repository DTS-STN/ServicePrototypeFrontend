import * as caseSelector from "./casesDataSelectors";

it("caseSelector transforms data properly", () => {
  let data = caseSelector.casesDataSelector.resultFunc(
    "en",
    {
      2: {
        id: 2,
        title: "Provincial Social Security",
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
        description:
          "Provincial Social Security benefit which hands out a check every month at retirement (en)",
        long_description: null,
        benefit_link: null,
        isSelected: false,
        isEligible: false,
      },
      3: {
        id: 3,
        title: "New Parents Benefit (EN)",
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
        description:
          "The new parent benefits supplies supplemental income from the government during parental leave (EN)",
        long_description: null,
        benefit_link: null,
        isSelected: false,
        isEligible: false,
      },
      4: {
        id: 4,
        title: "Newcomers Benefit (EN) ",
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
        description:
          "Newcomers benefit to help assist in the settling of new immigrants and refuges to Canada (EN)",
        long_description: null,
        benefit_link: null,
        isSelected: false,
        isEligible: false,
      },
      1: {
        id: 1,
        title: "Employment Insurance (EN)",
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
        description:
          "This benefit lays out what employment insurance looks like (EN)",
        long_description: "hello this is some content",
        benefit_link: null,
        isSelected: false,
        isEligible: false,
      },
    },
    {}
  );
  expect(data).toEqual([
    {
      benefitId: "ei_benefit",
      benefitTitle: "Employment Insurance (EN)",
      benefitDescription:
        "This benefit lays out what employment insurance looks like (EN)",
      benefitContent: "hello this is some content",
      checkBoxAriaLabelBy: "select Employment Insurance (EN)",
      isSelected: false,
      isEligible: false,
    },
    {
      benefitId: "provincial_social_security",
      benefitTitle: "Provincial Social Security",
      benefitDescription:
        "Provincial Social Security benefit which hands out a check every month at retirement (en)",
      benefitContent: null,
      checkBoxAriaLabelBy: "select Provincial Social Security",
      isSelected: false,
      isEligible: false,
    },
    {
      benefitId: "new_parents_benefit",
      benefitTitle: "New Parents Benefit (EN)",
      benefitDescription:
        "The new parent benefits supplies supplemental income from the government during parental leave (EN)",
      benefitContent: null,
      checkBoxAriaLabelBy: "select New Parents Benefit (EN)",
      isSelected: false,
      isEligible: false,
    },
    {
      benefitId: "new_commers_benefit",
      benefitTitle: "Newcomers Benefit (EN) ",
      benefitDescription:
        "Newcomers benefit to help assist in the settling of new immigrants and refuges to Canada (EN)",
      benefitContent: null,
      checkBoxAriaLabelBy: "select Newcomers Benefit (EN) ",
      isSelected: false,
      isEligible: false,
    },
  ]);
});

it("caseSelector selects correct benefit and transforms data properly", () => {
  const data = caseSelector.benefitSelectorFactory(3).resultFunc(
    "fr",
    {},
    {
      2: {
        id: 2,
        title: "Provincial Social Security (FR)",
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
        description:
          "Provincial Social Security benefit which hands out a check every month at retirement (fr)",
        long_description: null,
        benefit_link: null,
        isSelected: false,
        isEligible: false,
      },
      3: {
        id: 3,
        title: "New Parents Benefit (FR)",
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
        description:
          "The new parent benefits supplies supplemental income from the government during parental leave (FR)",
        long_description: null,
        benefit_link: null,
        isSelected: false,
        isEligible: false,
      },
      4: {
        id: 4,
        title: "Newcomers Benefit (FR) ",
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
        description:
          "Newcomers benefit to help assist in the settling of new immigrants and refuges to Canada (FR)",
        long_description: null,
        benefit_link: null,
        isSelected: false,
        isEligible: false,
      },
      1: {
        id: 1,
        title: "Employment Insurance Benefit (FR)",
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
        description:
          "This benefit lays out what employment insurance looks like (FR)",
        long_description: null,
        benefit_link: null,
        isSelected: false,
        isEligible: false,
      },
    }
  );
  expect(data).toEqual({
    benefitId: "new_parents_benefit",
    benefitTitle: "New Parents Benefit (FR)",
    benefitDescription:
      "The new parent benefits supplies supplemental income from the government during parental leave (FR)",
    benefitContent: null,
    checkBoxAriaLabelBy: "sélectionner New Parents Benefit (FR)",
    isSelected: false,
    isEligible: false,
  });
});
