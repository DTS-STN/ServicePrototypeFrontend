import React from "react";
import { BenefitFilter } from "./BenefitFilter";

export default {
  title: "Components/molecules/BenefitFilter",
  component: BenefitFilter,
};

const Template = (args) => <BenefitFilter {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "Filter by",
  eligible: "Eligible benefits",
  help: "Potential help",
  others: "Others",
  eligibleCount: 15,
  helpCount: 8,
  othersCount: 30,
};
