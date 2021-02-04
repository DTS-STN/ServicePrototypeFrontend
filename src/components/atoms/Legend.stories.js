import React from "react";
import { Legend } from "./Legend";

export default {
  title: "Components/Atoms/Legend",
  component: Legend,
};

const Template = (args) => <Legend {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  legend: "Question #1.- What was your income last year ?",
  id: "Question1",
  required: true,
  strRequired: "(required)",
  className: "",
};

export const NotRequired = Template.bind({});

NotRequired.args = {
  legend: "Title of the form, without a required flag",
  id: "legend1",
  required: false,
  strRequired: "",
  className: "",
};
