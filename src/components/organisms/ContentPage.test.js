import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./ContentPage.stories";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

let mockStore;

beforeEach(() => {
  mockStore = configureMockStore();
});

it("renders ContentPage in its primary state", () => {
  let store = mockStore({
    language: "en",
  });
  render(
    <Provider store={store}>
      <Primary {...Primary.args} />
    </Provider>
  );

  const title = screen.getByRole("heading", { name: "react-markdown" });
  expect(title.tagName).toBe("H1");
});
