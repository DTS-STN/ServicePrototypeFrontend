import React from "react";
import { Questions } from "./Questions";

export default {
  title: "Components/Molecules/Questions",
  component: Questions,
};

const Template = (args) => <Questions {...args} />;

export const Primary = Template.bind({});

// This is required to pass the test
function onChangeHandler(e) {
  console.log(e);
}

Primary.args = {
  id: "Question1",
  legend: "Question #1.- What was your income last year?",
  required: true,
  textRequired: "(required)",
  name: "Q1",
  options: [
    { id: "0", label: "A) Less than $30,000" },
    { id: "1", label: "B) Between $30,000 & 60,000" },
    { id: "2", label: "C) More than $60,000" },
  ],

  prevNextBarId: "NavBar",
  hrefPrev: "/previous.html",
  hrefSkip: "/skip.html",
  skipText: "Skip",
  customClass: "",
  onChange: (e) => onChangeHandler(e),
  prevText: "Previous Question",
  nextText: "Next Question",
};
