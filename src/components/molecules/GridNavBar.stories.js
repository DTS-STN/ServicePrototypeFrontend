import React from "react";
import { GridNavBar } from "./GridNavBar";

export default {
  title: "Components/Molecules/GridNavBar",
  component: GridNavBar,
};

const Template = (args) => <GridNavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  currentPage: 1,
  numberOfPages: 9,
  nextPageButtonAriaLabel: "navigate to the next page",
  previousPageButtonAriaLabel: "navigate to the previous page",
};

export const MiddlePages = Template.bind({});
MiddlePages.args = {
  currentPage: 5,
  numberOfPages: 9,
  nextPageButtonAriaLabel: "navigate to the next page",
  previousPageButtonAriaLabel: "navigate to the previous page",
};

export const LastPage = Template.bind({});
LastPage.args = {
  currentPage: 9,
  numberOfPages: 9,
  nextPageButtonAriaLabel: "navigate to the next page",
  previousPageButtonAriaLabel: "navigate to the previous page",
};
