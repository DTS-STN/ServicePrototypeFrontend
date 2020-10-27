import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Example1, Example2 } from "./Combo.stories";

it("renders Example1 ", () => {
  render(<Example1 {...Example1.args} />);

  const label = document.getElementById("combo1-label");
  const select = document.getElementById("combo1-select");

  expect(label).toBeTruthy();
  expect(select).toBeTruthy();
  //expect(label).toEqual(expect.stringMatching('required'));
});

it("renders Example2 ", () => {
  render(<Example2 {...Example2.args} />);

  const label = document.getElementById("combo2-label");
  const select = document.getElementById("combo2-select");

  expect(label).toBeTruthy();
  expect(select).toBeTruthy();
  //expect(label).stringContaining("requis");
});
