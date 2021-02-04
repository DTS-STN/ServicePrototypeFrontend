import React from "react";
import { Radio } from "./Radio";

export default {
  title: "Components/Atoms/Radio",
  component: Radio,
};

const Template = (args) => <Radio {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: "RadioId",
  name: "RadioName",
  value: "RadioValue",
  label: "Radio Label string that explains what is this for",
  // onChange:,
};
