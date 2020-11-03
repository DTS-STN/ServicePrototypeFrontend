import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Email, Print } from "./EmailPrintButton.stories";

it("renders EmailPrintButton in its Email state", () => {
  render(<Email {...Email.args} />);
  const text = screen.getByText("Email");
  expect(text).toBeTruthy();

  const icon = document.getElementsByTagName("span")[0];
  expect(icon.classList).toContain("icon-envelop");
});

it("renders EmailPrintButton in its Print state", () => {
  render(<Print {...Print.args} />);
  const text = screen.getByText("Print");
  expect(text).toBeTruthy();

  const icon = document.getElementsByTagName("span")[0];
  expect(icon.classList).toContain("icon-printer");
});
