import React from "react";
import { LogInOut } from "./LogInOut";

export default {
  title: "Components/molecules/LogInOut",
  component: LogInOut,
};

const Template = (args) => <LogInOut {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "Login",
  isAuthenticated: false,
  // onLogin:
};

export const Authenticated = Template.bind({});

Authenticated.args = {
  isAuthenticated: true,
  logoutText: "Logout",
  // onLogout:
};
