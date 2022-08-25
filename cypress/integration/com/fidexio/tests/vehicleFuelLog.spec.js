/// <reference types='cypress' />

import loginPage from '../pages/loginPage';
import fuelLog from '../pages/fuelLog';

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
        it('User create new Vehicle Fuel Log',/*async*/()=>{
            cy.log("User hits the Vehicles Fuel Logs");
            fuel.leftSideMenuSelection('Vehicles Fuel Logs');

            cy.log("User hits the Create Button");
            fuel.controlBtn('Create');
            fuel.isBtnClicked('Create');

            cy.log("User enters vehicle informations");
            fuel.selectVehicle(4);
            cy.wait(2000);

            cy.log("User saves the datas successfully");
            fuel.controlBtn("Save");
            cy.wait(1000);
            
            fuel.verifySelectedVehicleName();
            
            //fuel.isBtnClicked('Save', await fuel.promiseTes())
            
            
            cy.log("User deletes created Vehicle Fuel Log");
            fuel.actions("Delete");

        })
})