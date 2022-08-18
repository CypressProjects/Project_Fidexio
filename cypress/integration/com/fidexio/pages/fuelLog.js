/// <reference types='Cypress' />

class fuelLog{
    selectedVehicleName;
    controlBtn(buttonName){
        cy.get(".o_cp_buttons").within(()=>{
            cy.contains(buttonName).click();
        })
    }
    isBtnClicked(buttonName){
        switch(buttonName){
            case "Create":
                cy.title().should('contain',"New");
            break;
            case "Save":
                cy.title().should('contain',"");
            break;
            case "Import":
                cy.title().should('contain',"Import a File");
            break;
            case "Discard":
                cy.title().should('contain',"Vehicles Fuel Logs");
            break;
        }
    }

    selectVehicle(vehicle){
        cy.get("#o_field_input_6").click({force:true});
        cy.wait(5000);
        cy.get("#ui-id-1").within(()=>{
            cy.contains("Search More...").click({force:true})
        })
        cy.get(".table-responsive>table>tbody").within(()=>{
            cy.get("tr:nth-of-type("+ vehicle + ")").within((path)=>{
                this.selectedVehicleName = cy.get("td:nth-of-type(2)").invoke('text');
                cy.wrap(path).click({force:true});
            })
        })
    }
}

export default fuelLog;