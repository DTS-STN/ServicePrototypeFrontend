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
  expect(text).toBeTruthy();
  expect(eligible).toBeTruthy();
  expect(help).toBeTruthy();
  expect(others).toBeTruthy();
  expect(Primary.args.eligibleCount).toBeTruthy();
  expect(Primary.args.helpCount).toBeTruthy();
  expect(Primary.args.othersCount).toBeTruthy();
});
