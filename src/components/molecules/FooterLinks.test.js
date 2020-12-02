import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./FooterLinks.stories";

it("renders FooterLinks in its primary state", () => {
  render(<Primary {...Primary.args} />);
  Primary.args.links.forEach((value) => {
    screen.getByText(value.linkText);
  });
});
