/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("Apply to benefits", () => {
  beforeEach(() => {
    // Make sure the user is logged out before the tests
    cy.kcLogout();
    cy.visit("/");
  });

  // This might be a hacky way to test this. Suggestions are welcome.
  it("prompts the user to login when clicking apply and then sends the user to CURAM link", () => {
    // intercept to the benefit details info
    cy.intercept({
      method: "GET",
      url: "/benefits/1",
    }).as("details");
    cy.visit("http://localhost:3000/benefit/1");
    // wait for the page to load with the info from the benefits server
    cy.wait("@details");
    // make sure that stuff is showing on the page
    cy.get("[data-cy=benefit-details]").should("be.visible");
    cy.get("[data-cy=apply-button]").should("be.visible");

    // I am not sure this is needed?
    cy.intercept({
      method: "GET",
      url: "https://keycloak.dev.dts-stn.com/*",
    }).as("key");
    // wait for the page to refresh again (not sure why the page is constantly refreshing)
    cy.wait("@details");
    // login details
    cy.kcLogin("user");
    // The user is not yet logged in so there should be no username shown.
    cy.get("[data-cy=login-user-name]").should("contain.text", "");
    // clicking the apply button prompts the user to log in
    cy.get("[data-cy=apply-button] > .flex").click({ force: true });

    // intercept the POST request after the button is clicked and the user is logged in.
    cy.intercept("**/ua/", (req) => {
      // if the response was cached
      delete req.headers["if-none-match"];
    }).as("ua");
    // clicking the Apply button after the login goes to the ua page as expected
    cy.get("[data-cy=apply-button] > .flex").click({ force: true });
    cy.wait("@ua").its("response").should("deep.include", {
      statusCode: 200,
      statusMessage: "OK",
      url: "https://169.59.166.63:9044/ua/",
    });
  });
});
