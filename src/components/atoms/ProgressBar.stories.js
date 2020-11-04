import React from "react";
import { ProgressBar } from "./ProgressBar";

export default {
  title: "Components/Atoms/ProgressBar",
  component: ProgressBar,
};

const Template = (args) => <ProgressBar {...args} />;

export const FiftyPercent = Template.bind({});
export const EigthyPercent = Template.bind({});

FiftyPercent.args = {
  customClass: "",
  id: "progress50",
  percentage: 50,
};

EigthyPercent.args = {
  customClass: "",
  id: "progress80",
  percentage: 80,
};
