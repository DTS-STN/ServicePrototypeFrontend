import React from "react";
import { PrevNextBar } from "./PrevNextBar";

export default {
  title: "Components/Molecules/PrevNextBar",
  component: PrevNextBar,
};

const Template = (args) => <PrevNextBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  hrefPrev: "/previous.html",
  prevText: "Prev",
  hrefSkip: "/skip.html",
  skipText: "Skip",
  id: "NavBar",
  nextText: "Next",
};
