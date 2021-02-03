import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./RadioGroup.stories";

it("renders 'Primary' ", () => {
  render(<Primary {...Primary.args} />);

  expect(screen.queryByText(/required/)).toBeInTheDocument();

  let opt = screen.getAllByRole("radio");

  expect(opt[0].value).toBe(Primary.args.answers[0].value);
  expect(opt[1].value).toBe(Primary.args.answers[1].value);
  expect(opt[2].value).toBe(Primary.args.answers[2].value);

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
});
