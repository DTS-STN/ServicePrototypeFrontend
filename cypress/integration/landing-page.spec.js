/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Items shown on the Landing page', () => {
    beforeEach(() => {
      cy.visit('/')
     
    })

    it('landing page is loaded', () => {
      // Test the page at initial load
    //  cy.injectAxe()
      cy.url().should('contains', '/')
      // checkA11y(cy)
    })
    
    it('should go to the landing page and show header image and links ', () => {  
        
        cy.get('#wb-bnr > .btn').should('be.visible', 'Français')
  
     })


})