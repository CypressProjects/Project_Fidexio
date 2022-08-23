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

}

export default basePage;