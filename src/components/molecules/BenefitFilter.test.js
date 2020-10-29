import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import {
  Primary,
  Eligible,
  PotentialHelp,
  Others,
} from "./BenefitFilter.stories";

it("renders BenefitFilter in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const text = screen.getByText("Filter by");
  const eligible = screen.getByText("Eligible benefits");
  const help = screen.getByText("Potential help");
  const others = screen.getByText("Others");
  expect(text).toBeTruthy();
  expect(eligible).toBeTruthy();
  expect(help).toBeTruthy();
  expect(others).toBeTruthy();

  let buttons = screen.getAllByRole("button");
  let buttonEligible = buttons[0];
  let buttonHelp = buttons[1];
  let buttonOthers = buttons[2];
  expect(buttonEligible.getAttribute("id")).toBe("eligible");
  expect(buttonHelp.getAttribute("id")).toBe("help");
  expect(buttonOthers.getAttribute("id")).toBe("others");
});

it("renders BenefitFilter in its Eligible state", () => {
  render(<Eligible {...Eligible.args} />);
  const textElement = screen.getByText(`${PotentialHelp.args.eligibleCount}`);
  expect(textElement.classList).toContain("rounded-full");

  let buttons = screen.getAllByRole("button");
  let buttonEligible = buttons[0];
  expect(buttonEligible.classList).toContain("bg-gray-700");
});

it("renders BenefitFilter in its Potential Help state", () => {
  render(<PotentialHelp {...PotentialHelp.args} />);
  const textElement = screen.getByText(`${PotentialHelp.args.helpCount}`);
  expect(textElement.classList).toContain("rounded-full");

  let buttons = screen.getAllByRole("button");
  let buttonHelp = buttons[1];
  expect(buttonHelp.classList).toContain("bg-gray-700");
});

it("renders BenefitFilter in its Others state", () => {
  render(<Others {...Others.args} />);
  const textElement = screen.getByText(`${PotentialHelp.args.othersCount}`);
  expect(textElement.classList).toContain("rounded-full");

  let buttons = screen.getAllByRole("button");
  let buttonOthers = buttons[2];
  expect(buttonOthers.classList).toContain("bg-gray-700");
});
