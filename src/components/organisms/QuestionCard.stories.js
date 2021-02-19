import React from "react";
import { QuestionCard } from "./QuestionCard";

export default {
  title: "Components/Organisms/QuestionCard",
  component: QuestionCard,
};

const Template = (args) => <QuestionCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "some-id-1",
  questionTitle: "Some Title 1",
  textRequired: "Some description",
  options: [
    {
      id: "option-id-1",
      text: "Option Label 1",
    },
    {
      id: "option-id-2",
      text: "Option Label 2",
    },
    {
      id: "option-id-3",
      text: "Option Label 3",
    },
  ],
  onChange: () => {},
  prevText: "Click prev",
  disabledPrev: false,
  onPrevClick: () => {},
  nextText: "Click next",
  disabledNext: false,
  onNextClick: () => {},
};
