import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./EligibleBenefit.stories";

it("renders Primary ", () => {
  let mockfn = jest.fn();
  const wrapper = render(<Primary {...Primary.args} benefitOnClick={mockfn} />);

  let elem = wrapper.container.querySelector("#ReadMore");
  const paragraphElement = wrapper.container.querySelector("p.font-bold");

  elem.click();

  expect(mockfn).toHaveBeenCalledTimes(1);
  expect(elem).toHaveTextContent("Read More");
  expect(paragraphElement).toBeTruthy();
});
