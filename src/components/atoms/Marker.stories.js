import React from "react";
import { Marker } from "./Marker";

export default {
  title: "Components/Atoms/Marker",
  component: Marker,
};

const Template = (args) => <Marker {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
