/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("Benefit details Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("gets the 1st EN benefit details returned from the server", () => {
    cy.intercept("**/benefits/1", (req) => {
      // if the response was cached
      delete req.headers["if-none-match"];
    }).as("fetchedEN");
    cy.visit("/benefit/1");
    cy.wait("@fetchedEN").its("response").should("deep.include", {
      statusCode: 200,
      statusMessage: "OK",
      url: "https://benefit-service-dev.dev.dts-stn.com/benefits/1",
    });
  });

  it("gets the 1st benefit details for FR returned from the server", () => {
    cy.intercept("**/benefits/1?lang=fr", (req) => {
      // if the response was cached
      delete req.headers["if-none-match"];
    }).as("fetchedFR");
    cy.visit("/benefit/1");
    cy.wait("@fetchedFR").its("response").should("deep.include", {
      statusCode: 200,
      statusMessage: "OK",
      url: "https://benefit-service-dev.dev.dts-stn.com/benefits/1?lang=fr",
    });
  });

  it("Mocked EN benefit details show on page in the UI", () => {
      // The number of the benefit details are being mocked
    cy.intercept("/benefits/1", { fixture: "descriptionEN.json" }).as("getENdetails");
    cy.visit("http://localhost:3000/benefit/1");
    // pass an array of Route Aliases that forces Cypress to wait
    // each of these aliases   cy.wait(['@getBenefits', '@getCount'])
    cy.wait(["@getENdetails"]);
    // these commands will not run until the wait command resolves above
    cy.get("[data-cy=benefit-details]").should("be.visible").and("contain.text", "mocked");
  });

  it("Mocked FR benefit details show on page in the UI", () => {
    // The number of the benefit details are being mocked
    cy.intercept("/benefits/1?lang=fr", { fixture: "descriptionFR.json" }).as("getFRdetails");

    cy.visit("http://localhost:3000/benefit/1");
    // Change to French page
    cy.get('[data-cy=language-button]').click()
    // pass an array of Route Aliases that forces Cypress to wait
    // each of these aliases   cy.wait(['@getBenefits', '@getCount'])
    cy.wait(["@getFRdetails"]);
    // these commands will not run until the wait command resolves above
    cy.get("[data-cy=benefit-details]").should("be.visible").and("contain.text", "mockedFR");
  });

});
