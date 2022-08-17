/// <reference types='cypress' />

import loginPage from '../pages/loginPage';
import fleetPage from '../pages/fleetPage';

const login = new loginPage();
const fleet = new fleetPage();


describe('Pos manager can create new Vehicle Model',()=>{
    before('As a POSManager, user is on the home page',()=>{
        login.loginFidexio();
        cy.get('.oe_topbar_name').contains('POSManager10').should('be.visible');
    })
    it('User navigates to Fleet page',()=>{
        login.selectMenu('Fleet');
        cy.url().should('include','fleet')
        
    })
    it('User hits the Vehicle Model',()=>{
        fleet.leftSideMenuSelection("Vehicle Model");
        fleet.createBtn();
    })
    it('User enters the Model name',()=>{
        fleet.enterModelName();
        fleet.selectMaker("Alfa");
        cy.wait(5000);
        fleet.saveBtn();
    })
    it('User deletes the created Model',()=>{
        cy.wait(5000);
        fleet.actions("Delete")
    })
})