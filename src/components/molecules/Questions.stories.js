import React from "react";
import { Questions } from "./Questions";

export default {
  title: "Components/Molecules/Questions",
  component: Questions,
};

const Template = (args) => <Questions {...args} />;

export const Primary = Template.bind({});

function onChangeHandler(e) {}

function onPrevHandler(e) {}

function onNextHandler(e) {}

Primary.args = {
  legend: "Question #1.- What was your income last year?",
  name: "Q1",
  id: "Question1",
  required: true,
  textRequired: "(required)",
  options: [
    { id: "0", value: "A", label: "A) Less than $30,000" },
    { id: "1", value: "B", label: "B) Between $30,000 & 60,000" },
    { id: "2", value: "C", label: "C) More than $60,000" },
  ],
  onChange: () => onChangeHandler(),
  onPrevClick: () => onPrevHandler(),
  prevText: "Previous Question",
  nextText: "Next Question",
  onNextClick: () => onNextHandler(),
};
