import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, Authenticated } from "./ProfileCard.stories";

it("renders Primary ", () => {
  render(<Primary {...Primary.args} />);
  const paragraphElement = screen.getByText("Welcome");
  const buttonComponent = screen.getByRole("button");

  expect(paragraphElement).toBeTruthy();
  expect(buttonComponent).toHaveTextContent("View Dashboard");
});
it("renders Authenticated ", () => {
  render(<Authenticated {...Authenticated.args} />);
  const paragraphElement = screen.getByText(Authenticated.args.userName);
  expect(paragraphElement).toBeTruthy();
});
