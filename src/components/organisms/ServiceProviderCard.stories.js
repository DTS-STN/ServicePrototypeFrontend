import React from "react";
import { ServiceProvidersCard } from "./ServiceProvidersCard";

export default {
  title: "Components/Organisms/ServiceProvidersCard",
  component: ServiceProvidersCard,
};
const Template = (args) => <ServiceProvidersCard {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
