/// <reference types='Cypress' />

import basePage from "./basePage";

class fuelLog extends basePage{

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