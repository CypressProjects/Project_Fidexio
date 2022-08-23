/// <reference types='cypress' />

import loginPage from '../pages/loginPage';
import fleetPage from '../pages/fleetPage';
import fuelLog from '../pages/fuelLog';
import basePage from '../pages/basePage';

const login = new loginPage();
const fuel = new fuelLog();

before('Login web page',()=>{
    login.loginFidexio();
    cy.get('.oe_topbar_name').contains('POSManager10').should('be.visible');

    cy.log('User hits Fleet button');
    login.selectMenu('Fleet');
    login.verifySelectedMenu('Fleet');
})

describe('As a POSMANAGER, I should be able to enter a new Fuel Log for the vehicle',()=>{
        it('User create new Vehicle Fuel Log',()=>{
            cy.log("User hits the Vehicles Fuel Logs");
            fuel.leftSideMenuSelection('Vehicles Fuel Logs');

            cy.log("User hits the Create Button");
            fuel.controlBtn('Create');
            fuel.isBtnClicked('Create');

            cy.log("User enters vehicle informations");
            fuel.selectVehicle(4);
            cy.wait(5000);

            cy.log("User saves the datas successfully");
            fuel.controlBtn("Save");
            cy.wait(5000);
            fuel.isBtnClicked("Save",fuel.selectedVehicleName);
            

            cy.log("User deletes created Vehicle Fuel Log");

        })
})