/// <reference types='Cypress' />
import { faker } from '@faker-js/faker';
import loginPage from './loginPage';


const login = new loginPage();
class surveyPage{
    surveyName = faker.animal.fish();                   // first assign

    generateSurveyName(){                                // when new one is needed
        this.surveyName = faker.animal.fish();
    }
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

    enterSurveyTitle(){
        cy.get("input[placeholder='Survey Title']").type(this.surveyName);
    }
    saveBtn(){
        // click 'save' button
        cy.get("button.o_form_button_save").click();
        cy.get(".o_thread_message_content>p").invoke('text').should('eq','Survey created');
    }
    designSurveyBtn(){
        cy.get(".o_statusbar_buttons > :first-child").wait(1000).click();
        cy.url().should('include',this.surveyName);
    }
    testSurvey(){
        cy.contains('Test Survey').click();
        cy.url().should('include','start').and().should('include',this.surveyName);
    }
    backToSurveyBtn(){
        cy.contains('Back to Survey').click();
        cy.title().should('include',this.surveyName);
    }
    printSurvey(){
        cy.contains("Print Sruvey").click();
        cy.url().should('include','print').and().should('include',this.surveyName);
    }
    shareAndInvite(){
        cy.contains("Share and invite by email").click();
    }
    viewResults(){
        cy.contains("View results").first().click();
        cy.url().should('include','results').and().should('include',this.surveyName);
    }
    surveysList = "div[data-id='1']>:not(:nth-child(1))";  //???????????????????????????????????????????????
    gotoSurvey(surveyName){
        cy.get(this.surveysList).within(()=>{               //?????????????????????????????????
            cy.contains(surveyName).click({force:true});
            cy.title().should('include',surveyName);
        })
    }
    threeDotDelete(surveyName){
        cy.get(this.surveysList).within(()=>{
            cy.get("div:nth-child(2)>h4>span").each(($e,index,$list)=>{
                const name = $e.text();
                if(name == surveyName){
                    cy.get("div:nth-child(1)>a").eq(index).click({force:true});
                    cy.get("a[data-type='delete']").eq(index).click();

                    // into iFrame
                    //cy.get(".aut-iframe").then(($iframe)=>{
                    //    const iframeContent = $iframe.contents().find('body');
                    //    cy.wrap(iframeContent).get('.btn-primary > span').click();
                    //})
                    cy.get('.modal-footer > .btn-primary').wait(3000).click().wait(3000);

                    cy.reload();

                    cy.log("Survey is not deleted!");
                }
            })
        })
    }
    createSurvey(){
        this.createBtn();
        this.generateSurveyName();
        this.enterSurveyTitle();
        this.saveBtn();
    }
    isSurveyCreated(surveyName){
        login.selectMenu('Surveys');
        cy.get(this.surveysList).within(()=>{
            cy.contains(surveyName).invoke('text').should('eq',surveyName);
        })
    }
    isSurveyCreatedVerifyWithMessage(){
        cy.get(".o_thread_message_content>p").invoke('text').should('eq','Survey created');
    }














}
export default surveyPage;