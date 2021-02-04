import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, NotRequired } from "./Legend.stories";

it("renders 'Primary' ", () => {
  render(<Primary {...Primary.args} />);

  expect(screen.queryByText(/required/)).toBeInTheDocument();
});

it("renders 'NotRequired' ", () => {
  render(<NotRequired {...NotRequired.args} />);

  expect(screen.queryByText("required")).toBeNull();
});
