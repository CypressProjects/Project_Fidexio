/// <reference types='Cypress' />

class calendarPage {
  monthPicker(value) {
    let actualMonth  = cy.get(".ui-datepicker-month").then(($data)=>{
      cy.log($data.text())
      //return $data.text();
    })
      

    let expectedMonth = value;

    //actualMonth.then(($data)=>{
    //    cy.log($data)
    //})

    let list = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];

    for(let i = 0; i < list.length; i++){
        if(list[i] == actualMonth){
            actualMonth = i;
        }
    }
    cy.log("actualMonth: " + actualMonth);

    for(let i = 0; i < list.length; i++){
        if(list[i] == expectedMonth) expectedMonth = i;
    }
    cy.log("expectedMonth: " + expectedMonth);

  }
}
export default calendarPage;
