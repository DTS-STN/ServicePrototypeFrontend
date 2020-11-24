import React from "react";
import { BenefitApply } from "./BenefitApply";

export default {
  title: "Components/Molecules/BenefitApply",
  component: BenefitApply,
};

const Template = (args) => <BenefitApply {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: "BenefitBox",
  number: 3,
  textBenefitSelected: "Benefits selected",
  textSelectUpTo:
    "Selected up to # benefits that apply to you and view their information or apply together",
  textMoreInfo: "More information on programs & apply",
  // onMoreInfoClick: PropTypes.func
};
