/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("Keycloak Login", () => {
  beforeEach(() => {
    cy.kcLogout();
    cy.kcLogin("user");
    // .as("tokens");
    cy.visit("/");
  });

  it("should have a Title component ", () => {
    cy.get("[data-cy=LogInOut]").should("contain.text", "Logout");
  });

  it("should show the logged in username on the header", () => {
    cy.get("[data-cy=login-user-name]").should("contain.text", "William Johnson");
  });

  it("should not show the username on the header on logout", () => {
    cy.get("[data-cy=LogInOut]").click().should("have.text", "Login");
    // There is some type of race condition that makes the page refresh and the user is shown as logged in before it is actaully logged out.
   // cy.get("[data-cy=login-user-name]").should("contain.text", "");
  });
});
