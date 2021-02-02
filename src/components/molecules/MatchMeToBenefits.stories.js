import React from "react";
import { MatchMeToBenefits } from "./MatchMeToBenefits";

export default {
  title: "Components/molecules/MatchMeToBenefits",
  component: MatchMeToBenefits,
};

const Template = (args) => <MatchMeToBenefits {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "Match me to Benefits",
};
