/// <reference types='cypress' />

import calendarPage from '../pages/calendarPage';
import loginPage from '../pages/loginPage';
import surveyPage from '../pages/surveyPage';

const login = new loginPage();
const survey = new surveyPage();
const calendar = new calendarPage();


describe('As a Posmanager, I should be able to create and to see my meetings and events on my calendar from "Calendar" module'
,{defaultCommandTimeout:5000},()=>{
    before('As a POSManager, user is on the home page',()=>{
        login.loginFidexio();
        cy.get('.oe_topbar_name').contains('POSManager10').should('be.visible');
    })
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