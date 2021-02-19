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

  valueTitle1: "Base Rate",
  valueTitle2: "Provincial Amount",
  valueTitle3: "Total",

  title1: "Less than $30,000",
  title2: "Between $30,000 & $60,000",
  title3: "More than $60,000",

  value1: "$500",
  value2: "$100",
  value3: "$600",
  value4: "$400",
  value5: "$200",
  value6: "$600",
  value7: "$400",
  value8: "$200",
  value9: "$600",
};
