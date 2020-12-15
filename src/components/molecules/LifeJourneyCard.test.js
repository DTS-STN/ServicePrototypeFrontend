import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./LifeJourneyCard.stories";

it("renders LifeJourneyCard in its Primary state", () => {
  let mockfn = jest.fn((id) => {});
  render(<Primary {...Primary.args} onLifeJourneyClick={mockfn} />);

  expect(screen.getByRole("heading").innerHTML).toEqual(
    Primary.args.lifeJourneyTitle
  );
  screen.getByText(Primary.args.lifeJourneyDescription);

  screen.getByRole("button").click();

  expect(mockfn.mock.calls.length).toEqual(1);
  expect(mockfn.mock.calls).toEqual([[Primary.args.lifeJourneyId]]);
});
