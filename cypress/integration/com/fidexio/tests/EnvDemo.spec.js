/// <reference types='Cypress' />

describe('Env Test Suite',()=>{
    it('Env Test',()=>{
        cy.visit(Cypress.env('url'))
    })
})