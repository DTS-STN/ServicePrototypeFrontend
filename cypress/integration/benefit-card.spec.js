/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("Benefits cards spec", () => {
  
    beforeEach(() => { 
      cy.visit("/");
    });

    // The 
    it("The benefit grid appears on the homepage", () => {
        cy.visit( 'http://localhost:3000/')
        cy.get('[ data-cy="home-page-benefit-grid"]').should('be.visible')
        cy.screenshot('grid')
    
    });

    // Check to see if a number for the benefit count is returned from the server
it('always gets the new data for the count for the benefits returned from the server', () => {
    cy.intercept('**/benefits/count', req => {
        // if the response was cached
      delete req.headers['if-none-match']
    }).as('counts')
    cy.visit('/')
    cy.wait('@counts')
      .its('response')
      .should('deep.include', {
        statusCode: 200,
        statusMessage: 'OK'
      })
      .and('have.property', 'body') // yields the "response.body"
      .then(body => {
        // since we do not know the number of items
        // just check if it is a number
        expect(body).to.be.a('number')
      })
  })
  
    it("benefits header is on page", () => {
      cy.get("[data-cy=eligibleBenefitsHeader]").should('be.visible')
      
    });

// Mocked results for count and benefits. 

    it("Mocked number for benefit Count appears in the UI", () => {
        // The number of the benefits is returned from the server, this number is being mocked here
        cy.intercept("/benefits/count", { fixture: "benefit-count.json" }).as("getCount");
  
        cy.visit("http://localhost:3000/");
  
        // pass an array of Route Aliases that forces Cypress to wait
        // each of these aliases   cy.wait(['@getBenefits', '@getCount'])
        cy.wait(["@getCount"]);
        // these commands will not run until the wait command resolves above
        cy.get("[data-cy=home-page-benefit-counter]").should("be.visible").and("contain.text", "4");
      });
  
    it("Mocked benefit EN text is added to the benefit card boxes ", () => {
      // the benefit text is returned from the server, the text here is being mocked
       cy.intercept("benefits*", { fixture: "benefit-cardEN.json" }).as("getBenefitsEN");

       cy.visit("http://localhost:3000/");

       cy.wait("@getBenefitsEN");
      // these commands will not run until the wait command resolves above
       cy.get("[data-testid=ei_reg]").should("be.visible").and("contain.text", "Mock");
    });

    it("Mocked benefit FR text is added to the benefit card boxes ", () => {
        // the benefit text is returned from the server, the text here is being mocked
         cy.intercept("benefits*", { fixture: "benefit-cardFR.json" }).as("getBenefitsFR");
  
         cy.visit("http://localhost:3000/");
  
         cy.wait("@getBenefitsFR");
        // these commands will not run until the wait command resolves above
         cy.get("[data-testid=matl]").should("be.visible").and("contain.text", "MockFR");
      });

      it("Should show the Benefit details page when the More info button is clicked", () => {
        // the benefit text is returned from the server, the text here is being mocked
         cy.intercept("benefits*", { fixture: "benefit-cardEN.json" }).as("getBenefitsEN");
  
         cy.visit("http://localhost:3000/");
  
         cy.wait("@getBenefitsEN");
        // these commands will not run until the wait command resolves above
         cy.get("[data-cy-button=more-info-button]").should("be.visible")
         cy.get("[data-cy-button=more-info-button]").should('have.length', 3)
         cy.get("[data-cy-button=more-info-button]").first().as('firstButton')
         cy.get('@firstButton').click()
         cy.url().should('include', '/benefit/1') 
      });
      

      


});