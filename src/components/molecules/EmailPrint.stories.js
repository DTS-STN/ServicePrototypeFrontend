import React from "react";
import { EmailPrint } from "./EmailPrint";

export default {
  title: "Components/molecules/EmailPrint",
  component: EmailPrint,
};

const Template = (args) => <EmailPrint {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  emailText: "Email",
  printText: "print",
};
