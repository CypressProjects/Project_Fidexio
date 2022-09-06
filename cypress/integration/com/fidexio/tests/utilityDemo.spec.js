/// <reference types='Cypress' />

import { Utility } from "../../../../support/utility"

describe('Utility js demo suite',()=>{
    it('Invoke value from Utility class',()=>{
        const URL = new Utility().getBaseUrl();

        cy.log(URL)
    })
})