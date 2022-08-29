/// <reference types='Cypress' /> 

import constantLocators from "../pages/constantLocators";

const locaters = new constantLocators();

describe('',()=>{
    it('',()=>{
        cy.visit('https://fineuploader.com/');

        cy.get(locaters.HOMEPAGE.DEMOS).click();
    })
})