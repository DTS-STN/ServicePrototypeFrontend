
/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("Benefits cards spec", () => {
  
    beforeEach(() => { 
      cy.visit("/");
     
      ;
    });


    it.only("Mocked number for benefit Count appears in the UI", () => {
        // The number of the benefits is returned from the server, this number is being mocked here
        cy.intercept("/benefits/*", { fixture: "descriptionFR.json" }).as("getCount");
  
        cy.visit("http://localhost:3000/benefit/1");
  
        // pass an array of Route Aliases that forces Cypress to wait
        // each of these aliases   cy.wait(['@getBenefits', '@getCount'])
        cy.wait(["@getCount"]);
        // these commands will not run until the wait command resolves above
        cy.contains('mocked')
      //  cy.get("[data-cy=home-page-benefit-counter]").should("be.visible").and("contain.text", "4");
      });


      it("Should show the Benefit details page", () => {
        // the benefit text is returned from the server, the text here is being mocked
         cy.intercept( {pathname: '/benefits*'}, { fixture: "descriptionEN.json" }).as("getDescriptEN");
     //    cy.wait(2000)
      //   cy.screenshot('1page-before')
         cy.visit("/benefit/1");
       //  cy.wait(2000)
      //   cy.screenshot('1page-after')
        cy.wait("@getDescriptEN");
        // these commands will not run until the wait command resolves above
        //  cy.get("[data-cy-button=more-info-button]").should("be.visible")
        //  cy.get("[data-cy-button=more-info-button]").should('have.length', 3)
        //  cy.get("[data-cy-button=more-info-button]").first().as('firstButton')
        //  cy.get('@firstButton').click()
        //  cy.get("[data-cy-button=more-info-button]").first().as('firstButton')
        //  cy.get('@firstButton').click()
        //  cy.intercept("benefit/1", { fixture: "benefit-cardEN.json" }).as("getBenefitsEN");
        //  cy.wait("@getBenefitsEN");
        //  cy.get('@firstButton').click()
          cy.url().should('include', '/benefit/1') 
      });


    });    