import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, NextDisabled, PreviousDisabled } from "./PrevNext.stories";

it("renders previous and next buttons, both enabled", () => {
  render(<Primary {...Primary.args} />);

  const prevButton = screen.getByRole("button", {
    name: Primary.args.prevText,
  });
  const nextButton = screen.getByRole("button", {
    name: Primary.args.nextText,
  });

  expect(prevButton).toHaveTextContent(Primary.args.prevText);
  expect(nextButton).toHaveTextContent(Primary.args.nextText);
});

it("renders previous button disabled Next button enabled", () => {
  render(<PreviousDisabled {...PreviousDisabled.args} />);

  const prevButton = screen.getByRole("button", {
    name: PreviousDisabled.args.prevText,
  });
  const nextButton = screen.getByRole("button", {
    name: PreviousDisabled.args.nextText,
  });

  expect(prevButton).toHaveTextContent(PreviousDisabled.args.prevText);
  expect(nextButton).toHaveTextContent(PreviousDisabled.args.nextText);
  expect(prevButton).toHaveAttribute("disabled");
  expect(nextButton).not.toHaveAttribute("disabled");
});

it("renders previous button enabled Next button disabled", () => {
  render(<NextDisabled {...NextDisabled.args} />);

  const prevButton = screen.getByRole("button", {
    name: NextDisabled.args.prevText,
  });
  const nextButton = screen.getByRole("button", {
    name: NextDisabled.args.nextText,
  });

  expect(prevButton).toHaveTextContent(NextDisabled.args.prevText);
  expect(nextButton).toHaveTextContent(NextDisabled.args.nextText);
  expect(prevButton).not.toHaveAttribute("disabled");
  expect(nextButton).toHaveAttribute("disabled");
});
