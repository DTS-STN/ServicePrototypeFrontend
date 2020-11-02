import React from "react";
import { ActionButton } from "./ActionButton";
import { FilteredBenefitsCounter } from "./FilteredBenefitsCounter";

export default {
  title: "Components/Atoms/ActionButton",
  component: ActionButton,
};

const Template = (args) => <ActionButton {...args} />;

export const Primary = Template.bind({});
export const Rounded = Template.bind({});
export const WithCounter = Template.bind({});

Primary.args = {
  text: "Example Action 🚀",
};

Rounded.args = {
  text: "Example Rounded Action 🚀",
  rounded: true,
};

WithCounter.args = {
  text: "Example With Counter",
  invert: true,
  children: <FilteredBenefitsCounter count={10} />,
};
