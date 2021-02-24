import React from "react";
import { AppointmentTable } from "./AppointmentTable";

export default {
  title: "Components/Molecules/AppointmentTable",
  component: AppointmentTable,
};

const Template = (args) => <AppointmentTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
