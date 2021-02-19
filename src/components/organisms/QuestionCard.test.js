import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./QuestionCard.stories";

it("renders QuestionCard in its Primary state", () => {
  let mockfn = jest.fn();
  const wrapper = render(
    <Primary {...Primary.args} onPrevClick={mockfn} onNextClick={mockfn} />
  );

  let elem = wrapper.container.querySelector(`#${Primary.args.id}-Prev`);
  elem.click();
  expect(mockfn).toHaveBeenCalledTimes(1);

  elem = wrapper.container.querySelector(`#${Primary.args.id}-Next`);
  elem.click();
  expect(mockfn).toHaveBeenCalledTimes(2);
});
