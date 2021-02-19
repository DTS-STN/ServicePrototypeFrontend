import React from "react";
import { ProfileCard } from "./ProfileCard";

export default {
  title: "Components/Organisms/ProfileCard",
  component: ProfileCard,
};

const Template = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
export const Authenticated = Template.bind({});
Primary.args = {
  isAuthenticated: false,
  userName: "",
  loginButtonClick: () => {},
};
Authenticated.args = {
  isAuthenticated: true,
  userName: "some-username",
  loginButtonClick: () => {},
};
