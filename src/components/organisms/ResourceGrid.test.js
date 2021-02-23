import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./ResourceGrid.stories";

it("renders Primary ", () => {
  const wrapper = render(<Primary {...Primary.args} />);

  const resourcesContainer = wrapper.container.querySelector("div.flex");
  const paragraphElement = wrapper.container.querySelector("p");

  expect(paragraphElement).toBeTruthy();
  expect(resourcesContainer).toBeTruthy();
});
