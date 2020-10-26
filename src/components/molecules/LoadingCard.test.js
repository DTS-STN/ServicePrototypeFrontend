import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, Dark } from "./LoadingCard.stories";

it("render LoadingCard in its primary state", () => {
  render(<Primary {...Primary.args} />);

  const titlePlaceHolder = screen.getByTestId("placeholder-title");
  const tagPlaceHolder = screen.getByTestId("placeholder-tag");
  const descriptionPlaceHolder = screen.getByTestId("placeholder-description");

  expect(titlePlaceHolder.classList).toContain("bg-gray-500");
  expect(tagPlaceHolder.classList).toContain("bg-gray-500");
  expect(descriptionPlaceHolder.classList).toContain("bg-gray-500");
});

it("render LoadingCard in its dark state", () => {
  render(<Dark {...Dark.args} />);

  const titlePlaceHolder = screen.getByTestId("placeholder-title");
  const tagPlaceHolder = screen.getByTestId("placeholder-tag");
  const descriptionPlaceHolder = screen.getByTestId("placeholder-description");

  expect(titlePlaceHolder.classList).toContain("bg-black");
  expect(tagPlaceHolder.classList).toContain("bg-black");
  expect(descriptionPlaceHolder.classList).toContain("bg-black");
});
