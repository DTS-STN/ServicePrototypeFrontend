import React from "react";
import { ApplicationStatusCard } from "./ApplicationStatusCard";

export default {
  title: "Components/Organisms/ApplicationStatusCard",
  component: ApplicationStatusCard,
};
const Template = (args) => <ApplicationStatusCard {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
