import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./PrevNext.stories";

it("renders previous and next buttons", () => {
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
