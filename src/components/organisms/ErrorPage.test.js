import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary, WithString } from "./ErrorPage.stories";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

let mockStore;

beforeEach(() => {
  mockStore = configureMockStore();
});

it("renders ErrorPage component with string message", () => {
  let store = mockStore({
    language: "en",
  });

  render(
    <Provider store={store}>
      <WithString {...WithString.args} />
    </Provider>
  );

  screen.getByText(WithString.args.errorTitle);
  screen.getByText(WithString.args.error);
});

it("renders ErrorPage component with error object", () => {
  let store = mockStore({
    language: "en",
  });

  render(
    <Provider store={store}>
      <Primary {...Primary.args} />
    </Provider>
  );

  screen.getByText(Primary.args.errorTitle);
  expect(screen.getByTestId("error-message").innerHTML).toBe(
    JSON.stringify(Primary.args.error, null, 2)
  );
});
