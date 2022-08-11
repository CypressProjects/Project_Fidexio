/// <reference types='cypress' />

import calendarPage from '../pages/calendarPage';
import loginPage from '../pages/loginPage';
import surveyPage from '../pages/surveyPage';

describe('As a POSManager, I should be able to create and desgin a new survey from Survey module',()=>{
    let login = new loginPage();
    let survey = new surveyPage();
    before('As a POSManager, user is on the home page',()=>{
        cy.viewport(1500,1000);
        login.loginFidexio();
        cy.get('.oe_topbar_name').contains('POSManager10').should('be.visible');
    })
    it('As a POSManager, user verify all buttons before creating a Survey',()=>{
        login.selectMenu("surveys");
        cy.url().should('include','survey')
        
        //click Create button
        survey.createBtn();
        survey.discardBtn();
        survey.importBtn();
        survey.cancelBtn();
        survey.listView();
        survey.kanbanView();
    })

    it.only('As a Posmanager, I should be able to create and to see my meetings and events on my calendar from "Calendar" module',()=>{
        const calendar = new calendarPage();
        login.selectMenu('Calendar');

        calendar.monthPicker("Sep");
    })
})