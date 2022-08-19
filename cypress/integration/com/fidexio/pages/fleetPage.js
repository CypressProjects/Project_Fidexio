/// <reference types='Cypress' />
import {faker} from '@faker-js/faker';


class fleetPage{
    vehicleModeName = faker.vehicle.model();
leftSideMenuSelection(menuOption){
    cy.get(".o_sub_menu_content>div:nth-of-type(21)>ul").each(($li, index, $list)=>{
        if($li.contents().find(menuOption)){
            cy.contains(menuOption).click({force:true});
            cy.wait(2000).title().should('contain',menuOption);
        }else cy.log("Menu option doesn't exist!")
    })
}
listBtnLocater = ".o_cp_buttons";
createBtn(){
    cy.get(this.listBtnLocater).contains("Create").click();

    cy.title().should('contain','New');
}
saveBtn(){
    cy.get(this.listBtnLocater).contains("Save").click();
    cy.title().should('contain',this.vehicleModeName);
}
discardBtn(){
    cy.get(this.listBtnLocater).contains("Discard").click().wait(1000).should('not.be.visible');
}
editBtn(){
    cy.get(this.listBtnLocater).contains("Edit").click().wait(1000).should('not.be.visible');
}
enterModelName(){
    cy.get('.oe_title>h1>input').click().type(this.vehicleModeName);
}
selectMaker(maker){
    cy.get("[name='brand_id']>div>input").click({force:true});
    cy.wait(2000);
    cy.get(".ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content").within(()=>{
        cy.contains("Search More...").click({force:true})
    })
    cy.get(".modal-dialog.modal-lg > .modal-content").within(()=>{
        cy.get("input[placeholder='Search...']").type(maker + "{enter}");
        cy.wait(2000);
        cy.get("tbody.ui-sortable").contains(maker).click({force:true})
    })
}
btnGroup = ".o_cp_sidebar > .btn-group";
attachments(){

}
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
export default fleetPage;