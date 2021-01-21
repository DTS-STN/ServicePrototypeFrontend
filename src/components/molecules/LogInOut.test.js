import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Authenticated, Primary } from "./LogInOut.stories";

it("renders Login button in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const loginText = screen.getByText(Primary.args.text);
  expect(loginText).toBeTruthy();
});

it("renders a Logout button in its primary state", () => {
  render(<Authenticated {...Primary.args} />);
  const logoutText = screen.getByText(Primary.args.text);
  expect(logoutText).toBeTruthy();
});
