import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Small, Medium, Large } from "./Spinner.stories";

it("renders Spinner in Small state", () => {
  render(<Small {...Small.args} />);
  const spinnerElement = screen.getByTestId("spinner");
  expect(spinnerElement.classList).toContain("h-10");
  expect(spinnerElement.classList).toContain("w-10");
});

it("renders Spinner in Medium state", () => {
  render(<Medium {...Medium.args} />);
  const spinnerElement = screen.getByTestId("spinner");
  expect(spinnerElement.classList).toContain("h-40");
  expect(spinnerElement.classList).toContain("w-40");
});

it("renders Spinner in Large state", () => {
  render(<Large {...Large.args} />);
  const spinnerElement = screen.getByTestId("spinner");
  expect(spinnerElement.classList).toContain("h-64");
  expect(spinnerElement.classList).toContain("w-64");
});
