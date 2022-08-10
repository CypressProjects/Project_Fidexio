/// <reference types='Cypress' />

class loginPage{

    loginFidexio(){
        cy.visit('https://qa.fidexio.com/');

        cy.get('#login').type("posmanager10@info.com");
        cy.get('#password').type("posmanager");
        cy.get('.btn').click();
    }

    selectMenu(value){
        switch(value){
            //case "Calender":
            //    cy.get('.oe_menu_leaf').contains('li',value,{matchCase:false}).click({force: true}).should('have.value',value);
            //    break;
            //case "Notes":
            //    cy.get('.oe_menu_leaf').contains(value).click({force: true}).should('have.value',value);
            //    break;
            default:
                //cy.get('.oe_menu_toggler').contains(value).click({force: true}).should('have.value',value);
                cy.contains(value,{matchCase:false}).click();
        }
    }
}
export default loginPage;