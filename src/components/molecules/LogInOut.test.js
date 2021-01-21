import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Authenticated, Primary } from "./LogInOut.stories";

it("renders Login button in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const loginText = screen.getByText(Primary.args.loginText);
  expect(loginText).toBeTruthy();
});

it("renders a Logout button an username ", () => {
  render(<Authenticated {...Authenticated.args} />);
  const logoutText = screen.getByText(Authenticated.args.logoutText);
  expect(logoutText).toBeTruthy();
  const userName = screen.getByText(Authenticated.args.userName);
  expect(userName).toBeTruthy();
});
