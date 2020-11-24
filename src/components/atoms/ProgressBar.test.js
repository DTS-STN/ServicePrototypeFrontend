import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { FiftyPercent, EigthyPercent } from "./ProgressBar.stories";

it("renders FiftyPercent ", () => {
  render(<FiftyPercent {...FiftyPercent.args} />);
  expect(screen.getByTestId(FiftyPercent.args.id)).toHaveStyle(
    `width: ${FiftyPercent.args.percentage}%`
  );
});

it("renders Eigthy Percent progress", () => {
  render(<EigthyPercent {...EigthyPercent.args} />);
  expect(screen.getByTestId(EigthyPercent.args.id)).toHaveStyle(
    `width: ${EigthyPercent.args.percentage}%`
  );
});
