/// <reference types='cypress' />

import calendarPage from '../pages/calendarPage';
import loginPage from '../pages/loginPage';
import surveyPage from '../pages/surveyPage';
import { faker } from '@faker-js/faker';

describe('As a POSManager, I should be able to create and desgin a new survey from Survey module',()=>{
    let login = new loginPage();
    let survey = new surveyPage();
    before('As a POSManager, user is on the home page',()=>{
        cy.viewport(1500,1000);
        login.loginFidexio();
        cy.get('.oe_topbar_name').contains('POSManager10').should('be.visible');
        login.selectMenu("surveys");
    })
    it.skip('As a POSManager, user verify all buttons before creating a Survey',()=>{
        
        cy.url().should('include','survey')
        
        //click Create button
        survey.createBtn();
        survey.discardBtn();
        survey.importBtn();
        survey.cancelBtn();
        survey.listView();
        survey.kanbanView();
    })
})

//const faker = require("faker");
describe('Verify all buttons work after creating a Survey',{defaultCommandTimeout:4000},()=>{
    it('User create a Survey',()=>{
        // click 'create' button
        cy.get('button.o-kanban-button-new').click({force:true});
        cy.title().should('eq','New - Odoo')
    })

    it('User click Design Survey button',()=>{
        const surveyName = faker.animal.dog();
        cy.log(surveyName);
        cy.get("input[placeholder='Survey Title']").type(surveyName);
        // click Design Survey button 
        cy.get(".o_statusbar_buttons > :first-child").wait(1000).click()
    })
    it.skip('User click Start Survey button',()=>{

    })
    it.skip('User click Back to Survey button',()=>{
        
    })
    it.skip('User click Test Survey button',()=>{
        
    })
    it.skip('User click Test Survey button',()=>{
        
    })
    it.skip('User click Back to Survey button',()=>{
        
    })
    it.skip('User click Print Survey button',()=>{
        
    })
    it.skip('User click Back to Survey button',()=>{
        
    })
    it.skip('User click Print Share and invite by email',()=>{
        
    })
    it.skip('User click View results Survey button',()=>{
        
    })
})