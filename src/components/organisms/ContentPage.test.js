import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./ContentPage.stories";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { ReactKeycloakProvider } from "@react-keycloak/web";

let mockStore;

beforeEach(() => {
  mockStore = configureMockStore();
});

const keycloak = {
  init: () => {
    return Promise.resolve({});
  },
  login: () => {},
  logout: () => {},
};

it("renders ContentPage in its primary state", () => {
  let store = mockStore({
    language: "en",
  });
  render(
    <ReactKeycloakProvider authClient={keycloak}>
      <Provider store={store}>
        <Primary {...Primary.args} />
      </Provider>
    </ReactKeycloakProvider>
  );

  const title = screen.getByRole("heading", { name: "react-markdown" });
  expect(title.tagName).toBe("H1");
});
