import React from "react";
import { EligibleBenefit } from "./EligibleBenefit";

export default {
  title: "Components/Molecules/EligibleBenefit",
  component: EligibleBenefit,
};

const Template = (args) => <EligibleBenefit {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  benefitId: "some-benefitId-1",
  benefitName: "some-benefitName-1",
  benefitOnClick: () => {},
};
