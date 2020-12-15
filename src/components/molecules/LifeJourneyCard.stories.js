import React from "react";
import { LifeJourneyCard } from "./LifeJourneyCard";

export default {
  title: "Components/Molecules/LifeJourneyCard",
  component: LifeJourneyCard,
};

const Template = (args) => <LifeJourneyCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  lifeJourneyId: "some-id",
  lifeJourneyTitle: "Some Title",
  lifeJourneyDescription:
    "Some description about a particular life journey. It is long so it will be truncated",
};
