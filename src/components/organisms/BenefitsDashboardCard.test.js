import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import {
  Primary,
  NoBenefits,
  NoFetch,
  FailedFetch,
} from "./BenefitsDashboardCard.stories";

it("renders Primary ", () => {
  render(<Primary {...Primary.args} />);
  for (let i in Primary.args.foundCases) {
    for (let j in Primary.args.benefitsData) {
      let usercase = Primary.args.foundCases[i];
      let benefit = Primary.args.benefitsData[j].benefitTitle;
      let newTitle = benefit.replace(" EI Benefit", "");
      if (newTitle === usercase.caseBenefitType) {
        let benefitCard = screen.getByText(benefit);
        expect(benefitCard).toBeTruthy();
      }
    }
  }
});
it("renders NoBenefits ", () => {
  const wrapper = render(<NoBenefits {...NoBenefits.args} />);
  const paragraphElement = wrapper.container.querySelector("#length-zero");
  expect(paragraphElement).toBeTruthy();
});
it("renders NoFetch ", () => {
  const wrapper = render(<NoFetch {...NoFetch.args} />);
  const paragraphElement = wrapper.container.querySelector(
    "#currently-fetching"
  );
  expect(paragraphElement).toBeTruthy();
});
it("renders FailedFetch", () => {
  const wrapper = render(<FailedFetch {...FailedFetch.args} />);
  const paragraphElement = wrapper.container.querySelector("#failed-fetch");
  expect(paragraphElement).toBeTruthy();
});
