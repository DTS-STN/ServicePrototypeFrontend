import React from "react";
import { MtchMeToBenefits } from "./MtchMeToBenefits";

export default {
  title: "Components/molecules/MtchMeToBenefits",
  component: MtchMeToBenefits,
};

const Template = (args) => <MtchMeToBenefits {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

export const Authenticated = Template.bind({});

Authenticated.args = {
  MatchMeToBenefitsText: "Match me to Benefits",
};
