import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./LifeJourneyGrid.stories";

it("renders LifeJourneyGrid in its Primary state", () => {
  let mockfn = jest.fn((benefit_id) => {});
  render(<Primary {...Primary.args} onLifeJourneyClick={mockfn} />);

  for (let i in Primary.args.lifeJourneys) {
    let elem = screen.getByTestId(
      Primary.args.lifeJourneys[i].lifeJourneyId + "-lifejourney"
    );
    elem.click();
    expect(mockfn.mock.calls[i][0]).toEqual(
      Primary.args.lifeJourneys[i].lifeJourneyId
    );
  }
});
