import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, Next, Disabled } from "./GridPageNavButton.stories";

it("renders GridPageNavButton in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const buttonElement = screen.getByRole("button");
  const icon = buttonElement.querySelector("span");
  expect(buttonElement).toBeTruthy();
  expect(icon).toBeTruthy();
  expect(buttonElement.getAttribute("aria-label")).toBe(Primary.args.ariaLabel);
  expect(icon.classList).toContain("icon-angle-left");
});

it("renders GridPageNavButton in its next state", () => {
  const { container } = render(<Next {...Next.args} />);
  const buttonElement = screen.getByRole("button");
  const icon = buttonElement.querySelector("span");
  expect(buttonElement).toBeTruthy();
  expect(icon).toBeTruthy();
  expect(buttonElement.getAttribute("aria-label")).toBe(Next.args.ariaLabel);
  expect(icon.classList).toContain("icon-angle-right");
});

it("renders GridPageNavButton in its disabled state", () => {
  const { container } = render(<Disabled {...Disabled.args} />);
  const buttonElement = screen.getByRole("button");
  const icon = buttonElement.querySelector("span");
  expect(buttonElement).toBeTruthy();
  expect(icon).toBeTruthy();
  expect(buttonElement.getAttribute("aria-label")).toBe(
    Disabled.args.ariaLabel
  );
  expect(icon.classList).toContain("text-gray-500");
});
