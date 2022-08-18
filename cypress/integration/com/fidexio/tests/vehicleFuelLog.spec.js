/// <reference types='cypress' />

import loginPage from '../pages/loginPage';
import fleetPage from '../pages/fleetPage';
import fuelLog from '../pages/fuelLog';

const login = new loginPage();
const fleet = new fleetPage();
const fuel = new fuelLog();
describe('As a POSMANAGER, I should be able to enter a new Fuel Log for the vehicle',()=>{
    before('Login web page',()=>{
        login.loginFidexio();
        cy.get('.oe_topbar_name').contains('POSManager10').should('be.visible');
    })
    describe('Pos manager can create new Vehicles Fuel Logs',()=>{
        it('User hits Fleet button',()=>{
            login.selectMenu('Fleet');
            login.verifySelectedMenu('Fleet');
        })
        it('User hits the Vehicles Fuel Logs',()=>{
            fleet.leftSideMenuSelection('Vehicles Fuel Logs');
        })
        it('User hits the Create Button',()=>{
            fuel.controlBtn('Create');
            fuel.isBtnClicked('Create');
        })
        it('User enters vehicle informations',()=>{
            fuel.selectVehicle(4);
            cy.wait(5000);
        })
        it('User saves the datas successfully',()=>{
            fuel.controlBtn("Save");
            cy.wait(5000);
            fuel.isBtnClicked("Save");
        })
    })
})