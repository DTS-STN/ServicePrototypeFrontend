import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./JourneyCard.stories";

it("renders Primary ", () => {
  const wrapper = render(<Primary {...Primary.args} />);

  const imageElement = wrapper.container.querySelector("img");
  const titleParagraphElement = wrapper.container.querySelector(
    "#journey-status"
  );
  const descriptionParagraphElement = wrapper.container.querySelector(
    "#journey-description"
  );
  const button = wrapper.container.querySelector("button");

  expect(imageElement).toBeTruthy();
  expect(titleParagraphElement).toBeTruthy();
  expect(descriptionParagraphElement).toBeTruthy();
  expect(button).toBeTruthy();
  expect(button).toHaveTextContent("View Journey");
});
