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
  skipFlag: true,
  hrefSkip: "/skip.html",
  skipText: "Skip",
  id: "NavBar",
  nextText: "Next",
};

export const SkipLinkRemoved = Template.bind({});

SkipLinkRemoved.args = {
  hrefPrev: "/previous.html",
  prevText: "Prev",
  skipFlag: false,
  hrefSkip: "",
  skipText: "",
  id: "NavBar",
  nextText: "Next",
};
