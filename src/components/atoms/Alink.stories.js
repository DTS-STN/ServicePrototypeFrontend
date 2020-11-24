import React from "react";
import { Alink } from "./Alink";

export default {
  title: "Components/Atoms/Alink",
  component: Alink,
};

const Template = (args) => <Alink {...args} />;

export const PlainLinkExample = Template.bind({});
export const LinkWithCustomCSS = Template.bind({});

PlainLinkExample.args = {
  children: "Link Example, it could be for example = Previous",
  href: "/home.html",
  id: "Link1",
};

LinkWithCustomCSS.args = {
  children: "Link with custom CSS",
  href: "/home.html",
  customClass: "bg-red-900 text-white font-medium no-underline",
  id: "Link2",
};
