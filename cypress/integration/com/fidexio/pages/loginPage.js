/// <reference types='Cypress' />

class loginPage{

    loginFidexio(){
        const fidexio = require('../../../../fixtures/fidexioConf.json');
        cy.visit(fidexio.url,{failOnStatusCode:false});

        cy.get('#login').type(fidexio.email);
        cy.get('#password').type(fidexio.password);
        cy.get('.btn').click();
    }
    selectMenu(value){
        cy.wait(1000);
        switch(value){
            case "Discuss":
                cy.get('.active > .oe_menu_leaf > .oe_menu_text').click();
                break;
            case "Calender":
                cy.get('.navbar-left > :nth-child(2) > .oe_menu_leaf > .oe_menu_text').click({force: true});
                break;
            case "Notes":
                cy.get('.navbar-left > :nth-child(3) > .oe_menu_leaf > .oe_menu_text').click({force: true});
                break;
            default:
                cy.contains(value,{matchCase:false}).click({force:true});
        }
    }
}

export default loginPage;