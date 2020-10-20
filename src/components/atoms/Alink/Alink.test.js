import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Example1, Example2 } from "./Alink.stories";

it("renders Example1 with default CSS", () => {
  render(<Example1 {...Example1.args} />);
  expect.stringContaining(Example1.args.children);
});

it("renders Example2 with custom CSS", () => {
  render(<Example2 {...Example2.args} />);
  expect.stringContaining(Example2.args.children);
  expect(screen.getByRole("link").classList).toContain("bg-red-900");
});
