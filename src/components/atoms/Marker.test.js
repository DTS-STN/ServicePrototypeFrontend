import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./Marker.stories";

it("renders Primary ", () => {
  const wrapper = render(<Primary {...Primary.args} />);

  const marker = wrapper.container.querySelector("div.bg-red-800");

  expect(marker).toBeTruthy();
});
