import React from "react";
import { PrevNext } from "./PrevNext";

export default {
  title: "Components/Molecules/PrevNext",
  component: PrevNext,
};

const Template = (args) => <PrevNext {...args} />;

export const Primary = Template.bind({});

function onPrevHandler(e) {}

function onNextHandler(e) {}

Primary.args = {
  onPrevClick: () => onPrevHandler(),
  prevText: "Previous Question",
  id: "PrevNext",
  nextText: "Next Question",
  onNextClick: () => onNextHandler(),
};
