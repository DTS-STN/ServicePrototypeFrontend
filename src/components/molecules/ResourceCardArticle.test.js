import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, Authenticated } from "./ResourceCardArticle.stories";

it("renders Primary ", () => {
  render(<Primary {...Primary.args} />);
  const imageElement = screen.getByRole("img");
  const titleParagraphElement = screen.getByText(Primary.args.title);
  const contentParagraphElement = screen.getByText(Primary.args.content);
  const buttonComponent = screen.getByRole("button");

  expect(imageElement).toBeTruthy();
  expect(titleParagraphElement).toBeTruthy();
  expect(contentParagraphElement).toBeTruthy();
  expect(buttonComponent).toHaveTextContent("Read More");
});
