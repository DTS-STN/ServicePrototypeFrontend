import React from "react";
import { Combo } from "./Combo";

export default {
  title: "Components/Atoms/Combo",
  component: Combo,
};

const Template = (args) => <Combo {...args} />;

export const Example1 = Template.bind({});
export const Example2 = Template.bind({});

Example1.args = {
  lblText: "This is the label or question for the options below",
  customClass: "",
  customLabelClass: "text-bold",
  customSelClass: "text-blue-900",
  id: "combo1",
  required: true,
  reqText: "required",
  options: [
    { id: "A", name: "option A" },
    { id: "B", name: "option B" },
    { id: "C", name: "option C" },
  ],
};

Example2.args = {
  lblText: "This is the label for example # 2 below",
  customClass: "",
  customLabelClass: "bg-pink-200",
  customSelClass: "bg-pink-500",
  id: "combo2",
  required: true,
  reqText: "requis",
  options: [
    { id: 0, name: "some option #0" },
    { id: 1, name: "some option #1" },
    { id: 2, name: "some option #2" },
  ],
};
