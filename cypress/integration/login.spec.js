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
    cy.get("[data-cy=login-user-name]").should("contain.text", "Citizen User");
  });

  it("should not show the username on the header on logout", () => {
    cy.get("[data-cy=LogInOut]").click().should("have.text", "Login");
    cy.get("[data-cy=login-user-name]").should("contain.text", "");
  });
});
