import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, Dark } from "./BenefitCardBox.stories";

it("renders BenefitCardBox in its primary state", () => {
  render(<Primary {...Primary.args}> Some Text </Primary>);
  const textElement = screen.getByText("Some Text");
  expect(textElement).toBeTruthy();
});

it("renders BenefitsCardBox in its dark state", () => {
  render(<Dark {...Dark.args}> Some Text</Dark>);
  const textElement = screen.getByText("Some Text");
  expect(textElement).toBeTruthy();
  expect(textElement.classList).toContain("bg-gray-300");
});
