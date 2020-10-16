import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, Checked } from "./CheckBox.stories";
import { CheckBox } from "./CheckBox";

it("renders CheckBox in its primary state", () => {
  const { container } = render(<Primary {...Primary.args} />);
  const checkBoxElement = screen.getByRole("checkbox");
  const svgElement = container.getElementsByTagName("svg")[0];
  expect(checkBoxElement.checked).toBeFalsy();
  expect(svgElement.classList).toContain("hidden");
  expect(svgElement.classList).not.toContain("block");
});

it("renders CheckBox in its checked state", () => {
  const { container } = render(<Checked {...Checked.args} />);
  const checkBoxElement = screen.getByRole("checkbox");
  const svgElement = container.getElementsByTagName("svg")[0];
  expect(checkBoxElement.checked).toBeTruthy();
  expect(svgElement.classList).toContain("block");
  expect(svgElement.classList).not.toContain("hidden");
});
