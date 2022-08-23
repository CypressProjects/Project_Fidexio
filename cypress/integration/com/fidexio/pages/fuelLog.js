/// <reference types='Cypress' />

import basePage from "./basePage";

class fuelLog extends basePage{
    selectedVehicleName;
    selectVehicle(vehicle){
        cy.get("div[name='vehicle_id']>div>input").click({force:true});
        //cy.wait(3000);
        cy.get(".ui-autocomplete.ui-front").first().within(()=>{
            cy.contains("Search More...").click({force:true})
        })
        cy.get(".table-responsive>table>tbody").within(()=>{
            cy.get("tr:nth-of-type("+ vehicle + ")").within((path)=>{
                cy.wrap(path).click({force:true});
            })
        })
    }

    getSelectedVehicleName(){
        return new Cypress.Promise((resolve)=>{
            // return selected vehicle Name
            resolve(cy.get("td:nth-of-type(2)>a[name='vehicle_id']").invoke('text'));
        })
    }
}
export default fuelLog;