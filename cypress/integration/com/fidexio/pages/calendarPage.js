/// <reference types='Cypress' />

class calendarPage {
  monthPicker(value) {
    let actualMonth = cy.get(".ui-datepicker-month").invoke('text');

    let expectedMonth = value;

    //actualMonth.then(($data)=>{
    //    cy.log($data)
    //})

    let list = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];

    for(let i = 0; i < list.length; i++){
        if(list[i] == actualMonth.then(($data)=>{return $data})){
            actualMonth = i;
            cy.log(actualMonth);
        }
    }

    for(let i = 0; i < list.length; i++){
        if(list[i] == expectedMonth) expectedMonth = i;
    }
    cy.log(expectedMonth);

    switch (value) {
      case "Jan":
        expectedMonth = 1;
        break;
      case "Feb":
        expectedMonth = 2;
        break;
      case "Mar":
        expectedMonth = 3;
        break;
      case "Apr":
        expectedMonth = 4;
        break;
      case "May":
        expectedMonth = 5;
        break;
      case "Jun":
        expectedMonth = 6;
        break;
      case "Jul":
        expectedMonth = 7;
        break;
      case "Aug":
        expectedMonth = 8;
        break;
      case "Sep":
        expectedMonth = 9;
        break;
      case "Oct":
        expectedMonth = 10;
        break;
      case "Nov":
        expectedMonth = 11;
        break;
      case "Dec":
        expectedMonth = 12;
        break;
    }
  }
}
export default calendarPage;
