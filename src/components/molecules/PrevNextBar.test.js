import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./PrevNextBar.stories";

it("renders a previous / skip / next Bar", () => {
  render(<Primary {...Primary.args} />);

  const links = screen.getAllByRole("link");

  // the line below does not work as expected.
  // const skipLink = screen.getAllByRole("link", {id: "NavBar-Skip"});

  const nextButton = screen.getByRole("button");

  expect(links[0]).toHaveTextContent("Prev");
  expect(links[1]).toHaveTextContent("Skip");
  expect(nextButton).toHaveTextContent("Next");
});
