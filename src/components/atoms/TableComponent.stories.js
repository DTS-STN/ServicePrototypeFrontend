import React from "react";
import { TableComponent } from "./TableComponent";

export default {
  title: "Components/Atoms/TableComponent",
  component: TableComponent,
};

const Template = (args) => <TableComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Estimated dollar Amount per week",
  children1: "Less Than $30,000",
  children2: "$200",
  children3: "Between $30,000",
  children4: "$500",
  children5: "More Than $60,000",
  children6: "$501",
};
