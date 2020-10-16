import React from "react";
import { BenefitCardBox } from "./BenefitCardBox";

export default {
  title: "Components/Atoms/BenefitCardBox",
  component: BenefitCardBox,
  decorators: [
    (Story) => (
      <div className="flex w-full justify-center p-6">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <BenefitCardBox {...args} />;

export const Primary = Template.bind({});

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
};
