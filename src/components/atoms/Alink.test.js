import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { PlainLinkExample, LinkWithCustomCSS } from "./Alink.stories";

it("renders 'PlainLinkExample' with default CSS", () => {
  render(<PlainLinkExample {...PlainLinkExample.args} />);
  expect.stringContaining(PlainLinkExample.args.children);
});

it("renders 'LinkWithCustomCSS' with custom CSS", () => {
  render(<LinkWithCustomCSS {...LinkWithCustomCSS.args} />);
  expect.stringContaining(LinkWithCustomCSS.args.children);
  expect(screen.getByRole("link").classList).toContain("bg-red-900");
});
