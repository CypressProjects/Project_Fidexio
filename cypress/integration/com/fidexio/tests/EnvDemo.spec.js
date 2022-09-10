/// <reference types='Cypress' />

//const specTitle = require("cypress-sonarqube-reporter/specTitle");

//describe(specTitle('Sonarqube Demo Suit'),()=>{
    describe('Demo Environment Suit',()=>{
    it('Env Test',()=>{
        const selectedEnv = Cypress.env('selectedEnv');

        cy.visit(Cypress.env(selectedEnv).url)
        cy.get('#login').type(Cypress.env(selectedEnv).username)
        cy.get('#password').type(Cypress.env(selectedEnv).password)
        cy.get('.btn').click();
    })
})