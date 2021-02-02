import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./MatchMeToBenefits.stories";

it("renders Match me to benefits button in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const buttonText = screen.getByText(Primary.args.MatchMeToBenefitsText);
  expect(buttonText).toBeTruthy();
});
