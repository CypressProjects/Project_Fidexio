/// <reference types='Cypress' />

import { employeesLocators } from "../ConstantLocators/employeesLocators";
import loginPage from "../pages/loginPage";

const login = new loginPage();
const locaters = new employeesLocators();

before('User navigates to home page',()=>{
    const env = Cypress.env('selectedEnv');
    cy.visit(Cypress.env(env).url);
    cy.get('#login').type(Cypress.env(env).username);
    cy.get('#password').type(Cypress.env(env).password);
    cy.get('.btn').click();

    cy.log('User hits Employees button');
    login.selectMenu('Employees');
    login.verifySelectedMenu('Employees');
    login.selectMenu('Employees');
    cy.wait(3000);
})

describe('Employees Test suite',()=>{
    it('User can create a new Employee',()=>{
        cy.get(locaters.EMPLOYEES.CREATE).click();
    })
})