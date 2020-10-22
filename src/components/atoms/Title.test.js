import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./Title.stories";

it("renders Title in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const textElement = screen.getByText("Title Text");
  expect(textElement).toBeTruthy();
});
