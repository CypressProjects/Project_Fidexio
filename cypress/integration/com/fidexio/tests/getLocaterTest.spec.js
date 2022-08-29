/// <reference types='Cypress' /> 

import constantLocators from "../ConstantLocators/demoLocators";

const locaters = require('../ConstantLocators/demoLocators2.json')
describe('',()=>{
    it('',()=>{
        cy.visit('https://fineuploader.com/');

        cy.get(locaters.HOMEPAGE.DEMOS).click();
        cy.get(locaters.HOMEPAGE.DEMOS_SIDE_MENU.BASIC_SETUP).click();
        cy.wait(1000).go('back');
        cy.get(locaters.HOMEPAGE.DEMOS_SIDE_MENU.GALLERY_VIEW).click();
        cy.wait(1000).go('back');
        cy.get(locaters.HOMEPAGE.DEMOS_SIDE_MENU.MANUAL_TRIGGER).click();
        cy.wait(1000).go('back');
        cy.get(locaters.HOMEPAGE.DEMOS_SIDE_MENU.UPLOAD_AMAZON).click();
        cy.wait(1000).go('back');
    })
})