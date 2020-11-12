import React from "react";
import { Combo } from "./Combo";

export default {
  title: "Components/Molecules/Combo",
  component: Combo,
};

const Template = (args) => <Combo {...args} />;

export const Primary = Template.bind({});
export const DifferentColors = Template.bind({});

Primary.args = {
  labelText: "This is the label or question for the options below",
  customDivClass: "",
  customLabelClass: "text-bold",
  customSelClass: "text-blue-900",
  id: "combo1",
  required: true,
  textRequired: "(required)",
  options: [
    { id: "A", name: "option A" },
    { id: "B", name: "option B" },
    { id: "C", name: "option C" },
  ],
};

DifferentColors.args = {
  labelText: "This is the label for example # 2 below",
  customDivClass: "",
  customLabelClass: "bg-pink-200",
  customSelClass: "bg-pink-500",
  id: "combo2",
  required: true,
  textRequired: "(requis)",
  options: [
    { id: 0, name: "some option #0" },
    { id: 1, name: "some option #1" },
    { id: 2, name: "some option #2" },
  ],
};
