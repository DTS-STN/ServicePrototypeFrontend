import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./Header.stories";

it("renders header component in Primary state", () => {
  Primary.args.onLanguageClick = jest.fn((x) => "");
  render(<Primary {...Primary.args} />);

  screen.getByAltText(Primary.args.headerCanadaCaAltText);
  const button = screen.getByRole("button");

  expect(button.innerHTML).toEqual(Primary.args.language);
  expect(screen.getByRole("heading").innerHTML).toEqual(Primary.args.siteTitle);

  button.click();

  expect(Primary.args.onLanguageClick.mock.calls.length).toBe(1);
});
