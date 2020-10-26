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

it("renders BenefitGrid in its incomplete page state", () => {
  render(<IncompletePage {...IncompletePage.args} />);
  const pageSelected = screen.getByText("1");
  expect(pageSelected.getAttribute("aria-pressed")).toBe("true");

  for (let i = 0; i < 6; i++) {
    let benefitData = IncompletePage.args.benefits[i];
    let benefitCard = screen.getByTestId(benefitData.benefitId);
    expect(benefitCard).toBeTruthy();
  }

  const secondPage = screen.getByText("2");
  secondPage.click();
  expect(secondPage.getAttribute("aria-pressed")).toBe("true");
  expect(pageSelected.getAttribute("aria-pressed")).toBe("false");

  let lastBenefitCard = screen.getByTestId(
    IncompletePage.args.benefits[6].benefitId
  );
  expect(lastBenefitCard).toBeTruthy();

  const thirdPage = screen.getByText("3");
  thirdPage.click();
  expect(thirdPage.getAttribute("aria-pressed")).toBe("true");
  expect(secondPage.getAttribute("aria-pressed")).toBe("false");
  expect(pageSelected.getAttribute("aria-pressed")).toBe("false");

  expect(screen.getAllByTestId("loading-card").length).toBe(6);
});

it("renders BenefitGrid in its inelegible benefits state", () => {
  render(<IneligibleBenefits {...IneligibleBenefits.args} />);
  const pageSelected = screen.getByText("1");
  expect(pageSelected.getAttribute("aria-pressed")).toBe("true");

  for (let i = 0; i < 3; i++) {
    let benefitData = IneligibleBenefits.args.benefits[i];
    let benefitCard = screen.getByTestId(benefitData.benefitId);
    expect(benefitCard).toBeTruthy();
  }

  const secondPage = screen.getByText("2");
  secondPage.click();
  expect(secondPage.getAttribute("aria-pressed")).toBe("true");
  expect(pageSelected.getAttribute("aria-pressed")).toBe("false");

  for (let i = 3; i < 6; i++) {
    let benefitData = IneligibleBenefits.args.benefits[i];
    let benefitCard = screen.getByTestId(benefitData.benefitId);
    expect(benefitCard).toBeTruthy();
  }

  const thirdPage = screen.getByText("3");
  thirdPage.click();
  expect(thirdPage.getAttribute("aria-pressed")).toBe("true");
  expect(secondPage.getAttribute("aria-pressed")).toBe("false");
  expect(pageSelected.getAttribute("aria-pressed")).toBe("false");

  const loadingCards = screen.getAllByTestId("loading-card").length;
  expect(loadingCards).toBe(3);

  for (let i in loadingCards) {
    expect(loadingCards[i].classList).toContain("bg-gray-300");
  }
});
