import React from "react";
import { BenefitCard } from "./BenefitCard";

export default {
  title: "Components/Molecules/BenefitCard",
  component: BenefitCard,
  decorators: [
    (Story) => (
      <div className="flex w-full justify-center p-6">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <BenefitCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  benefitId: "Some Benefit",
  benefitTitle: "An Awesome Benefit 🔥",
  benefitDescription:
    "This is a really cool benefit that could help a lot of people. This benefit consists of a lot of payments",
  moreInfoButtonText: "More Information",
  checkBoxAriaLabelBy: "Select the benefit",
};

export const WithTag = Template.bind({});
WithTag.args = {
  benefitId: "Some Benefit",
  benefitTitle: "An Awesome Benefit 🔥",
  benefitDescription:
    "This is a really cool benefit that could help a lot of people. This benefit consists of a lot of payments",
  benefitTag: "awesome benefits",
  moreInfoButtonText: "More Information",
  checkBoxAriaLabelBy: "Select the benefit",
};

export const Selected = Template.bind({});
Selected.args = {
  benefitId: "Some Benefit",
  benefitTitle: "An Awesome Benefit 🔥",
  benefitDescription:
    "This is a really cool benefit that could help a lot of people. This benefit consists of a lot of payments",
  benefitTag: "awesome benefits",
  moreInfoButtonText: "More Information",
  checkBoxAriaLabelBy: "Select the benefit",
  isSelected: true,
};

export const UnEligible = Template.bind({});
UnEligible.args = {
  benefitId: "Some Benefit",
  benefitTitle: "An Awesome Benefit 🔥",
  benefitDescription:
    "This is a really cool benefit that could help a lot of people. This benefit consists of a lot of payments",
  benefitTag: "awesome benefits",
  moreInfoButtonText: "More Information",
  checkBoxAriaLabelBy: "Select the benefit",
  isEligible: false,
};
