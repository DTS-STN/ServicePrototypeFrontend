import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Authenticated, NonAuthenticated } from "./TitleUserLogout.stories";

it("renders Authenticated title consisting of title, username and button", () => {
  render(<Authenticated {...Authenticated.args} />);

  const userName = screen.getByText(Authenticated.args.userName);
  expect(userName).toBeTruthy();

  expect(screen.getByRole("button").innerHTML).toEqual(
    Authenticated.args.logoutText
  );
});

it("renders Non Authenticated title consisting of just title", () => {
  render(<NonAuthenticated {...NonAuthenticated.args} />);

  const title = screen.getByText(NonAuthenticated.args.titleChildren).innerHTML;
  expect(title).toBeTruthy();
});
