import React, { useEffect } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./Page.stories";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { changeLanguageCreator, LANGUAGES } from "../../redux/actions";
import { useTranslation } from "react-i18next";
import { en } from "../../i18n/en";
import { fr } from "../../i18n/fr";
import { ReactKeycloakProvider } from "@react-keycloak/web";

let mockStore;

jest.mock("react-i18next");

const keycloak = {
  init: () => {
    return Promise.resolve({});
  },
  login: () => {},
  logout: () => {},
};

beforeEach(() => {
  mockStore = configureMockStore();
});

it("renders Page component in its Primary state when language is english", () => {
  let store = mockStore({
    language: "en",
  });

  useTranslation.mockImplementation(() => {
    return {
      t: (key) => en[key] || key,
    };
  });

  render(
    <ReactKeycloakProvider authClient={keycloak}>
      <Provider store={store}>
        <Primary {...Primary.args} />
      </Provider>
    </ReactKeycloakProvider>
  );

  expect(screen.getAllByAltText(en.headerCanadaCaAltText).length).toBe(2);
  expect(screen.getByRole("heading").innerHTML).toBe(en.siteTitle);

  expect(
    screen.getByText(en.departmentAndAgenciesText).getAttribute("href")
  ).toBe(en.departmentAndAgenciesLink);

  expect(
    screen.getByText(en.publicServiceAndMilitaryText).getAttribute("href")
  ).toBe(en.publicServiceAndMilitaryLink);

  expect(screen.getByText(en.newsText).getAttribute("href")).toBe(en.newsLink);

  expect(
    screen.getByText(en.treatiesLawsAndRegulationText).getAttribute("href")
  ).toBe(en.treatiesLawsAndRegulationLink);

  expect(
    screen.getByText(en.governmentWideReportingText).getAttribute("href")
  ).toBe(en.governmentWideReportingLink);

  expect(screen.getByText(en.howGovernmentWorksText).getAttribute("href")).toBe(
    en.howGovernmentWorksLink
  );

  let languageButton = screen.getByRole("button", { name: "Français" });
  languageButton.click();

  expect(store.getActions()).toEqual([changeLanguageCreator(LANGUAGES.FR)]);
});

it("renders Page component in its Primary state when language is french", () => {
  let store = mockStore({
    language: "fr",
  });

  useTranslation.mockImplementation(() => {
    return {
      t: (key) => fr[key] || key,
    };
  });

  render(
    <ReactKeycloakProvider authClient={keycloak}>
      <Provider store={store}>
        <Primary {...Primary.args} />
      </Provider>
    </ReactKeycloakProvider>
  );

  expect(screen.getAllByAltText(fr.headerCanadaCaAltText).length).toBe(2);
  expect(screen.getByRole("heading").innerHTML).toBe(fr.siteTitle);

  expect(
    screen.getByText(fr.departmentAndAgenciesText).getAttribute("href")
  ).toBe(fr.departmentAndAgenciesLink);

  expect(
    screen.getByText(fr.publicServiceAndMilitaryText).getAttribute("href")
  ).toBe(fr.publicServiceAndMilitaryLink);

  expect(screen.getByText(fr.newsText).getAttribute("href")).toBe(fr.newsLink);

  expect(
    screen.getByText(fr.treatiesLawsAndRegulationText).getAttribute("href")
  ).toBe(fr.treatiesLawsAndRegulationLink);

  expect(
    screen.getByText(fr.governmentWideReportingText).getAttribute("href")
  ).toBe(fr.governmentWideReportingLink);

  expect(screen.getByText(fr.howGovernmentWorksText).getAttribute("href")).toBe(
    fr.howGovernmentWorksLink
  );

  let languageButton = screen.getByRole("button", { name: "English" });
  languageButton.click();

  expect(store.getActions()).toEqual([changeLanguageCreator(LANGUAGES.EN)]);
});
