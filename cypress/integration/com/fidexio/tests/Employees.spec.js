/// <reference types='Cypress' />

import { employeesLocators } from "../ConstantLocators/employeesLocators";
import loginPage from "../pages/loginPage";
import {faker} from '@faker-js/faker';

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
    cy.wait(500);
    login.selectMenu('Employees');
    login.verifySelectedMenu('Employees');
})

describe('Employees Test suite',()=>{
    it('User can create a new Employee',()=>{
        cy.intercept('POST','https://qa.fidexio.com/**/read').as('waitForCreate');
        cy.wait('@waitForCreate').wait(500);

        cy.get(locaters.EMPLOYEES.CREATE).click();

        cy.log("User enter employee's name");
        const employeeName = faker.name.fullName();
        cy.get(locaters.EMPLOYEES.EMPLOYEE.NAME).clear().type(employeeName);

        cy.log("User enter employee's email")
        cy.get(locaters.EMPLOYEES.EMPLOYEE.WORKEMAIL).clear().type(employeeName + "@gmail.com");

        cy.log("User enter employee's mobile");
        cy.get(locaters.EMPLOYEES.EMPLOYEE.WORKMOBIL).clear().type(faker.phone.number('+49 1## #### ###'));

        cy.get(locaters.EMPLOYEES.SAVE).click();
        cy.contains("Employee created").should('be.visible');

        cy.log("Employee is successfully created!\n Now it will be deleted in 4 seconds...")
        cy.wait(4000);

        cy.contains('Action').click();
        cy.contains('Delete').click();
        cy.get('.modal-footer>button:first-child').click();
    })
})