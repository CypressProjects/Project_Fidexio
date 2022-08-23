/// <reference types='Cypress' />
import {faker} from '@faker-js/faker';
import basePage from './basePage';


class fleetPage extends basePage{
    vehicleModeName = faker.vehicle.model();

verifyOptionTitle(titleName){
    cy.wait(3000);
    cy.get(".breadcrumb>li").invoke('text').should('eq',titleName);
}

listBtnLocater = ".o_cp_buttons";
createBtn(){
    cy.get(this.listBtnLocater).contains("Create").click();

    cy.title().should('contain','New');
}
saveBtn(verifyTitle){
    cy.get(this.listBtnLocater).contains("Save").click().then(()=>{
        if(false || verifyTitle){
            cy.title().should('contain',this.vehicleModeName);
        }
    });
    
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
        cy.get("tbody.ui-sortable").contains(maker).click({force:true});
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

 costDetails(vehicle, type, totalPrice, costDescription, date){
    cy.get(".o_form_sheet>.o_group").within(($data)=>{
        // checking whether we in Cost Details
        cy.wrap($data).should('contain','Cost Details');

        // Cost Details Section
        cy.get("table:first-of-type").within(()=>{

            // Vehicle
            cy.get("tbody>:first-child").click();
            cy.wait(1000);
            //cy.get(".ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content:first-of-type")
            cy.xpath("//ul[@class='ui-autocomplete ui-front ui-menu ui-widget ui-widget-content'][1]//a")
            .contains("Search More...").click({force:true});
            cy.xpath("//div[@class='modal-dialog modal-lg']//input[@class='o_searchview_input']")
                .clear().type(vehicle + "{enter}");
            cy.xpath("//tbody[@class='ui-sortable']").contains(vehicle).click({force:true});
            //cy.get("tbody.ui-sortable").contains(vehicle).click({force:true});

            // Type
            cy.get("tbody>:nth-child(2)").click();
            cy.wait(1000);
            //cy.get(".ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content:nth-of-type(2)")
            cy.xpath("//ul[@class='ui-autocomplete ui-front ui-menu ui-widget ui-widget-content'][2]")
                .contains(type).click({force:true});

            // Total Price
            cy.get("tbody>:nth-child(3)").clear().type(totalPrice);

            // Cost Description
            cy.get("tbody>:nth-child(4)").clear().type(costDescription);
        })

        // Date section
        cy.get(".o_datepicker_input.o_input").clear().type(date);
    })
 }
 costDetails_Vehicle(vehicle){
    cy.get(".o_form_sheet>.o_group").within(($data)=>{
        // checking whether we in Cost Details
        cy.wrap($data).should('contain','Cost Details');

        // Cost Details Section
        cy.get("table:first-of-type").within(()=>{

            // Vehicle
            cy.get("tbody>:first-child").click();
            cy.wait(1000);
            //cy.get(".ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content:first-of-type")
            cy.xpath("//ul[@class='ui-autocomplete ui-front ui-menu ui-widget ui-widget-content'][1]//a")
            .contains("Search More...").click({force:true});
            cy.xpath("//div[@class='modal-dialog modal-lg']//input[@class='o_searchview_input']")
                .clear().type(vehicle + "{enter}");
            cy.xpath("//tbody[@class='ui-sortable']").contains(vehicle).click({force:true});
        })
    })
 }
 costDetails_Type(type){
    cy.get(".o_form_sheet>.o_group").within(($data)=>{
        // checking whether we in Cost Details
        cy.wrap($data).should('contain','Cost Details');

        // Cost Details Section
        cy.get("table:first-of-type").within(()=>{
            // Type
            cy.get("tbody>:nth-child(2)").click();
            cy.wait(1000);
            //cy.get(".ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content:nth-of-type(2)")
            cy.xpath("//ul[@class='ui-autocomplete ui-front ui-menu ui-widget ui-widget-content'][2]")
                .contains(type).click({force:true});
        })
    })
 }
 costDetails_TotalPrice(totalPrice){
    cy.get(".o_form_sheet>.o_group").within(($data)=>{
        // checking whether we in Cost Details
        cy.wrap($data).should('contain','Cost Details');

        // Cost Details Section
        cy.get("table:first-of-type").within(()=>{

            // Total Price
            cy.get("tbody>:nth-child(3)").clear().type(totalPrice);
        })
    })
 }
 costDetails_CostDescription(costDescription){
    cy.get(".o_form_sheet>.o_group").within(($data)=>{
        // checking whether we in Cost Details
        cy.wrap($data).should('contain','Cost Details');

        // Cost Details Section
        cy.get("table:first-of-type").within(()=>{

            // Cost Description
            cy.get("tbody>:nth-child(4)").clear().type(costDescription);
        })
    })
 }
 costDetails_Date(date){
    cy.get(".o_form_sheet>.o_group").within(($data)=>{
        // checking whether we in Cost Details
        cy.wrap($data).should('contain','Cost Details');

        // Date section
        cy.get(".o_datepicker_input.o_input").clear().type(date);
    })
 }
 verifyCostDetailsLabels(){
    //cy.get(".o_form_sheet>.o_group").find('label').should(($lis)=>{
    //    expect($lis).to.have.any.keys(["Vehicle","Type","Total Price", "Cost Description","Date", "Parent"]);
    //})
    cy.get(".o_form_sheet>.o_group").within(($data)=>{
        cy.wrap($data).should('contain',"Vehicle");
        cy.wrap($data).should('contain',"Type");
        cy.wrap($data).should('contain',"Total Price");
        cy.wrap($data).should('contain',"Date");
    })
}






}
export default fleetPage;