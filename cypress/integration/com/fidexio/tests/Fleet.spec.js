/// <reference types='cypress' />

import loginPage from '../pages/loginPage';
import fleetPage from '../pages/fleetPage';

const login = new loginPage();
const fleet = new fleetPage();

before('As a POSManager, user is on the home page',()=>{
    login.loginFidexio();
    cy.get('.oe_topbar_name').contains('POSManager10').should('be.visible');

    login.selectMenu('Fleet');
    cy.url().should('include','fleet')
})

describe.skip('Pos manager can create new Vehicle Model',()=>{   
    it('User navigates to Fleet page',()=>{
        fleet.leftSideMenuSelection("Vehicle Model");
        fleet.createBtn();

        fleet.enterModelName();
        fleet.selectMaker("Alfa");
        cy.wait(2000);
        fleet.saveBtn();


        cy.log("Delete created Model");
        cy.wait(5000);
        fleet.actions("Delete");
    })
})
describe('User should see Vehicles options on the left side of the page',()=>{
    it('User should see Vehicles options on the left side of the page respectively',()=>{
        fleet.leftSideMenuSelection("Vehicles");
        fleet.leftSideMenuSelection("Vehicles Odometer");
        fleet.leftSideMenuSelection("Vehicle Costs");
        fleet.leftSideMenuSelection("Vehicles Contracts");
        fleet.leftSideMenuSelection("Vehicles Fuel Logs");
        fleet.leftSideMenuSelection("Vehicles Services Logs");
        fleet.leftSideMenuSelection("Costs");
        fleet.leftSideMenuSelection("Indicative Costs");
        fleet.leftSideMenuSelection("Vehicle Model");
        fleet.leftSideMenuSelection("Model make of Vehicle");
        fleet.leftSideMenuSelection("Service Types");
        fleet.leftSideMenuSelection("Contract Types");
        fleet.leftSideMenuSelection("Vehicle Status");
        fleet.leftSideMenuSelection("Vehicle Tags");        
    })
})