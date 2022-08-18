/// <reference types='cypress' />

import loginPage from '../pages/loginPage';
import surveyPage from '../pages/surveyPage';

const login = new loginPage();
const survey = new surveyPage();


    beforeEach('As a POSManager, user is on the Surveys page',()=>{
        login.loginFidexio();
        cy.get('.oe_topbar_name').contains('POSManager10').should('be.visible');

        login.selectMenu("surveys");
        login.verifySelectedMenu("Surveys")
    })

   describe.skip('User verify all buttons before creating a Survey',()=>{
       it('User clicks each button on the menu',()=>{

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
            cy.log("User clicks 'create' button");
            survey.createBtn();

            cy.log('User enters generated Survey Title on upcoming window');
            survey.generateSurveyName();
            survey.enterSurveyTitle();

            cy.log("User clicks 'Save' button");
            survey.saveBtn();

            cy.log("User verify that 'Survey created' message appears under the survey form sheet");
            survey.isSurveyCreatedVerifyWithMessage();

            cy.log("User deletes created survey");
            login.selectMenu('Surveys');
            survey.threeDotDelete(survey.surveyName);
        })
    })

   describe.only('User verify that the user should be able to see created survey is listed after clicking the Surveys module',()=>{
        it('User create a Survey',()=>{
            survey.createSurvey();

            cy.log("User verify that user should see created survey in Survey module");
            //survey.isSurveyCreated();
            cy.wait(2000);
            cy.log("User deletes created survey");
            login.selectMenu('Surveys');
            survey.threeDotDelete(survey.surveyName);
        })
    })

    describe('User verify all buttons work after creating a Survey',()=>{
        it('User create a Survey',()=>{
   
            survey.createSurvey();
            survey.isSurveyCreated(survey.surveyName);

            

            cy.log('User verify all buttons working properly');

            survey.gotoSurvey(survey.surveyName);  // <---  survey.surveyName   replace it later
    
            survey.designSurveyBtn();
            cy.go('back');
            survey.testSurvey();
            cy.go(-1);

            cy.log("User deletes created survey");
            survey.threeDotDelete(survey.surveyName);
        })
    })

    describe('User verify all buttons work in Survey module',()=>{
        it('User create a Survey',()=>{
            login.selectMenu("surveys");
            cy.url().should('include','survey')
    
            survey.createSurvey();
            survey.isSurveyCreated(survey.surveyName);

            cy.log("User clicks listed buttons on created survey");
            //survey.timeSign();
            //survey.threeDotEditSurvey();
            //cy.go(-1);

            cy.log("User deletes created survey");
            survey.threeDotDelete(survey.surveyName);
        })
    })