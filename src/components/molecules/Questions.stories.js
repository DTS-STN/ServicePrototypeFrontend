import React from "react";
import { Questions } from "./Questions";

export default {
  title: "Components/Molecules/Questions",
  component: Questions,
};

const Template = (args) => <Questions {...args} />;

export const Primary = Template.bind({});

function onChangeHandler(e) {
  console.log(e);
}

function onPrevHandler(e) {}

function onNextHandler(e) {}

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

  prevNextBarId: "NavBar",
  hrefPrev: "/previous.html",
  hrefSkip: "/skip.html",
  skipText: "Skip",
  customClass: "",
  onChange: (e) => onChangeHandler(e),
  onPrevClick: () => onPrevHandler(),
  prevText: "Previous Question",
  nextText: "Next Question",
  onNextClick: () => onNextHandler(),
};
