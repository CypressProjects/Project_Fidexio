/// <reference types='cypress' />

import calendarPage from '../pages/calendarPage';
import loginPage from '../pages/loginPage';
import surveyPage from '../pages/surveyPage';

const login = new loginPage();
const survey = new surveyPage();
const calendar = new calendarPage();

describe('As a POSManager, I should be able to create and design a new survey from Survey module',()=>{
    before('As a POSManager, user is on the home page',()=>{
        cy.viewport(1500,1000);
        login.loginFidexio();
        cy.get('.oe_topbar_name').contains('POSManager10').should('be.visible');
    })
    it.skip('As a POSManager, user verify all buttons before creating a Survey',()=>{
        login.selectMenu("surveys");
        cy.url().should('include','survey')
        
        survey.createBtn();
        survey.discardBtn();
        survey.importBtn();
        survey.cancelBtn();
        survey.listView();
        survey.kanbanView();
    })
})


//const faker = require("faker");
describe('Verify all buttons work after creating a Survey',{defaultCommandTimeout:8000},()=>{
    it('User create a Survey',()=>{
        login.selectMenu("surveys");
        cy.url().should('include','survey')

        //survey.threeDotDelete("");
        survey.createSurvey();

    })

    it.skip('User verify all buttons working properly',()=>{
        cy.log(survey.surveyName);
        survey.enterSurveyTitle();
        survey.designSurveyBtn();
    })
})
