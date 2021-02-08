import React from "react";
import { CaseCard } from "./CaseCard";

export default {
  title: "Components/Molecules/CaseCard",
  component: CaseCard,
  decorators: [
    (Story) => (
      <ul className="flex w-full list-none">
        <Story />
      </ul>
    ),
  ],
};

const Template = (args) => <CaseCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  caseReferenceNumberLabel: "Reference Number",
  caseReferenceNumber: "99999",
  caseBenefitTypeLabel: "Benefit Type",
  caseBenefitType: "Maternity",
  caseStatus: "Open",
};

export const StatusClosed = Template.bind({});
StatusClosed.args = {
  caseReferenceNumberLabel: "Reference Number",
  caseReferenceNumber: "99999",
  caseBenefitTypeLabel: "Benefit Type",
  caseBenefitType: "Maternity",
  caseStatus: "Closed",
};
