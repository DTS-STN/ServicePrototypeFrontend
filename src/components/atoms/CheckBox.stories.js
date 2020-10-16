import React from "react";
import { CheckBox } from "./CheckBox";

export default {
  title: "Components/Atoms/CheckBox",
  component: CheckBox,
};

const Template = (args) => <CheckBox {...args} />;

export const Primary = Template.bind({});

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};
