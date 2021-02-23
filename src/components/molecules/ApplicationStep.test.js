import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./ApplicationStep.stories";

it("renders Primary ", () => {
  render(<Primary {...Primary.args} />);
  const numberParagraphElement = screen.getByText(Primary.args.stepNumber);
  const statusParagraphElement = screen.getByText(Primary.args.stepStatus);
  const descriptionParagraphElement = screen.getByText(
    Primary.args.stepDescription
  );
  const dateParagraphElement = screen.getByText(Primary.args.date);

  expect(numberParagraphElement).toBeTruthy();
  expect(statusParagraphElement).toBeTruthy();
  expect(descriptionParagraphElement).toBeTruthy();
  expect(dateParagraphElement).toBeTruthy();
});
