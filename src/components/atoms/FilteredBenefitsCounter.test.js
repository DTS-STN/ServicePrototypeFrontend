import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./BenefitCardBox.stories";

it("renders FilteredBenefitsCounter in its primary state", () => {
  render(<Primary {...Primary.args} />);
  //expect(Primary.args.count).toBeTruthy();
});
