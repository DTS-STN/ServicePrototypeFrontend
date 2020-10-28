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
  const eligibleCount = screen.getByText("15");
  const helpCount = screen.getByText("8");
  const othersCount = screen.getByText("30");
  expect(text).toBeTruthy();
  expect(eligible).toBeTruthy();
  expect(help).toBeTruthy();
  expect(others).toBeTruthy();
  expect(eligibleCount).toBeTruthy();
  expect(helpCount).toBeTruthy();
  expect(othersCount).toBeTruthy();
  expect(Primary.args.isSelectedEligible).toBe(false);
  expect(Primary.args.isSelectedHelp).toBe(false);
  expect(Primary.args.isSelectedOthers).toBe(false);
});

it("renders BenefitFilter in its Eligible state", () => {
  render(<Eligible {...Eligible.args} />);
  expect(Eligible.args.isSelectedEligible).toBe(true);
  expect(Eligible.args.isSelectedHelp).toBe(false);
  expect(Eligible.args.isSelectedOthers).toBe(false);
});

it("renders BenefitFilter in its Potential Help state", () => {
  render(<PotentialHelp {...PotentialHelp.args} />);
  expect(PotentialHelp.args.isSelectedEligible).toBe(false);
  expect(PotentialHelp.args.isSelectedHelp).toBe(true);
  expect(PotentialHelp.args.isSelectedOthers).toBe(false);
});

it("renders BenefitFilter in its Others state", () => {
  render(<Others {...Others.args} />);
  expect(Others.args.isSelectedEligible).toBe(false);
  expect(Others.args.isSelectedHelp).toBe(false);
  expect(Others.args.isSelectedOthers).toBe(true);
});
