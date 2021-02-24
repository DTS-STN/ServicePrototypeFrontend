import React from "react";
import { AppointmentCard } from "./AppointmentCard";

export default {
  title: "Components/Organisms/AppointmentCard",
  component: AppointmentCard,
};
const Template = (args) => <AppointmentCard {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
