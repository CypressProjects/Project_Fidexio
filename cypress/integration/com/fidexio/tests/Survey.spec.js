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

    describe('User verify all buttons before creating a Survey',()=>{
        it('User clicks each button on the menu',()=>{
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

    describe('User verify that the "Survey created" message appears under the survey form sheet',()=>{
        it('User clicks "Surveys" option at the top bar of the home page',()=>{
            login.selectMenu("surveys");
            login.verifySelectedMenu("Surveys")
        })
        it('User clicks "create" button',()=>{
            survey.createBtn();
        })
        it('User enters generated Survey Title on upcoming window',()=>{
            survey.generateSurveyName();
            survey.enterSurveyTitle();
        })
        it('User clicks "Save" button',()=>{
            survey.saveBtn();
        })
        it('User verify that "Survey created" message appears under the survey form sheet',()=>{
            survey.isSurveyCreatedVerifyWithMessage();
        })
    })

    describe('User verify that the user should be able to see created survey is listed after clicking the Surveys module',()=>{
        it('User create a Survey',()=>{
            survey.createSurvey();
        })
        it('User verify that user should see created survey in Survey module',()=>{
            survey.isSurveyCreated();
        })
    })

    describe.skip('User verify all buttons work after creating a Survey',()=>{
        it('User create a Survey',()=>{
            login.selectMenu("surveys");
            login.verifySelectedMenu("Surveys")
    
            survey.createSurvey();
            survey.isSurveyCreated(survey.surveyName);
            //survey.isSurveyCreated("Pink salmon")
            //survey.threeDotDelete("Pink salmon");
        })
    
        it('User verify all buttons working properly',()=>{
            survey.gotoSurvey("Pink salmon");  // <---  survey.surveyName   replace it later
    
            survey.designSurveyBtn();
            cy.go('back');
            survey.testSurvey();
            cy.go(-1);
        })
    })

    describe.skip('User verify all buttons work in Survey module',()=>{
        it('User create a Survey',()=>{
            login.selectMenu("surveys");
            cy.url().should('include','survey')
    
            survey.createSurvey();
            survey.isSurveyCreated(survey.surveyName);
            //survey.isSurveyCreated("Pink salmon")
            //survey.threeDotDelete("Pink salmon");
        })
        it('User clicks listed buttons on created survey',()=>{
            //survey.timeSign();
            //survey.threeDotEditSurvey();
            //cy.go(-1);
            survey.threeDotDelete();
        })
    })
})