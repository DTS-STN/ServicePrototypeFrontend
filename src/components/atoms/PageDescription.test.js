import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./PageDescription.stories";

it("renders PageDescription in its primary state", () => {
  render(<Primary {...Primary.args}> some description </Primary>);
  const textElement = screen.getByText("some description");
  expect(textElement).toBeTruthy();
});
