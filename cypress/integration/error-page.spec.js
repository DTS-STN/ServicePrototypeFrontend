/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('400 page functions', () => {
    beforeEach(() => {
     // cy.visit('/')
    })
  
  describe("the requests", () => {
      it("GET - 200", () => {
         cy.request('GET', 'http://localhost:3000/').then((response) => {
             expect(response).to.have.property('status', 200)
             expect(response).to.have.property('statusText', 'OK')
         })
        });
  
        // this works locally but not when run in the container but seems there is a bug in the prod version where the page is not shown.
  
        it("show 404 error for page that does not exist", () => {
          cy.visit('/')
       //   cy.screenshot('home-page-before')
          cy.visit('localhost:3000/blah/', { failOnStatusCode: false })
          cy.wait(2000)
         // cy.get('[data-testid=error-message-title]').should('contain.text', '404')
           cy.get('[data-testid=error-message]').should("be.visible")
          })
       
   // it seems like the 500 message is not yet added it to this project yet.
      it.skip("Stub 500 error for the count- only works first time otherwise the response is cached", () => {
        cy.visit('/', { failOnStatusCode: false });
        // message to intergect into the page.
        let message = "500?";
        // Stub a response
        cy.intercept(
          {
            method: "GET",
            url: "**/benefits/count", 
          },
          {
            statusCode: 500,
            body: { error: message }, // stub returns above message
            headers: { "access-control-allow-origin": "*" },
            delayMs: 500,
          }
        )
        .as("get500");
        // cy.wait("@get500");
      //  cy.wait('@get500').its('response.statusCode').should('eq', 500)
        // the message is not yet added it to the project.
        //  cy.get('[data-testid=error-message-title]').should('contain.text', '500')
        cy.get("[data-testid=error-message]").should("contain", message);
      });
  // Produces this response but only once.
  // Request URL: http://localhost:1337/benefits/count
  // Request Method: GET
  // Status Code: 500 Internal Server Error
  // Remote Address: 127.0.0.1:53781
  // Referrer Policy: strict-origin-when-cross-origin
  
  
  
  
  
      });
    });