import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { WithString } from "./ErrorPage.stories";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

let mockStore;

beforeEach(() => {
  mockStore = configureMockStore();
});

it("renders ErrorPage component state with language is english", () => {
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
