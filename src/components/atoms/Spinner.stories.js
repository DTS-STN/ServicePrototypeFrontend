import React from "react";
import { Spinner } from "./Spinner";

export default {
  title: "Components/Atoms/Spinner",
  component: Spinner,
};

const Template = (args) => <Spinner {...args} />;

export const Small = Template.bind({});

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};
