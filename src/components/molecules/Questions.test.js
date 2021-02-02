import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./Questions.stories";

it("renders 'Primary' ", () => {
  render(<Primary {...Primary.args} />);

  // Checks the legend with a 'required' text

  expect(screen.queryByText(/required/)).toBeInTheDocument();

  // Checks the radio buttons

  let opt = screen.getAllByRole("radio");

  expect(opt[0].value).toBe(Primary.args.options[0].value);
  expect(opt[1].value).toBe(Primary.args.options[1].value);
  expect(opt[2].value).toBe(Primary.args.options[2].value);

  const zero = screen.getByTestId("0");
  const one = screen.getByTestId("1");
  const two = screen.getByTestId("2");

  expect(zero).not.toBeChecked();
  expect(one).not.toBeChecked();
  expect(two).not.toBeChecked();

  fireEvent.click(zero);

  expect(zero).toBeChecked();
  expect(one).not.toBeChecked();
  expect(two).not.toBeChecked();

  fireEvent.click(one);

  expect(zero).not.toBeChecked();
  expect(one).toBeChecked();
  expect(two).not.toBeChecked();

  fireEvent.click(two);

  expect(zero).not.toBeChecked();
  expect(one).not.toBeChecked();
  expect(two).toBeChecked();

  // Checks the Links

  const links = screen.getAllByRole("link");
  const nextButton = screen.getByRole("button");

  expect(links[0]).toHaveTextContent("Prev");
  expect(nextButton).toHaveTextContent("Next");
});
