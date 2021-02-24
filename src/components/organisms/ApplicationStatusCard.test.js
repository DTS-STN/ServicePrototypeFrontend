import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./ApplicationStatusCard.stories";

it("renders Primary ", () => {
  const wrapper = render(<Primary {...Primary.args} />);

  const stepsContainer = wrapper.container.querySelector("#step-container");
  const titleParagraphElement = wrapper.container.querySelector("#title");
  const timeParagraphElement = wrapper.container.querySelector("#time");
  const button = wrapper.container.querySelector("button");

  expect(stepsContainer).toBeTruthy();
  expect(titleParagraphElement).toBeTruthy();
  expect(timeParagraphElement).toBeTruthy();
  expect(button).toBeTruthy();
});
