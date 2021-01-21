import React from "react";
import { Header } from "./Header";

export default {
  title: "Components/Organisms/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headerCanadaCaAltText: "Canada.ca logo",
  language: "French",
  siteTitle: "Benefits Finder",
  loginText: "Log In",
  logoutText: "Log Out",
};

export const Authenticated = Template.bind({});
Authenticated.args = {
  headerCanadaCaAltText: "Canada.ca logo",
  language: "French",
  siteTitle: "Benefits Finder",
  loginText: "Log In",
  logoutText: "Log Out",
  isAuthenticated: true,
  userName: "Linda Smith",
};
