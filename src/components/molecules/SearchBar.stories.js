import React from "react";
import { SearchBar } from "./SearchBar";

export default {
  title: "Components/molecules/SearchBar",
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "How can we help you?",
  buttonText: "Search all",
  placeholder: "Search...",
  icon: "icon-search",
};
