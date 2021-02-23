import React from "react";
import { JourneyCard } from "./JourneyCard";

export default {
  title: "Components/Organisms/JourneyCard",
  component: JourneyCard,
};
const Template = (args) => <JourneyCard {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
