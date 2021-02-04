import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, StatusClosed } from "./CaseCard.stories";

it("renders Case Card in its primary state", () => {
  render(<Primary {...Primary.args} />);

  const caseReferenceNumber = screen.getByText(
    Primary.args.caseReferenceNumber
  );
  const caseRefLabel = screen.getByText(Primary.args.caseReferenceNumberLabel);
  const caseBenefitTypeLabel = screen.getByText(
    Primary.args.caseBenefitTypeLabel
  );
  const caseStatus = screen.getByText(Primary.args.caseStatus);
  expect(caseReferenceNumber).toBeTruthy();
  expect(caseRefLabel).toBeTruthy();
  expect(caseBenefitTypeLabel).toBeTruthy();
  expect(caseStatus).toBeTruthy();
});

it("renders status button in different color", () => {
  render(<StatusClosed {...StatusClosed.args} />);
  const caseStatus = screen.getByText(StatusClosed.args.caseStatus);
  const caseColor = caseStatus.style.backgroundColor;
  expect(caseColor).toEqual("rgb(109, 116, 134)");
});
