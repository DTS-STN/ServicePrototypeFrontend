import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./TableComponent.stories";

it("renders Title in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const textElement = screen.getByText("Estimated dollar Amount per week");
  expect(textElement).toBeTruthy();
});

it("renders children in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const children1 = screen.getByText("Less Than $30,000");
  expect(children1).toBeTruthy();
});

it("renders children2 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const children2 = screen.getByText("$200");
  expect(children2).toBeTruthy();
});

it("renders children3 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const children3 = screen.getByText("Between $30,000");
  expect(children3).toBeTruthy();
});

it("renders children4 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const children4 = screen.getByText("$500");
  expect(children4).toBeTruthy();
});

it("renders children5 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const children5 = screen.getByText("More Than $60,000");
  expect(children5).toBeTruthy();
});

it("renders children6 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const children6 = screen.getByText("$501");
  expect(children6).toBeTruthy();
});
