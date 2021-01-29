/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("Apply to benefits", () => {
  
    beforeEach(() => { 
      cy.visit("/");
    });

    // The 
    it("prompts the user to login when clicking apply", () => {
        cy.intercept({
            method: 'GET',
            url: '/benefits/1',
          }).as('details')
        cy.visit( 'http://localhost:3000/benefit/1')
        cy.kcLogout()
        cy.wait('@details')
        cy.get('[data-cy=benefit-details]').should('be.visible')
        cy.get('[data-cy=apply-button]').should('be.visible')
        // cy.intercept({
        //     method: 'GET',
        //     url: '/benefits/1',
        //   }).as('details')
      
      //  cy.screenshot('grid')

     // cy.kcLogout();
     // cy.kcLogin("user");
      // cy.visit("/");
      cy.intercept({
        method: 'GET',
        url: '/system_configurations',
      }).as('details')
      cy.get('[data-cy=apply-button] > .flex').click()

      
     // cy.kcLogin("user")
     //  cy.wait('@details').its('response.statusCode').should('eq', 200)
       cy.wait('@key').its('request.url').should('include', 'auth')

    //   cy.intercept('GET', 'https://169.59.166.63:9044/Rest/v1/ua/system_configurations').then((response) => {
    //     expect(response).to.have.property('status', 200)
    //     expect(response).to.have.property('statusText', 'OK')
   // })

    
    });

});