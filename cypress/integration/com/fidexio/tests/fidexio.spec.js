/// <reference types='cypress' />

import calendarPage from '../pages/calendarPage';
import loginPage from '../pages/loginPage';
import surveyPage from '../pages/surveyPage';

const login = new loginPage();
const survey = new surveyPage();

describe('As a POSManager, I should be able to create and design a new survey from Survey module',()=>{
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
        survey.threeDotDelete("afdgs");
        //survey.createBtn();
    })

    it.skip('User click Design Survey button',()=>{
        cy.log(survey.surveyName);
        survey.enterSurveyTitle();
        survey.designSurveyBtn();
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