/// <reference types='cypress' />

import calendarPage from '../pages/calendarPage';
import loginPage from '../pages/loginPage';
import surveyPage from '../pages/surveyPage';

const login = new loginPage();
const calendar = new calendarPage();

beforeEach('As a POSManager, user is on the home page',()=>{
    login.loginFidexio();
    cy.get('.oe_topbar_name').contains('POSManager10').should('be.visible');

    login.selectMenu('Calendar');
    login.verifySelectedMenu("Calendar");
})

describe('As a Posmanager, I should be able to create and to see my meetings and events on my calendar from "Calendar" module'
,()=>{
    it('User can create an even by clicking on the time box',()=>{
        calendar.monthPicker("Nov");
        calendar.dayPicker(16);
        calendar.setMeetingInDayTable("10:00");
        cy.wait(3000);
    })
    it(' Users can erase a created event',()=>{
        calendar.eraseMeeting("Nov",16,"10:00");
        cy.log("Assertion will be added!")
    })
})