import React from "react";
import { RadioGroup } from "./RadioGroup";

export default {
  title: "Components/Molecules/RadioGroup",
  component: RadioGroup,
};

const Template = (args) => <RadioGroup {...args} />;

export const Primary = Template.bind({});

function onChangeHandler(e) {}

Primary.args = {
  legend: "Question #1.- What was your income last year ?",
  name: "Q1",
  id: "Question1",
  required: true,
  textRequired: "(required)",
  options: [
    { id: "0", value: "A", label: "A) Less than $30,000" },
    { id: "1", value: "B", label: "B) Between $30,000 & 60,000" },
    { id: "2", value: "C", label: "C) More than $60,000" },
  ],
  /**
   * Function this could update the state with the user selection, or something else.
   */
  onChange: () => onChangeHandler(),
};
