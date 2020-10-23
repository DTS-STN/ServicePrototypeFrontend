import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import {
  Primary,
  IncompletePage,
  IneligibleBenefits,
} from "./BenefitGrid.stories";

it("renders BenefitGrid in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const pageSelected = screen.getByText("1");

  expect(pageSelected.getAttribute("aria-pressed")).toBe("true");

  for (let i in Primary.args.benefits) {
    let benefitData = Primary.args.benefits[i];
    let benefitCard = screen.getByTestId(benefitData.benefitId);
    expect(benefitCard).toBeTruthy();
  }

  const secondPage = screen.getByText("2");
  secondPage.click();
  expect(secondPage.getAttribute("aria-pressed")).toBe("true");
  expect(pageSelected.getAttribute("aria-pressed")).toBe("false");

  expect(screen.getAllByTestId("loading-card").length).toBe(6);
});
