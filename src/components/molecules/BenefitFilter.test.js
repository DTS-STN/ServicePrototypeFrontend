import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./BenefitFilter.stories";

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
});
