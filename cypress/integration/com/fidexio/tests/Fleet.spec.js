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

describe('Pos manager can create new Vehicle Model',()=>{   
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
        fleet.leftSideMenuSelection(true, "Vehicles");
        fleet.leftSideMenuSelection(true, "Vehicles Odometer");
        fleet.leftSideMenuSelection(true, "Vehicle Costs");
        fleet.leftSideMenuSelection(true, "Vehicles Contracts");
        fleet.leftSideMenuSelection(true, "Vehicles Fuel Logs");
        fleet.leftSideMenuSelection(true, "Vehicles Services Logs");
        fleet.leftSideMenuSelection(true, "Costs");
        fleet.leftSideMenuSelection(true, "Indicative Costs");
        fleet.leftSideMenuSelection(true, "Vehicle Model");
        fleet.leftSideMenuSelection(true, "Model make of Vehicle");
        fleet.leftSideMenuSelection(true, "Service Types");
        fleet.leftSideMenuSelection(true, "Contract Types");
        fleet.leftSideMenuSelection(true, "Vehicle Status");
        fleet.leftSideMenuSelection(true, "Vehicle Tags");        
    })
})
describe("User verify that 'Vehicle Costs' option can be opened",()=>{
    it("User should see 'Vehicle Costs' option text at the top of the page",()=>{
        fleet.leftSideMenuSelection(false, "Vehicle Costs");
        fleet.verifyOptionTitle("Vehicle Costs");
    })
})
describe("User verify that 'Create' button is clickable",()=>{
    it('',()=>{

    })
})