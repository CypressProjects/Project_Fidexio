/// <reference types='Cypress' />

import basePage from "./basePage";

class fuelLog extends basePage{
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

    setSelectedVehicleName(){
            // return selected vehicle Name
            cy.get("td:nth-of-type(2)>a[name='vehicle_id']").then(($data)=>{
                cy.log($data.text());
                cy.wrap($data.text()).as("selectedVehicleName");
            })
    }
}
export default fuelLog;