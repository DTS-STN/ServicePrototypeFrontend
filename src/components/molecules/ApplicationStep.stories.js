import React from "react";
import { ApplicationStep } from "./ApplicationStep";

export default {
  title: "Components/Molecules/ApplicationStep",
  component: ApplicationStep,
};

const Template = (args) => <ApplicationStep {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  stepNumber: "some-number-1",
  stepStatus: "some-status-1",
  stepDescription: "some-description-1",
  date: "some-date-1",
};
