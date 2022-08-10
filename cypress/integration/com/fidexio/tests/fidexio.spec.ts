/// <reference types='cypress' />

describe('As a POSManager, I should be able to create and desgin a new survey from Survey module',()=>{
    before('As a POSManager, user is on the home page',()=>{
        cy.viewport(1500,1000);
        cy.visit('https://qa.fidexio.com/');

        cy.get('#login').type("posmanager10@info.com");
        cy.get('#password').type("posmanager");
        cy.get('.btn').click();
    })
    it('As a POSManager, user clicks Survey menu option',()=>{
        cy.get('.oe_topbar_name').should('text','POSManager10')

    })
})