/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("Items shown on the Landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // TODO: add a11y tests here.
  it("landing page is loaded", () => {
    // Test the page at initial load
    //  cy.injectAxe()
    cy.url().should("contains", "/");
    // checkA11y(cy)
  });

  it("should go to the landing page and show header image and links ", () => {
    cy.get("[data-cy=language-button]").should("be.visible", "Français");
  });

  it("should have a Title component ", () => {
    cy.get("[data-cy=home-page-title]").should(
      "contain.text",
      "Welcome to Service Canada"
    );
  });

  it("should have a Page description component ", () => {
    cy.get("[data-cy=home-page-description]").should("be.visible");
    
  });
  it("should have an Header for eligible benfits", () => {
    cy.get('[data-cy=eligibleBenefitsHeader]').should("be.visible", "Benefits that apply to you");
  });

  // The placeholders appear briefly before the date from the server is returned.
  it("should have benefits grid and placeholders", () => {
    cy.get('[data-cy=home-page-benefit-grid]').should("be.visible");
    cy.get('[data-testid=placeholder-title]').should("be.visible");
    cy.get('[data-testid=placeholder-tag]').should("be.visible");
    cy.get('[data-testid=placeholder-description]').should("be.visible");
  });
});
