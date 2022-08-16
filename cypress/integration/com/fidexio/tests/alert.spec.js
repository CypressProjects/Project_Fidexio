/// <reference types='cypress' />

describe('alert test',()=>{
    it('test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.wait(2000).contains("Click for JS Confirm").click();
    })
})