import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./FilteredBenefitsCounter.stories";

it("renders FilteredBenefitsCounter in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const count = screen.getByText("10");
  expect(count).toBeTruthy();
});
