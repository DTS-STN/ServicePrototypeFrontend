import React from "react";
import { ResourceGrid } from "./ResourseGrid";

export default {
  title: "Components/Organisms/ResourceGrid",
  component: ResourceGrid,
};
const Template = (args) => <ResourceGrid {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
