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
describe("Verify that 'Vehicle' dropdown opens and a vehicle can be selected",()=>{
    it("User should be able to select a vehicle from Vehicle dropdown",()=>{
        fleet.leftSideMenuSelection("Vehicle Costs", false);
        cy.log("User clicks Create button");
        cy.wait(2000);
        fleet.createBtn();

        //fleet.costDetails("Mercedes/Class A","Tax roll", "10000", "This is a demo vehicle","10/01/2020");
        fleet.costDetails_Vehicle("Mercedes/Class A");
        fleet.costDetails_Type("Tax roll");
        fleet.costDetails_TotalPrice("10000");
        fleet.costDetails_CostDescription("This is a demo vehicle");
        fleet.costDetails_Date("10/01/2020");

        cy.wait(2000);

        fleet.saveBtn(false);

        cy.log("Cost Details is created successfully").wait(5000);
        fleet.actions("Delete");
    })
})
describe("Verify that 'Vehicle' dropdown opens and a vehicle can be selected",()=>{
    it("User should be able to select a vehicle from Vehicle dropdown",()=>{
        fleet.leftSideMenuSelection("Vehicle Costs", false);
        cy.log("User clicks Create button");
        cy.wait(2000);
        fleet.createBtn();

        //fleet.costDetails("Mercedes/Class A","Tax roll", "10000", "This is a demo vehicle","10/01/2020");
        fleet.costDetails_Vehicle("Mercedes/Class A");

        cy.log("Trying different types...")
        fleet.costDetails_Type("Tax roll");
        cy.wait(2000);
        fleet.costDetails_Type("Summer tires");
        cy.wait(2000);
        fleet.costDetails_Type("Repair and maintenance");
        cy.wait(2000);
        fleet.costDetails_Type("Snow Tires");

        cy.log("Trying different numberic characters...")
        fleet.costDetails_TotalPrice("10000");
        cy.wait(2000);
        fleet.costDetails_TotalPrice("10000,9999");
        cy.wait(2000);
        fleet.costDetails_TotalPrice("100.900");
        cy.wait(2000);
        fleet.costDetails_TotalPrice("10,000.000");
        cy.wait(2000);

        cy.log("Cost Description")
        fleet.costDetails_CostDescription("This is a demo vehicle");

        cy.log("Trying different dates")
        fleet.costDetails_Date("10/01/2000");
        cy.wait(2000);
        fleet.costDetails_Date("10/01/1965");
        cy.wait(2000);
        fleet.costDetails_Date("10/01/2023");
        cy.wait(2000);

        fleet.saveBtn(false);

        cy.log("Cost Details is created successfully").wait(5000);
        fleet.actions("Delete");
    })
})
describe("Verify that after entering non numeric characters into 'Total Price' and saving, 'The following fields are invalid' is displayed"
,()=>{
    it("User should see 'The following fields are invalid:' error message after saving",()=>{
        fleet.leftSideMenuSelection("Vehicle Costs", false);
        cy.log("User clicks Create button");
        cy.wait(2000);
        fleet.createBtn();

        cy.log("User selects a vehicle: ")
        fleet.costDetails_Vehicle("Mercedes/Class A");

        fleet.costDetails_TotalPrice("One thousand euro");

        fleet.saveBtn(false);

        fleet.notificationMessage("Total Price");

    })
})
describe.only("User verify that user can see the new vehicle cost on the list",()=>{
    it("User should see the new vehicle cost at the top of the list as dated",()=>{
        fleet.leftSideMenuSelection("Vehicle Costs", false);
        cy.log("User clicks Create button");
        cy.wait(2000);

        fleet.createBtn();
        fleet.costDetails_Vehicle("Mercedes/Class A");
        fleet.costDetails_Type("Tax roll");
        fleet.costDetails_TotalPrice("10000");
        fleet.costDetails_CostDescription("This is a demo vehicle");
        fleet.costDetails_Date("10/01/2020");

        cy.wait(2000);

        fleet.saveBtn(false);

        cy.log("User goes back to the Vehicle Costs menu");
        fleet.leftSideMenuSelection("Vehicle Costs", false);

        cy.log("User verifies if the created log on the list");

        fleet.selectVehicleFromList("Mercedes/Class A")

        



        cy.log("Cost Details is created successfully").wait(5000);
        fleet.actions("Delete");
    })
})