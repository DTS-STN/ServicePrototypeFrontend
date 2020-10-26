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
  expect(Primary.args.eligibleCount).toEqual(15);
  expect(Primary.args.helpCount).toEqual(8);
  expect(Primary.args.othersCount).toEqual(30);
});
