/// <reference types='Cypress' />

class surveyPage{
    createBtn(){
        cy.wait(500);
        cy.contains('button','Create').click().should('be.visible');
        cy.title().should('include','New');
    }

    discardBtn(){
        cy.get('.o_form_buttons_edit > .btn-default').click().should('be.visible');
    }

    importBtn(){
        cy.contains('button','Import').click().should('be.visible');
        cy.url().should('include','import');
    }

    cancelBtn(){
        cy.get('.o_import_cancel').click().should('be.visible');
        cy.title().should('include','Surveys');
    }

    listView(){
        cy.get('.fa-list-ul').click().should('be.visible');
        cy.url().should('include','view_type=list');
    }

    kanbanView(){
        cy.wait(500);
        cy.get('.fa-th-large').click().should('be.visible');
        cy.url().should('include','view_type=kanban')
    }
}
export default surveyPage;