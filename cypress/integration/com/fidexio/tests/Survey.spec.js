/// <reference types='cypress' />

import loginPage from '../pages/loginPage';
import surveyPage from '../pages/surveyPage';

const login = new loginPage();
const survey = new surveyPage();

describe('As a POSManager, I should be able to create and design a new survey from Survey module',()=>{
    before('As a POSManager, user is on the home page',()=>{
        login.loginFidexio();
        cy.get('.oe_topbar_name').contains('POSManager10').should('be.visible');
    })
    describe('As a POSManager, user verify all buttons before creating a Survey',()=>{
        it('',()=>{
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

    describe('Verify all buttons work after creating a Survey',()=>{
        it('User create a Survey',()=>{
            login.selectMenu("surveys");
            cy.url().should('include','survey')
    
            //survey.createSurvey();
            //survey.isSurveyCreated(survey.surveyName);
            survey.isSurveyCreated("Pink salmon")
            survey.threeDotDelete("Pink salmon");
        })
    
        it('User verify all buttons working properly',()=>{
            survey.gotoSurvey("Pink salmon");  // <---  survey.surveyName   replace it later
    
            survey.designSurveyBtn();
            cy.go('back');
            survey.testSurvey();
            cy.go(-1);
    
            
        })
    })
})



