import React from "react";
import { ResourceCardArticle } from "./ResourceCardArticle";

export default {
  title: "Components/Molecules/ResourceCardArticle",
  component: ResourceCardArticle,
};

const Template = (args) => <ResourceCardArticle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  articleImage: "some-image-src",
  title: "some-title-1",
  content: "some-content-1",
};
