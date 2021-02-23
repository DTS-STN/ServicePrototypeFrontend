import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./AppointmentTable.stories";

it("renders Primary ", () => {
  const wrapper = render(<Primary {...Primary.args} />);

  const table = wrapper.container.querySelector("table");
  const tableHeader = wrapper.container.querySelector("thead");
  const headerStyle = wrapper.container.querySelector("th.bg-header-blue");
  const tableBody = wrapper.container.querySelector("tbody");

  expect(table).toBeTruthy();
  expect(tableHeader).toBeTruthy();
  expect(headerStyle).toBeTruthy();
  expect(tableBody).toBeTruthy();
});
