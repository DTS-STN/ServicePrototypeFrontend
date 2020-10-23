import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Example1 } from "./PrevNextBar.stories";

it("renders a previous / skip / next Bar", () => {
  render(<Example1 {...Example1.args} />);

  const prevLink = document.getElementById("NavBar-Prev");
  const skipLink = document.getElementById("NavBar-Skip");
  const nextButton = screen.getByRole("button");

  expect(prevLink).toBeTruthy();
  expect(skipLink).toBeTruthy();
  expect(nextButton).toBeTruthy();
});
