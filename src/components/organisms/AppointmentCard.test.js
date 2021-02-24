import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./AppointmentCard.stories";

it("renders Primary ", () => {
  const wrapper = render(<Primary {...Primary.args} />);

  const paragraphElement = wrapper.container.querySelector("p");
  const button = wrapper.container.querySelector("button");
  const tableContainer = wrapper.container.querySelector("#table-container");

  expect(paragraphElement).toBeTruthy();
  expect(button).toBeTruthy();
  expect(tableContainer).toBeTruthy();
});
