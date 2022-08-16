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
describe('As a Posmanager, I should be able to create and to see my meetings and events on my calendar from "Calendar" module'
,{defaultCommandTimeout:5000},()=>{
    it('User can create an even by clicking on the time box',()=>{
        login.selectMenu('Calendar');
        calendar.monthPicker("Nov");
        calendar.dayPicker(16);
        calendar.setMeetingInDayTable("10:00");
    })
    it(' Users can erase a created event',()=>{
        cy.wait(5000);
        login.selectMenu("Discuss");
        login.selectMenu("Calendar");
        calendar.eraseMeeting("Nov",16,"10:00");
    })
})

//const faker = require("faker");
describe.skip('Verify all buttons work after creating a Survey',{defaultCommandTimeout:4000},()=>{
    it('User create a Survey',()=>{
        //survey.threeDotDelete("afdgs");
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