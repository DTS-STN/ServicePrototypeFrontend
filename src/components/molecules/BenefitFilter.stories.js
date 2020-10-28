import React from "react";
import { BenefitFilter } from "./BenefitFilter";

export default {
  title: "Components/molecules/BenefitFilter",
  component: BenefitFilter,
};

const Template = (args) => <BenefitFilter {...args} />;

export const Primary = Template.bind({});
export const Eligible = Template.bind({});
export const PotentialHelp = Template.bind({});
export const Others = Template.bind({});

Primary.args = {
  text: "Filter by",
  eligible: "Eligible benefits",
  help: "Potential help",
  others: "Others",
  isSelectedEligible: false,
  isSelectedHelp: false,
  isSelectedOthers: false,
  eligibleCount: 15,
  helpCount: 8,
  othersCount: 30,
};

Eligible.args = {
  text: "Filter by",
  eligible: "Eligible benefits",
  help: "Potential help",
  others: "Others",
  isSelectedEligible: true,
  isSelectedHelp: false,
  isSelectedOthers: false,
  eligibleCount: 15,
  helpCount: 8,
  othersCount: 30,
};

PotentialHelp.args = {
  text: "Filter by",
  eligible: "Eligible benefits",
  help: "Potential help",
  others: "Others",
  isSelectedEligible: false,
  isSelectedHelp: true,
  isSelectedOthers: false,
  eligibleCount: 15,
  helpCount: 8,
  othersCount: 30,
};

Others.args = {
  text: "Filter by",
  eligible: "Eligible benefits",
  help: "Potential help",
  others: "Others",
  isSelectedEligible: false,
  isSelectedHelp: false,
  isSelectedOthers: true,
  eligibleCount: 15,
  helpCount: 8,
  othersCount: 30,
};
