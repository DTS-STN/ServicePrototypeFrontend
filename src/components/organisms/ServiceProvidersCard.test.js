import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./ServiceProviderCard.stories";

it("renders Primary ", () => {
  const wrapper = render(<Primary {...Primary.args} />);

  const googleMapDiv = wrapper.container.querySelector("div.mt-4");
  const paragraphElement = wrapper.container.querySelector("p");

  expect(paragraphElement).toBeTruthy();
  expect(googleMapDiv).toBeTruthy();
});
