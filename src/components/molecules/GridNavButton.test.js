import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, MiddlePages, LastPage } from "./GridNavBar.stories";

it("renders GridNavBar in its primary state", () => {
  render(<Primary {...Primary.args} />);
  let buttons = screen.getAllByRole("button");
  let previousButton = buttons[0];
  let nextButton = buttons[buttons.length - 1];

  expect(buttons.length).toBe(7);
  expect(previousButton).toBeDisabled();
  expect(nextButton).not.toBeDisabled();
  expect(previousButton.getAttribute("aria-label")).toBe(
    Primary.args.previousPageButtonAriaLabel
  );
  expect(nextButton.getAttribute("aria-label")).toBe(
    Primary.args.nextPageButtonAriaLabel
  );
});

it("renders GridNavBar in its middle pages state", () => {
  render(<MiddlePages {...MiddlePages.args} />);

  let buttons = screen.getAllByRole("button");
  let previousButton = buttons[0];
  let nextButton = buttons[buttons.length - 1];

  expect(buttons.length).toBe(7);
  expect(previousButton).not.toBeDisabled();
  expect(nextButton).not.toBeDisabled();
  expect(previousButton.getAttribute("aria-label")).toBe(
    Primary.args.previousPageButtonAriaLabel
  );
  expect(nextButton.getAttribute("aria-label")).toBe(
    Primary.args.nextPageButtonAriaLabel
  );
});

it("renders GridNavBar in its end pages state", () => {
  render(<LastPage {...LastPage.args} />);

  let buttons = screen.getAllByRole("button");
  let previousButton = buttons[0];
  let nextButton = buttons[buttons.length - 1];

  expect(buttons.length).toBe(7);
  expect(previousButton).not.toBeDisabled();
  expect(nextButton).toBeDisabled();
  expect(previousButton.getAttribute("aria-label")).toBe(
    Primary.args.previousPageButtonAriaLabel
  );
  expect(nextButton.getAttribute("aria-label")).toBe(
    Primary.args.nextPageButtonAriaLabel
  );
});
