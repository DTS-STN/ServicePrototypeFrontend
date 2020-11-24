import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, DifferentColors } from "./Combo.stories";

it("renders 'Primary' ", () => {
  render(<Primary {...Primary.args} />);

  expect(screen.getByText(/required/)).toBeTruthy();

  let options = screen.getAllByRole("option");

  fireEvent.change(screen.getByTestId("combo1-select"), {
    target: { value: Primary.args.options[1].name },
  });

  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
  expect(options[2].selected).toBeFalsy();
});

it("renders 'DifferentColors' ", () => {
  render(<DifferentColors {...DifferentColors.args} />);

  expect(screen.getByText(/requis/)).toBeTruthy();

  fireEvent.change(screen.getByTestId("combo2-select"), {
    target: { value: DifferentColors.args.options[1].name },
  });

  let options = screen.getAllByRole("option");
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
  expect(options[2].selected).toBeFalsy();
});
