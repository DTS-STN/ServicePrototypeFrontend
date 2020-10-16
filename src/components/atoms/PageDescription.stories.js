import React from "react";
import { PageDescription } from "./PageDescription";

export default {
  title: "Components/Atoms/PageDescription",
  component: PageDescription,
};

const Template = (args) => <PageDescription {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "some description",
};
