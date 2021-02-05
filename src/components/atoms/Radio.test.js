import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./Radio.stories";

it("renders 'Primary' ", () => {
  render(<Primary {...Primary.args} />);

  let opt = screen.getByRole("radio");

  expect(opt.value).toBe(Primary.args.value);

  const zero = screen.getByTestId(Primary.args.id);
});
