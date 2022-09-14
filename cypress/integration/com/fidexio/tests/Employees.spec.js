/// <reference types='Cypress' />

import { employeesLocators } from "../ConstantLocators/employeesLocators";
import loginPage from "../pages/loginPage";
import {faker} from '@faker-js/faker';

const login = new loginPage();
const locaters = new employeesLocators();

const firstname = faker.name.firstName();
const lastname = faker.name.lastName();

beforeEach('User navigates to home page',()=>{
    const env = Cypress.env('selectedEnv'); // this will return ENV1 or ENV2
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

        cy.log("User enter employee's name" + firstname + " " + lastname);

        cy.get(locaters.EMPLOYEES.EMPLOYEE.NAME).clear().type(firstname + " " + lastname);

        cy.log("User enter employee's email")
        cy.get(locaters.EMPLOYEES.EMPLOYEE.WORKEMAIL).clear().type(firstname + lastname + "@gmail.com");

        cy.log("User enter employee's mobile");
        cy.get(locaters.EMPLOYEES.EMPLOYEE.WORKMOBIL).clear().type(faker.phone.number('+49 1## #### ###'));

        cy.get(locaters.EMPLOYEES.SAVE).click();
        cy.contains("Employee created").should('be.visible');

        //cy.log("Employee is successfully created!\n Now it will be deleted in 4 seconds...")
        //cy.wait(4000);

        //cy.contains('Action').click();
        //cy.contains('Delete').click();
        //cy.get('.modal-footer>button:first-child').click();
    })
})
describe('Employee should be viewed on the Employee list',()=>{
    it('Employee should be viewed on the Employee list',()=>{

        cy.get(locaters.EMPLOYEELIST).contains(firstname + lastname).click({force:true});

        cy.intercept('https://qa.fidexio.com/web/dataset/call_kw/ir.attachment/search_read').as('waitForEmployee');
        cy.wait('@waitForEmployee').wait(500);

        cy.contains('Action').click();
        cy.contains('Delete').click();
        cy.get('.modal-footer>button:first-child').click();
    })
})