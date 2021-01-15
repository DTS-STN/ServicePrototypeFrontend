import React from "react";
import { BenefitGrid } from "./BenefitGrid";

export default {
  title: "Components/Organisms/BenefitGrid",
  component: BenefitGrid,
};

const Template = (args) => <BenefitGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  benefits: [
    {
      benefitId: "benefit-1",
      benefitTitle: "Benefit 1 Card",
      benefitDescription:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: true,
    },
    {
      benefitId: "benefit-2",
      benefitTitle: "Benefit 2 Card",
      benefitDescription:
        "This is a description for the two benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: true,
    },
    {
      benefitId: "benefit-3",
      benefitTitle: "Benefit 3 Card",
      benefitDescription:
        "This is a description for the three benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: true,
    },
    {
      benefitId: "benefit-4",
      benefitTitle: "Benefit 4 Card",
      benefitDescription:
        "This is a description for the four benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: true,
    },
    {
      benefitId: "benefit-5",
      benefitTitle: "Benefit 5 Card",
      benefitDescription:
        "This is a description for the five benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: true,
    },
    {
      benefitId: "benefit-6",
      benefitTitle: "Benefit 6 Card",
      benefitDescription:
        "This is a description for the six benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: true,
    },
  ],
  benefitMoreInfoButtonText: "More Information",
  numberOfRows: 2,
  numberOfPages: 9,
  nextPageButtonAriaLabel: "navigate to the next page",
  previousPageButtonAriaLabel: "navigate to the previous page",
};

export const IncompletePage = Template.bind({});
IncompletePage.args = {
  benefits: [
    {
      benefitId: "benefit-1",
      benefitTitle: "Benefit 1 Card",
      benefitDescription:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: true,
    },
    {
      benefitId: "benefit-2",
      benefitTitle: "Benefit 2 Card",
      benefitDescription:
        "This is a description for the two benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: true,
    },
    {
      benefitId: "benefit-3",
      benefitTitle: "Benefit 3 Card",
      benefitDescription:
        "This is a description for the three benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: true,
    },
    {
      benefitId: "benefit-4",
      benefitTitle: "Benefit 4 Card",
      benefitDescription:
        "This is a description for the four benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: true,
    },
    {
      benefitId: "benefit-5",
      benefitTitle: "Benefit 5 Card",
      benefitDescription:
        "This is a description for the five benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: true,
    },
    {
      benefitId: "benefit-6",
      benefitTitle: "Benefit 6 Card",
      benefitDescription:
        "This is a description for the six benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: true,
    },
    {
      benefitId: "benefit-7",
      benefitTitle: "Benefit 7 Card",
      benefitDescription:
        "This is a description for the six benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: true,
    },
  ],
  benefitMoreInfoButtonText: "More Information",
  numberOfRows: 2,
  numberOfPages: 9,
  nextPageButtonAriaLabel: "navigate to the next page",
  previousPageButtonAriaLabel: "navigate to the previous page",
};

export const IneligibleBenefits = Template.bind({});
IneligibleBenefits.args = {
  benefits: [
    {
      benefitId: "benefit-1",
      benefitTitle: "Benefit 1 Card",
      benefitDescription:
        "This is a description for the first benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: false,
    },
    {
      benefitId: "benefit-2",
      benefitTitle: "Benefit 2 Card",
      benefitDescription:
        "This is a description for the two benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: false,
    },
    {
      benefitId: "benefit-3",
      benefitTitle: "Benefit 3 Card",
      benefitDescription:
        "This is a description for the three benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: false,
    },
    {
      benefitId: "benefit-4",
      benefitTitle: "Benefit 4 Card",
      benefitDescription:
        "This is a description for the four benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: false,
    },
    {
      benefitId: "benefit-5",
      benefitTitle: "Benefit 5 Card",
      benefitDescription:
        "This is a description for the five benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: false,
    },
    {
      benefitId: "benefit-6",
      benefitTitle: "Benefit 6 Card",
      benefitDescription:
        "This is a description for the six benefit card " +
        "about the benefit that this card represents.",
      isSelected: false,
      isEligible: false,
    },
  ],
  benefitMoreInfoButtonText: "More Information",
  isNonEligibleGrid: true,
  numberOfRows: 1,
  numberOfPages: 9,
  nextPageButtonAriaLabel: "navigate to the next page",
  previousPageButtonAriaLabel: "navigate to the previous page",
};
