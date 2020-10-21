import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./BenefitsCounter.stories";

it("renders BenefitsCounter in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const textElement = screen.getByText(Primary.args.text);
  expect(Primary.args.counter).toEqual(80);
  expect(textElement).toBeTruthy();
});
