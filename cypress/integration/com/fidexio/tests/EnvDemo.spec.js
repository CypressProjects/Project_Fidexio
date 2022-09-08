/// <reference types='Cypress' />


describe('Env Test Suite',()=>{
    it('Env Test',()=>{
        const selectedEnv = Cypress.env('selectedEnv');

        cy.visit(Cypress.env(selectedEnv).url)
        cy.get('#login').type(Cypress.env(selectedEnv).username)
        cy.get('#password').type(Cypress.env(selectedEnv).password)
        cy.get('.btn').click();
    })
})