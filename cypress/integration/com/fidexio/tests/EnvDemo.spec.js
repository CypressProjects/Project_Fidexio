/// <reference types='Cypress' />


describe('Env Test Suite',()=>{
    it('Env Test',()=>{
        const version = Cypress.env('version');

        cy.visit(Cypress.env(version).url)
        cy.get('#login').type(Cypress.env(version).username)
        cy.get('#password').type(Cypress.env(version).password)
        cy.get('.btn').click();
    })
})