/// <reference types='Cypress' />

import { Utility } from "../../../../support/utility"

describe('Env Test Suite',()=>{
    it('Env Test',()=>{
        const environment = new Utility().getEnv();
        console.log(environment)
        cy.visit(environment.url)

        cy.get('#login').type(Cypress.env('username'))
        //cy.get('#password').type(Cypress.env('password'))
        //cy.get('.btn').click();
    })
})