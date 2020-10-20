import React from "react";
import { BenefitsCounter } from "./BenefitsCounter";

export default {
  title: "Components/Atoms/BenefitsCounter",
  component: BenefitsCounter,
};

const Template = (args) => <BenefitsCounter {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  counter: 80,
  text: "Total benefits",
};
