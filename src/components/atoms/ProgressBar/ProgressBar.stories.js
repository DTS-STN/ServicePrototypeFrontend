import React from "react";
import { ProgressBar } from "./ProgressBar";

export default {
  title: "Components/Atoms/ProgressBar",
  component: ProgressBar,
};

const Template = (args) => <ProgressBar {...args} />;

export const Example1 = Template.bind({});
export const Example2 = Template.bind({});

Example1.args = {
  customClass: "",
  id: "progress50",
  alt: "50 percent",
  percentage: 50,
};

Example2.args = {
  customClass: "",
  id: "progress80",
  alt: "80 percent",
  percentage: 80,
};
