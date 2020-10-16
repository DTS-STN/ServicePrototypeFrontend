import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, Selected, WithTag, UnEligible } from "./BenefitCard.stories";

it("renders BenefitCard in its primary state", () => {
  render(<Primary {...Primary.args} />);

  const checkBoxElement = screen.getByRole("checkbox");
  const paragraphElement = screen.getByText(Primary.args.benefitDescription);
  const titleElement = screen.getByText(Primary.args.benefitTitle);
  const buttonComponent = screen.getByRole("button");

  expect(checkBoxElement.checked).toBeFalsy();
  expect(checkBoxElement.getAttribute("aria-label")).toBe(
    Primary.args.checkBoxAriaLabelBy
  );
  expect(paragraphElement).toBeTruthy();
  expect(titleElement).toBeTruthy();
  expect(buttonComponent).toHaveTextContent(Primary.args.moreInfoButtonText);
});

it("renders BenefitCard in its selected state", () => {
  render(<Selected {...Selected.args} />);

  const checkBoxElement = screen.getByRole("checkbox");
  const paragraphElement = screen.getByText(Selected.args.benefitDescription);
  const titleElement = screen.getByText(Selected.args.benefitTitle);
  const buttonComponent = screen.getByRole("button");

  expect(checkBoxElement.checked).toBeTruthy();
  expect(checkBoxElement.getAttribute("aria-label")).toBe(
    Selected.args.checkBoxAriaLabelBy
  );
  expect(paragraphElement).toBeTruthy();
  expect(titleElement).toBeTruthy();
  expect(buttonComponent).toHaveTextContent(Selected.args.moreInfoButtonText);
});

it("renders BenefitCard with tag", () => {
  render(<WithTag {...WithTag.args} />);

  const checkBoxElement = screen.getByRole("checkbox");
  const paragraphElement = screen.getByText(WithTag.args.benefitDescription);
  const titleElement = screen.getByText(WithTag.args.benefitTitle);
  const tagElement = screen.getByText(WithTag.args.benefitTag);
  const buttonComponent = screen.getByRole("button");

  expect(checkBoxElement.checked).toBeFalsy();
  expect(checkBoxElement.getAttribute("aria-label")).toBe(
    WithTag.args.checkBoxAriaLabelBy
  );
  expect(paragraphElement).toBeTruthy();
  expect(titleElement).toBeTruthy();
  expect(tagElement).toBeTruthy();
  expect(buttonComponent).toHaveTextContent(WithTag.args.moreInfoButtonText);
});

it("renders non eligible benefits cards", () => {
  const { container } = render(<UnEligible {...UnEligible.args} />);

  const boxElement = container.querySelector("div");
  const paragraphElement = screen.getByText(UnEligible.args.benefitDescription);
  const titleElement = screen.getByText(UnEligible.args.benefitTitle);
  const buttonComponent = screen.getByRole("button");

  expect(paragraphElement).toBeTruthy();
  expect(titleElement).toBeTruthy();
  expect(buttonComponent).toHaveTextContent(UnEligible.args.moreInfoButtonText);
  expect(boxElement.classList).toContain("bg-gray-300");
});
