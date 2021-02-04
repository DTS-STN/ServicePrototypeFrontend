import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./CasesList.stories";

it("renders Cases List in its primary state", () => {
  render(<Primary {...Primary.args} />);

  for (let i in Primary.args.cases) {
    let caseData = Primary.args.cases[i];
    let caseCard = screen.getByTestId(caseData.caseReferenceNumber);
    expect(caseCard).toBeTruthy();
  }
});
