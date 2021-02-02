import React from "react";
import { Questions } from "./Questions";

export default {
  title: "Components/Molecules/Questions",
  component: Questions,
};

const Template = (args) => <Questions {...args} />;

export const Primary = Template.bind({});

function onChangeHandler(e) {}

Primary.args = {
  legend: "Question #1.- What was your income last year?",
  name: "Q1",
  radioGroupId: "Question1",
  required: true,
  textRequired: "(required)",
  answers: [
    { id: "0", value: "A", label: "A) Less than $30,000" },
    { id: "1", value: "B", label: "B) Between $30,000 & 60,000" },
    { id: "2", value: "C", label: "C) More than $60,000" },
  ],
  onChange: () => onChangeHandler(), // Function this could update the state with the user selection, or something else.
  //--
  prevNextBarId: "NavBar",
  hrefPrev: "/previous.html",
  prevText: "Previous",
  hrefSkip: "/skip.html",
  skipText: "Skip",
  customClass: "",
  nextText: "Next",
};
