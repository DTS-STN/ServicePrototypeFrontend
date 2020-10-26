import React from "react";
import { PageNumber } from "./PageNumber";

export default {
  title: "Components/Atoms/PageNumber",
  component: PageNumber,
};

const Template = (args) => <PageNumber {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  number: 1,
};

export const Selected = Template.bind({});
Selected.args = {
  number: 1,
  isSelected: true,
};
