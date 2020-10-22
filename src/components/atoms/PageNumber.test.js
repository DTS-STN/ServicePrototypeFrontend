import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, Selected } from "./PageNumber.stories";

it("renders PageNumber in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const textElement = screen.getByText(`${Primary.args.number}`);
  expect(textElement.classList).toContain("text-gray-500");
});

it("renders PageNumber in its selected state", () => {
  render(<Selected {...Selected.args} />);
  const textElement = screen.getByText(`${Selected.args.number}`);
  expect(textElement.classList).toContain("text-black");
  expect(textElement.getAttribute("aria-pressed")).toBe("true");
});
