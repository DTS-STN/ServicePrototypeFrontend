import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { FiftyPercent, EigthyPercent } from "./ProgressBar.stories";

it("renders FiftyPercent ", () => {
  render(<FiftyPercent {...FiftyPercent.args} />);
});

it("renders Eigthy Percent progress", () => {
  render(<EigthyPercent {...EigthyPercent.args} />);
});
