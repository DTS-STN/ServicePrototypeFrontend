import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, SkipLinkRemoved } from "./PrevNextBar.stories";

it("renders a bar with:  previous / skip / next ", () => {
  render(<Primary {...Primary.args} />);

  const links = screen.getAllByRole("link");

  // the line below does not work as expected.
  // const skipLink = screen.getAllByRole("link", {id: "NavBar-Skip"});

  const nextButton = screen.getByRole("button");

  expect(links[0]).toHaveTextContent("Prev");
  expect(links[1]).toHaveTextContent("Skip");
  expect(nextButton).toHaveTextContent("Next");
});

it("renders a bar with just : previous and next ", () => {
  render(<SkipLinkRemoved {...SkipLinkRemoved.args} />);

  const links = screen.getAllByRole("link");
  const nextButton = screen.getByRole("button");

  expect(links[0]).toHaveTextContent("Prev");
  expect(nextButton).toHaveTextContent("Next");
});
