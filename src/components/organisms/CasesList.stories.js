import React from "react";
import { CasesList } from "./CasesList";

export default {
  title: "Components/Organisms/CasesList",
  component: CasesList,
};

const Template = (args) => <CasesList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cases: [
    {
      caseReferenceNumber: "9000",
      caseBenefitType: "Maternity",
      caseStatus: "Open",
    },
    {
      caseReferenceNumber: "99923",
      caseBenefitType: "Sickness",
      caseStatus: "Closed",
    },
  ],
  numberOfPages: 1,
  caseReferenceNumberLabel: "Reference Number",
  caseBenefitTypeLabel: "Benefit Type",
};
