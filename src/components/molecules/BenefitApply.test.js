import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./BenefitApply.stories";

it("renders Primary ", () => {
  render(<Primary {...Primary.args} />);

  expect(screen.getByTestId("BenefitBox-number")).toHaveTextContent(
    `${Primary.args.number} ${Primary.args.textBenefitSelected}${Primary.args.textSelectUpTo}`
  );
});
