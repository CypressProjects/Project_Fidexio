/// <reference types='cypress' />

import loginPage from '../pages/loginPage';

describe('As a POSManager, I should be able to create and desgin a new survey from Survey module',()=>{
    let login = new loginPage();
    before('As a POSManager, user is on the home page',()=>{
        cy.viewport(1500,1000);
        login.loginFidexio();
    })
    it('As a POSManager, user clicks Survey menu option',()=>{
        cy.get('.oe_topbar_name').contains('POSManager10').should('be.visible');

        login.selectMenu("Calender");
    })
})