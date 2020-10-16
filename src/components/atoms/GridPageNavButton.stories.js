import React from "react";
import { GridPageNavButton } from "./GridPageNavButton";

export default {
  title: "Components/Atoms/GridNavButton",
  component: GridPageNavButton,
};

const Template = (args) => <GridPageNavButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ariaLabel: "example previous button",
};

export const Next = Template.bind({});
Next.args = {
  ariaLabel: "example next button",
  isNextButton: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ariaLabel: "disabled nav button",
  isDisabled: true,
};
