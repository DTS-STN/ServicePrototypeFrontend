import React from "react";
import { ResourceGrid } from "./ResoursesGrid";

export default {
  title: "Components/Organisms/ResourceGrid",
  component: ResourceGrid,
};
const Template = (args) => <ResourceGrid {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
