import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./Login.stories";

it("renders Login in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const loginText = screen.getByText(Primary.args.text);
  expect(loginText).toBeTruthy();
});
