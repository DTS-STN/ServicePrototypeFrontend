import React from "react";
import { Title } from "./Title";

export default {
  title: "Components/Atoms/Title",
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Title Text",
};
