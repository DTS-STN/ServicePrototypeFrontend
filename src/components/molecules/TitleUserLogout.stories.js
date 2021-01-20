import React from "react";
import { Login } from "./Login";
import { TitleUserLogout } from "./TitleUserLogout";

export default {
  title: "Components/molecules/TitleUserLogout",
  component: Login,
};

const Template = (args) => <TitleUserLogout {...args} />;

export const Authenticated = Template.bind({});

Authenticated.args = {
  titleChildren: "Welcome to Service Canada",
  titleDataCy: "titleDatacy",
  isAuthenticated: true,
  userName: "Sandra Bullock",
  logoutText: "Logout",
  // onClick:
};

export const NonAuthenticated = Template.bind({});

NonAuthenticated.args = {
  titleChildren: "Welcome to Service Canada",
  titleDataCy: "titleDatacy",
  isAuthenticated: false,
  userName: "Sandra Bullock",
  logoutText: "Logout",
  // onClick:
};
