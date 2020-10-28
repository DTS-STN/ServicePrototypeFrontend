import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./FilteredBenefitsCounter.stories";

it("renders FilteredBenefitsCounter in its primary state", () => {
  render(<Primary {...Primary.args} />);
  //expect(Primary.args.count).toBeTruthy();
});
