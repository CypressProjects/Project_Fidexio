/// <reference types='cypress' />

import loginPage from '../pages/loginPage';
import fleetPage from '../pages/fleetPage';

const login = new loginPage();
const fleet = new fleetPage();

beforeEach('As a POSManager, user is on the home page',()=>{
    login.loginFidexio();
    cy.get('.oe_topbar_name').contains('POSManager10').should('be.visible');

    login.selectMenu('Fleet');
    cy.url().should('include','fleet')
})

describe('Pos manager can create new Vehicle Model',()=>{   
    it('User navigates to Fleet page',()=>{
        fleet.leftSideMenuSelection("Vehicle Model", false);
        fleet.createBtn();

        fleet.enterModelName();
        fleet.selectMaker("Alfa");
        cy.wait(2000);
        fleet.saveBtn(true);


        cy.log("Delete created Model");
        cy.wait(5000);
        fleet.actions("Delete");
    })
})
describe('User should see Vehicles options on the left side of the page',()=>{
    it('User should see Vehicles options on the left side of the page respectively',()=>{
        fleet.leftSideMenuSelection("Vehicles", true);
        fleet.leftSideMenuSelection("Vehicles Odometer", true);
        fleet.leftSideMenuSelection("Vehicle Costs", true);
        fleet.leftSideMenuSelection("Vehicles Contracts", true);
        fleet.leftSideMenuSelection("Vehicles Fuel Logs", true);
        fleet.leftSideMenuSelection("Vehicles Services Logs", true);
        fleet.leftSideMenuSelection("Costs", true);
        fleet.leftSideMenuSelection("Indicative Costs", true);
        fleet.leftSideMenuSelection("Vehicle Model", true);
        fleet.leftSideMenuSelection("Model make of Vehicle", true);
        fleet.leftSideMenuSelection("Service Types", true);
        fleet.leftSideMenuSelection("Contract Types", true);
        fleet.leftSideMenuSelection("Vehicle Status", true);
        fleet.leftSideMenuSelection("Vehicle Tags", true);        
    })
})
describe("User verify that 'Vehicle Costs' option can be opened",()=>{
    it("User should see 'Vehicle Costs' option text at the top of the page",()=>{
        fleet.leftSideMenuSelection("Vehicle Costs", false);
        fleet.verifyOptionTitle("Vehicle Costs");
    })
})
describe("User verify that 'Create' button is clickable on the 'Vehicle Costs'",()=>{
    it("User should see 'Cost Details' header and 'Vehicle', 'Type', 'Total Price', 'Cost Description', 'Date' options correctly in the middle of the page",
    ()=>{
        fleet.leftSideMenuSelection("Vehicle Costs", false);
        cy.log("User clicks Create button");
        cy.wait(2000);
        fleet.createBtn();

        cy.log("User should see 'Cost Details' header and 'Vehicle', 'Type', 'Total Price', 'Cost Description', 'Date' options correctly in the middle of the page");
        fleet.verifyCostDetailsLabels();
    })
})
describe.only("Verify that 'Vehicle' dropdown opens and a vehicle can be selected",()=>{
    it("User should be able to select a vehicle from Vehicle dropdown",()=>{
        fleet.leftSideMenuSelection("Vehicle Costs", false);
        cy.log("User clicks Create button");
        cy.wait(2000);
        fleet.createBtn();

        fleet.costDetails("Mercedes/Class A","Tax roll", "10000", "This is a demo vehicle","10/01/2020");
        cy.wait(2000);

        fleet.saveBtn(false);

        cy.log("Cost Details is created successfully").wait(5000);
        fleet.actions("Delete");
    })
})