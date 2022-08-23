/// <reference types='Cypress' />

class basePage {

    controlBtn(buttonName){
        cy.wait(3000);
        cy.get(".o_cp_buttons").within(()=>{
            cy.contains(buttonName).click({force:true});
        })
    }

    isBtnClicked(buttonName,savedTitleName){
        switch(buttonName){
            case "Create":
                cy.title().should('contain',"New");
            break;
            case "Save":
                cy.title().should('contain',savedTitleName);
            break;
            case "Import":
                cy.title().should('contain',"Import a File");
            break;
            case "Discard":
                cy.title().should('contain',"Vehicles Fuel Logs");
            break;
        }
    }

    leftSideMenuSelection(menuOption, verifyTitle){
        cy.get(".o_sub_menu_content>div:nth-of-type(21)>ul").within(()=>{
            cy.contains(menuOption).click({force:true}).then(()=>{
                if(false || verifyTitle){
                    cy.title().should('contain',menuOption);
                }
            });
        });
    }

    attachments(){

    }
    btnGroup = ".o_cp_sidebar > .btn-group";
    actions(action){
        let actionPath = this.btnGroup + ">:nth-of-type(3)";
        cy.get(actionPath).click();
        switch(action){
            case "Delete":
                cy.get(actionPath).within(()=>{
                    cy.contains("Delete").click();
                });
                cy.get("body>div:last-of-type").within(()=>{
                    cy.contains("Ok").click({force:true});
                });
            break;
            case "Duplicate":
                cy.get(actionPath).within(()=>{
                    cy.contains("Duplicate").click();
                });
            break;
        }
     }

}

export default basePage;