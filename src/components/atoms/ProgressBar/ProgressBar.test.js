import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Example1, Example2 } from "./ProgressBar.stories";

it("renders Example1 ", () => {
  render(<Example1 {...Example1.args} />);

  const img = document.getElementById("progress50-img");

  expect(img).toBeTruthy();
});

it("renders Example2 ", () => {
  render(<Example2 {...Example2.args} />);

  const img = document.getElementById("progress80-img");

  expect(img).toBeTruthy();
});
