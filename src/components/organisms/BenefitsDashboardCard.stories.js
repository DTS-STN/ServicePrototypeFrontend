import React from "react";
import { BenefitsDashboardCard } from "./BenefitsDashboardCard";

export default {
  title: "Components/Organisms/BenefitsDashboardCard",
  component: BenefitsDashboardCard,
};

const Template = (args) => <BenefitsDashboardCard {...args} />;

export const Primary = Template.bind({});
export const NoBenefits = Template.bind({});
export const NoFetch = Template.bind({});
export const FailedFetch = Template.bind({});
Primary.args = {
  fetchedCases: true,
  foundCases: [
    {
      caseReferenceNumber: "some-number",
      caseBenefitType: "some-title",
      caseStatus: "some-status",
      id: "some-id",
    },
  ],
  failedFetch: false,
  benefitsData: [
    {
      benefitContent: "some-benefit-content",
      benefitDescription: "some-benefit-description",
      benefitId: "some-id",
      benefitTag: "some-tag",
      benefitTitle: "some-title EI Benefit",
      benefitType: "some-benefit-type",
      checkBoxAriaLabelBy: "some-aria-label",
      isEligible: true,
      isSelected: false,
      redirectUrl: "some-redirect-url",
      serviceType: "some-service-type",
    },
  ],
  benefitOnClick: () => {},
};
NoBenefits.args = {
  fetchedCases: true,
  foundCases: [],
  failedFetch: false,
  benefitsData: [
    {
      benefitContent: "some-benefit-content",
      benefitDescription: "some-benefit-description",
      benefitId: "some-id",
      benefitTag: "some-tag",
      benefitTitle: "some-title",
      benefitType: "some-benefit-type",
      checkBoxAriaLabelBy: "some-aria-label",
      isEligible: true,
      isSelected: false,
      redirectUrl: "some-redirect-url",
      serviceType: "some-service-type",
    },
  ],
  benefitOnClick: () => {},
};
NoFetch.args = {
  fetchedCases: false,
  foundCases: [],
  failedFetch: false,
  benefitsData: [],
  benefitOnClick: () => {},
};
FailedFetch.args = {
  fetchedCases: true,
  foundCases: [],
  failedFetch: true,
  benefitsData: [],
  benefitOnClick: () => {},
};
