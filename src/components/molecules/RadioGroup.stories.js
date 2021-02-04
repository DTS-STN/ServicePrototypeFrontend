import React from "react";
import { RadioGroup } from "./RadioGroup";

export default {
  title: "Components/Molecules/RadioGroup",
  component: RadioGroup,
};

const Template = (args) => <RadioGroup {...args} />;

export const Primary = Template.bind({});

function onChangeHandler(e) {
  console.log(e);
}

Primary.args = {
  id: "Question1",
  legend: "Question #1.- What was your income last year ?",
  required: true,
  textRequired: "(required)",
  name: "Q1",
  options: [
    { id: "0", label: "A) Less than $30,000" },
    { id: "1", label: "B) Between $30,000 & 60,000" },
    { id: "2", label: "C) More than $60,000" },
  ],
  /**
   * Function this could update the state with the user selection, or something else.
   */
  onChange: (e) => onChangeHandler(e),
};
