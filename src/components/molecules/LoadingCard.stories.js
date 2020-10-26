import React from "react";
import { LoadingCard } from "./LoadingCard";

export default {
  title: "Components/Molecules/LoadingCard",
  component: LoadingCard,
  decorators: [
    (Story) => (
      <div className="flex w-full justify-center p-6">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <LoadingCard {...args} />;

export const Primary = Template.bind({});

export const Dark = Template.bind({});
Dark.args = {
  isDark: true,
};
