import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./SearchBar.stories";

it("renders SearchBar in its primary state", () => {
  render(<Primary {...Primary.args} />);
  expect(screen.getByText("How can we help you?")).toBeTruthy();
  expect(screen.getByTestId("searchButton").classList).toContain(
    "icon-cheveron-down"
  );
});
