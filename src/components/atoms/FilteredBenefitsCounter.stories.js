import React from "react";
import { FilteredBenefitsCounter } from "./FilteredBenefitsCounter";

export default {
  title: "Components/Atoms/FilteredBenefitsCounter",
  component: FilteredBenefitsCounter,
};

const Template = (args) => <FilteredBenefitsCounter {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  count: 0,
};
