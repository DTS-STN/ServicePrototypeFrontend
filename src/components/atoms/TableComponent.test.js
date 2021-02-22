import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./TableComponent.stories";

it("renders Title in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const title = screen.getByText("Estimated dollar Amount per week");
  expect(title).toBeTruthy();
});

it("renders valueTitle1 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const valueTitle1 = screen.getAllByText("Base Rate");
  expect(valueTitle1).toBeTruthy();
});

it("renders valueTitle2 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const valueTitle2 = screen.getAllByText("Provincial Amount");
  expect(valueTitle2).toBeTruthy();
});

it("renders valueTitle3 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const valueTitle3 = screen.getAllByText("Total");
  expect(valueTitle3).toBeTruthy();
});

it("renders title1 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const title1 = screen.getAllByText("Less than $30,000");
  expect(title1).toBeTruthy();
});

it("renders title2 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const title2 = screen.getAllByText("Between $30,000 & $60,000");
  expect(title2).toBeTruthy();
});

it("renders title3 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const title3 = screen.getAllByText("More than $60,000");
  expect(title3).toBeTruthy();
});

it("renders value1 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const value1 = screen.getAllByText(parseFloat("$500").toFixed(2));
  expect(value1).toBeTruthy();
});

it("renders value2 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const value2 = screen.getAllByText(parseFloat("$100").toFixed(2));
  expect(value2).toBeTruthy();
});

it("renders value3 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const value3 = screen.getAllByText(parseFloat("$600").toFixed(2));
  expect(value3).toBeTruthy();
});

it("renders value4 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const value4 = screen.getAllByText(parseFloat("$400").toFixed(2));
  expect(value4).toBeTruthy();
});

it("renders value5 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const value5 = screen.getAllByText(parseFloat("$200").toFixed(2));
  expect(value5).toBeTruthy();
});

it("renders value6 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const value6 = screen.getAllByText(parseFloat("$600").toFixed(2));
  expect(value6).toBeTruthy();
});

it("renders value7 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const value7 = screen.getAllByText(parseFloat("$400").toFixed(2));
  expect(value7).toBeTruthy();
});

it("renders value8 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const value8 = screen.getAllByText(parseFloat("$200").toFixed(2));
  expect(value8).toBeTruthy();
});

it("renders value9 in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const value9 = screen.getAllByText(parseFloat("$600").toFixed(2));
  expect(value9).toBeTruthy();
});
